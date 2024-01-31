const { usersDB } = require("../../db/mongodb");
const { ObjectId } = require("mongodb");

const userResolvers = {
  Query: {
    getAllUser: async () => await usersDB.find({}).toArray(),
    getUserById: async (parent, { id }) =>
      await usersDB.findOne({ _id: new ObjectId(id) }),
  },
};

module.exports = { userResolvers };
