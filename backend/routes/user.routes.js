const express = require("express");

const getUserProfileAndRepos = require("../controllers/user.controller.js");

const router = express();

router.get("/profile/:username", getUserProfileAndRepos);

module.exports = router;
