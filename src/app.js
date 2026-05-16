const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Testing page loaded....");
});

app.use("/home", (req, res) => {
  res.send("Helloo..... Home page loaded....");
});

app.use((req, res) => {
  res.send("Hello world..");
});

app.listen(7777, () => {
  console.log("Server running sucessfully...");
});
