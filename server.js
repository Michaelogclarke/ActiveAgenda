//express import
const express = require("express");

//express app
const app = express();
// Routes go here

//Server start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
