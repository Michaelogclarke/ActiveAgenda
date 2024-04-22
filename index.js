const { MongoClient } = require("mongodb");
const mongoose = require("mongooose");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://michaelogclarke:Michaelog5106@activeagenda.dn3tprb.mongodb.net/?retryWrites=true&w=majority&appName=ActiveAgenda";

const client = new MongoClient(uri);

async function run() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to Mongo");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

connect();
run().catch(console.dir);
