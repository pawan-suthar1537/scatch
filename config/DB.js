const mongoose = require("mongoose");
const dbgr = require("debug")("dev:mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB);
    dbgr("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};

module.exports = connectDB;
