const express = require("express");

const { homePage, insertValues, getStudent, deleteStudent } = require("../controllers/student-contoller.js");

const studentRouter = express.Router();

studentRouter.get("/", homePage);
studentRouter.post("/submit", insertValues);
studentRouter.get("/student", getStudent);
studentRouter.get("/delete-student", deleteStudent);

module.exports = studentRouter;