const express = require("express");
const router = express.Router();

const User = require("../models/User");

// Login
router.get("/login", (_, res) => res.render("login"));

// Register
router.get("/register", (_, res) => res.render("register"));

// Handling Registration
router.post("/register", async (req, res) => {
  console.log("Request body: ", req.body);
  const addUser = new User({
    name: "Test User",
    email: "test9@yopmail.com",
    password: "password123",
  });

  try {
    const response = await addUser.save();
    console.log("Response --->", response);
    res.send("Ho gya add. DB check kro");
  } catch (err) {
    console.log(err);
    res.send("Bhnd he beta check kro");
  }
});

module.exports = router;
