// Importing express module
const express = require("express");

// Creating a router object
const router = express.Router();

// Importing auth middleware
const { auth } = require("../middleware/auth");

// Importing controller function from userController
const { signup, login, searchUser } = require("../controllers/userController");

// Defining routes

router.post("/signup", signup);

router.post("/login", login);

router.post("/search", auth, searchUser);

// Exporting the router object to be used in other parts of the application
module.exports = router;
