const express = require("express");
const Story = require("../models/Story");

const router = express.Router();

// Get all stories
router.get("/", async (req, res) => {
  try {
    const stories = await Story.find();
    res.json(stories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new story
router.post("/", async (req, res) => {
  try {
    const story = new Story(req.body);
    await story.save();
    res.status(201).json(story);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
