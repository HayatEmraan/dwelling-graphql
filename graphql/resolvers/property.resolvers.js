const { propertyDB } = require("../../db/mongodb");
const { ObjectId } = require("mongodb");
const propertyResolvers = {
  Query: {
    getAllProperties: async () => {
      return await propertyDB.find({}).toArray();
    },
    getPropertyById: async (_, { id }) => {
      return await propertyDB.findOne({ _id: new ObjectId(id) });
    },
  },
};

module.exports = { propertyResolvers };
