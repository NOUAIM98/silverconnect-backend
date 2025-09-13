const express = require("express");
const Event = require("../models/Event");
const router = express.Router();

router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

router.post("/", async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.json(event);
});

router.post("/:id/rsvp", async (req, res) => {
  const { username } = req.body;
  const event = await Event.findById(req.params.id);
  if (!event) return res.status(404).json({ error: "Event not found" });

  if (!event.rsvps.includes(username)) event.rsvps.push(username);
  await event.save();
  res.json(event);
});

module.exports = router;
