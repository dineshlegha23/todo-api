import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(`Error connecting to DB: ${error.message}`);
    process.exit(1);
  }
};

export default connectMongoDB;
