const express = require("express");
const router = express();

const explorePopularRepos = require("../controllers/explore.controller.js");


router.get("/repos/:language", explorePopularRepos);

module.exports = router;
