const { paymentDB } = require("../../db/mongodb");
const { ObjectId } = require("mongodb");

const paymentResolvers = {
  Query: {
    getAllPayment: async () => await paymentDB.find({}).toArray(),
    getPaymentById: async (_, { id }) =>
      await paymentDB.findOne({ _id: new ObjectId(id) }),
  },
};

module.exports = { paymentResolvers };
