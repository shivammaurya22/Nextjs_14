// lib/dbConnect.js
import mongoose from 'mongoose';

const dbConnect = async () => {
  // If already connected, use existing connection
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to MongoDB.");
    return mongoose.connection;
  }

  try {
    // Attempt to connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB Atlas.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB.");
  }

  return mongoose.connection;
};

export default dbConnect;
