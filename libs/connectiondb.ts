import mongoose from "mongoose";

const MONGODB_URI= process.env.MONGODB_URI

import dotenv from 'dotenv';
dotenv.config();

// Connect to MongoDB
const connexion = mongoose
  .connect(MONGODB_URI!) 
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

export default connexion;
