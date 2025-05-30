import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// MongoDB connection URL and database name
const mongoUrl = process.env.MONGODB_URL;
const dbName = process.env.DB_NAME;

if (!mongoUrl) {
  console.error("❌ MONGODB_URL is not defined in environment variables");
  process.exit(1);
}

if (!dbName) {
  console.error("❌ DB_NAME is not defined in environment variables");
  process.exit(1);
}

// Construct full connection URL
const fullUrl = `${mongoUrl}/${dbName}`;

// Connect to MongoDB using Mongoose
const connectDB = async () => {
  try {
    await mongoose.connect(fullUrl);
    console.log(`✅ MongoDB connected successfully to database: ${dbName}`);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

// Initialize connection
connectDB();

// Connection event listeners
mongoose.connection.on("connected", () => {
  console.log(`🔗 Mongoose connected to MongoDB database: ${dbName}`);
});

mongoose.connection.on("error", (err) => {
  console.error("❌ Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log(`🔌 Mongoose disconnected from MongoDB database: ${dbName}`);
});

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("Closing MongoDB connection...");
  await mongoose.connection.close();
  process.exit(0);
});

export default mongoose;
