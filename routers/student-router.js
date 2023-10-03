const express = require("express");

const { homePage, insertValues } = require("../controllers/student-contoller.js");

const studentRouter = express.Router();

studentRouter.get("/", homePage);

studentRouter.post("/submit", insertValues);

module.exports = studentRouter;