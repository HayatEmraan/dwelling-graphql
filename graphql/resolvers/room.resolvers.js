const { roomsDB } = require("../../db/mongodb");
const { ObjectId } = require("mongodb");

const roomResolvers = {
  Query: {
    getAllRooms: async () => await roomsDB.find({}).toArray(),
    getRoomById: async (parent, { id }) =>
      await roomsDB.findOne({ _id: new ObjectId(id) }),
  },
};

module.exports = { roomResolvers };
