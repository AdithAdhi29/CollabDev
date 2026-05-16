const express = require("express");

const app = express();

// app.get("/test/:UserID/:Name", (req, res) => {
//   console.log(req.query);
//   console.log(req.params);
//   res.send("Testing page loaded....");
// });

//app.use("/test", [rh1, rh2, rh3, rh4, rh5, rh6]);

app.use(
  "/test",
  (req, res, next) => {
    console.log("Test 1");
    //res.send("Test 1 completed successfully..");
    next();
  },
  (req, res, next) => {
    console.log("Test 2");
    next();
    res.send("Test 2 completed successfully..");
  },
  (req, res, next) => {
    console.log("Test 3");
    res.send("Test 3 completed successfully..");
  }
);

app.listen(7777, () => {
  console.log("Server running sucessfully...");
});
