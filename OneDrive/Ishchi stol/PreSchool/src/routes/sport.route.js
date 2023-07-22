const { Router } = require("express");
const {
  postSports,
  SportsGetAll,
  editSports,
  deleteSports,
} = require("../controllers/sport.controller");

const route = new Router();

route
  .post("/post/sport", postSports)
  .get("/get/sports", SportsGetAll)
  .put("/sport/:id", editSports)
  .delete("/delete/sport/:id", deleteSports);

module.exports = route;
