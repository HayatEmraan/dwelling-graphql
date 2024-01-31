const fs = require("fs");
const { userResolvers } = require("./resolvers/user.resolvers");
const { roomResolvers } = require("./resolvers/room.resolvers");
const { propertyResolvers } = require("./resolvers/property.resolvers");
const { pendingResolvers } = require("./resolvers/pending.resolvers");
const { paymentResolvers } = require("./resolvers/payment.resolvers");

const userDefs = fs.readFileSync(
  process.cwd() + "/graphql/schema/user.graphql",
  {
    encoding: "utf-8",
  }
);

const roomDefs = fs.readFileSync(
  process.cwd() + "/graphql/schema/room.graphql",
  {
    encoding: "utf-8",
  }
);

const propertyDefs = fs.readFileSync(
  process.cwd() + "/graphql/schema/property.graphql",
  {
    encoding: "utf-8",
  }
);

const pendingDefs = fs.readFileSync(
  process.cwd() + "/graphql/schema/pending.graphql",
  {
    encoding: "utf-8",
  }
);

const paymentDefs = fs.readFileSync(
  process.cwd() + "/graphql/schema/payment.graphql",
  {
    encoding: "utf-8",
  }
);

const typeDefs = `#graphql
  ${userDefs}
  ${roomDefs}
  ${propertyDefs}
  ${pendingDefs}
  ${paymentDefs}
`;

const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...roomResolvers.Query,
    ...propertyResolvers.Query,
    ...pendingResolvers.Query,
    ...paymentResolvers.Query,
  },
};

module.exports = { typeDefs, resolvers };
