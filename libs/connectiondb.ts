import mongoose from "mongoose";

import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI= process.env.MONGODB_URI
// Connect to MongoDB
const connexion = async () =>
 await mongoose
  .connect(MONGODB_URI!) 
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

export default connexion;
