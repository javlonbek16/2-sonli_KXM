const { Router } = require("express");
const { postHostel, HostelGetAll, editHostel, deleteHostel } = require("../controllers/hostel.controller");


const route = new Router();

route
  .post("/post/hostel", postHostel)
  .get("/get/hostels", HostelGetAll)
  .put("/hostel/:id", editHostel)
  .delete("/delete/hostel/:id", deleteHostel);

module.exports = route;
