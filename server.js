//import
const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const Todo = require("./models/todo");

//Mongodb connection
const uri =
  "mongodb+srv://michaelogclarke:Michaelog5106@activeagenda.dn3tprb.mongodb.net/"; // MongoDB connection URI
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
// Creates Todo
app.post("/todo", async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
// Reads all Todos
app.get("/todo", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Updates Todos
app.put("/todos/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
// Deletes Todos
app.delete("/todos/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Server start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
