const { Router } = require("express");
const {
  postTransport,
  transportGetAll,
  editTransport,
  deleteTransport,
} = require("../controllers/transport.controller");

const route = new Router();

route
  .post("/post/transport", postTransport)
  .get("/get/transports", transportGetAll)
  .put("/transport/:id", editTransport)
  .delete("/delete/transport/:id", deleteTransport);

module.exports = route;
