const express = require("express");
const router = express.Router();    

const user = require("../services/user");

router
  .get("/users", user.listUser)
  .get("/users/:id", user.findUser)
  .post("/users", user.createUser);

module.exports = router;
