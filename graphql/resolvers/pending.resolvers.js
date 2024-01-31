const { pendingPaymentDB } = require("../../db/mongodb");
const { ObjectId } = require("mongodb");
const pendingResolvers = {
  Query: {
    getAllPending: async () => {
      return await pendingPaymentDB.find({}).toArray();
    },
    getPendingById: async (_, { id }) => {
      return await pendingPaymentDB.findOne({ _id: new ObjectId(id) });
    },
  },
};

module.exports = { pendingResolvers };
