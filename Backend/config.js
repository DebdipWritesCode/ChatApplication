const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://debdipmukherjee52:Uxtpo9nnzco7wfYP@cluster0.zuamb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("MongoDB connected");
  }
  catch(err) {
    console.error(err);
    process.exit(1);
  }
}

module.exports = connectDB;