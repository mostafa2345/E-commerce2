import mongoose from 'mongoose'

import { log } from '../utils/logger.js'

import mongoose from "mongoose";

let isConnected = null; // global connection state

export const connectDB = async () => {
  if (isConnected) {
    // Already connected
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = conn.connections[0].readyState;
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    throw new Error("Database connection failed");
  }
};

