const { roomsDB } = require("../../db/mongodb");
const { ObjectId } = require("mongodb");

const roomResolvers = {
  Query: {
    getAllRooms: async () => await roomsDB.find({}).toArray(),
    getRoomById: async (parent, { id }) =>
      await roomsDB.findOne({ _id: new ObjectId(id) }),
    getRoomByCategory: async (parent, { category }) =>
      await roomsDB
        .find({ "category.name": { $regex: category, $options: "i" } })
        .sort({
          _id: -1,
        })
        .toArray(),
  },
};

module.exports = { roomResolvers };
