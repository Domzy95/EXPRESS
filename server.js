const express = require("express");
const app = express();
//!for ejs use
app.set("view engine", "ejs");

//!SET ROUTES
app.get("/", (req, res) => {
  console.log("Here");
  res.render("index", { text: "Hello" });
});
//!IMPORTAMO ROUTER iz routes/users
const userRouter = require("./routes/users");
app.use("/users", userRouter);
app.listen(3000);
