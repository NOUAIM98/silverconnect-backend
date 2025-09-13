// seed.js
const mongoose = require("mongoose");
const User = require("./models/User");
const Event = require("./models/Event");
const Message = require("./models/Message");
const Story = require("./models/Story");

async function seed() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/silverconnect", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");

    // Clear existing data
    await User.deleteMany({});
    await Event.deleteMany({});
    await Message.deleteMany({});
    await Story.deleteMany({});

    // Seed Users
    const users = await User.insertMany([
      {
        username: "johndoe",
        name: "John Doe",
        email: "john@example.com",
        password: "123456",
      },
      {
        username: "janesmith",
        name: "Jane Smith",
        email: "jane@example.com",
        password: "abcdef",
      },
    ]);

    // Seed Events (now includes `date`)
    const events = await Event.insertMany([
      {
        title: "Community Meetup",
        description: "Local community networking event",
        date: new Date("2025-10-01"),
      },
      {
        title: "Tech Conference",
        description: "Annual technology conference",
        date: new Date("2025-11-15"),
      },
    ]);

    // Seed Messages
    const messages = await Message.insertMany([
      {
        sender: "johndoe",
        receiver: "janesmith",
        content: "Hello Jane!",
      },
      {
        sender: "janesmith",
        receiver: "johndoe",
        content: "Hey John, good to hear from you!",
      },
    ]);

    // Seed Stories
    const stories = await Story.insertMany([
      { username: "johndoe", content: "Just joined SilverConnect 🎉" },
      { username: "janesmith", content: "Excited to share my first story!" },
    ]);

    console.log("✅ Database seeded successfully!");
    console.log("👤 Users:", users.map((u) => u.username));
    console.log("📅 Events:", events.map((e) => e.title));
    console.log("💬 Messages:", messages.map((m) => m.content));
    console.log("📖 Stories:", stories.map((s) => s.content));

    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Seeding error:", error);
    mongoose.connection.close();
  }
}

seed();
