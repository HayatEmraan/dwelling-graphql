const express = require("express");
const { getRooms } = require("../../operations/open/rooms/rooms");
const {
  getCategoryRooms,
} = require("../../operations/open/categories/category");
const { searchResult } = require("../../operations/open/search/searchresult");
const { setUser } = require("../../utils/postuser/setuser");
const { exitUser } = require("../../utils/postuser/exituser");
const { getDetails } = require("../../operations/open/rooms/details");
const { location } = require("../../operations/open/location/location");
const { gettext } = require("../../operations/open/text");
const router = express.Router();

// get rooms - in graphql
router.get("/getrooms", getRooms);
router.get("/getdetails/:id", getDetails);
router.get("/category/rooms", getCategoryRooms);

// not in graphql
router.get("/getsearch", searchResult);
router.get("/getlocations", location);

// post user
router.post("/postuser", exitUser, setUser);

router.post("/text", gettext);

module.exports = router;
