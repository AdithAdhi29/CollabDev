const express = require("express");
const { auth } = require("./middleware/auth");

const app = express();

app.use("/admin", (req, res, next) => {
  const token = "abc";
  const isAuthentication = token === "abc";
  if (!isAuthentication) {
    res.status(401).send("Authentication failed");
  } else {
    next();
  }
});

app.get("/admin/getuserdata", (req, res) => {
  res.send("Successfully got all the User Data!");
});

app.post("/admin/deleteuserdata", auth, (req, res) => {
  res.send("Successfully deleted all User Data");
});

app.listen(7777, () => {
  console.log("Server running sucessfully...");
});
