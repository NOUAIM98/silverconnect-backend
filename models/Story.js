const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Story", StorySchema);
