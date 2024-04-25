//import
const express = require("express");
const { MongoClient } = require("mongodb");

//Mongodb connection
const uri =
  "mongodb+srv://michaelogclarke:michaelog5106@activeagenda.dn3tprb.mongodb.net/?retryWrites=true&w=majority&appName=ActiveAgenda"; // MongoDB connection URI
const client = new MongoClient(uri);
//Server connect for mongodb
client.connect((err) => {
  if (err) {
    console.error("Error connecting to MongoDB:", err);
    return;
  }
  console.log("Connected to MongoDB");
});

//express app
const app = express();
// Routes go here

//Server start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
