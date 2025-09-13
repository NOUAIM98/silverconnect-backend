const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const eventRoutes = require("./routes/events");
const messageRoutes = require("./routes/messages");
const storyRoutes = require("./routes/stories");
const userRoutes = require("./routes/Users");


app.use("/api/events", eventRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/stories", storyRoutes);
app.use("/api/users", userRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/silverconnect", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
