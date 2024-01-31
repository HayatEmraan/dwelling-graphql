const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const app = express();
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const port = process.env.PORT;
const { connectDB } = require("./db/mongodb");
const { resolvers, typeDefs } = require("./graphql");

// application middlewares
app.use(cors());
// app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function startServer() {
  try {
    await connectDB();
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    await server.start();
    app.use("/graphql", expressMiddleware(server));
    app.use("/api/v1", require("./routes/v1/routes"));
    app.use("/api/v2", require("./routes/v2/routes"));

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();
