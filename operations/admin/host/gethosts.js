const { usersDB } = require("../../../db/mongodb");

const gethosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = 8;
    const skip = (page - 1) * pageSize;
    const count = await usersDB.countDocuments({ role: "host" });
    const totalPages = Math.ceil(count / pageSize);
    const users = await usersDB
      .find({ role: "host" })
      .sort({ _id: -1 })
      .skip(skip)
      .limit(pageSize)
      .toArray();
    const startItem = skip + 1;
    const endItem = Math.min(skip + pageSize, count);

    return res.status(200).send({
      msg: "Success",
      data: users,
      currentPage: page,
      totalPages: totalPages,
      startView: `${startItem} - ${endItem}`,
      totalView: count,
    });
  } catch (error) {
    return res.status(500).send({ msg: "Internal Server Error" });
  }
};

module.exports = gethosts;
