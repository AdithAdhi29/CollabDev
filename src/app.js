const express = require("express");

const app = express();

app.get("/test/:UserID/:Name", (req, res) => {
  console.log(req.query);
  console.log(req.params);
  res.send("Testing page loaded....");
});

app.post("/test", (req, res) => {
  console.log("Updated the Database...");
  res.send("Successfully updated the data base.");
});

app.use((req, res) => {
  res.send("Hello world..");
});

app.listen(7777, () => {
  console.log("Server running sucessfully...");
});
