const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const connecteionURI = process.env.MONGODB_URI;

mongoose
  .connect(connecteionURI, {
    /* options */
  })
  .then(() => console.log("MongoDB connnected"))
  .catch((err) => console.error(err));

const taskSchema = new mongoose.taskSchema({
  todo: String,
});
