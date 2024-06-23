const express = require("express");
//!router je mini app ki delajo samostojno v aplikaciji
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});
//!z router route definiraš vse 3, put delete in get da je bolj clean code
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get User ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User ${req.params.id}`);
  });

router.get("/new", (req, res) => {
  res.send("User new form");
});
//!get /user with an id
router.get("/:id", (req, res) => {
  //!get id
  req.params.id;
  res.send(`Get User ${req.params.id}`);
});
//! ko najdeš parameter id vzemi funkcijo jo izvedi! vsakič ko imaš id dobi jo iz user in z next napreduj z kodo
const users = [{ name: "John" }, { name: "Sarah" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});
//!exportamo router v server.js
module.exports = router;
