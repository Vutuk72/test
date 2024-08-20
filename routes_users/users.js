const express = require("express");
const router = express.Router();
const User = require("../models_user/usser");

//getting all
router.get("/", async (req, res) => {
  // res.send('Hello World')
  try {
    const users = await user.find();
    console.log(users);
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
