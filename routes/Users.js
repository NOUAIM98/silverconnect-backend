const express = require("express");
const User = require("../models/User");

const router = express.Router();

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create new user
router.post("/", async (req, res) => {
  try {
    const { username, name, email, password } = req.body;
    const user = new User({ username, name, email, password });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
