const { Router } = require("express");
const {
  loginAdmin,
  loginTeacher,
  loginStudent,
} = require("../controllers/auth.controller");
const isAdmin = require("../middlewares/isAdmin");
const isAuth = require("../middlewares/isAuth");
const isTeacher = require("../middlewares/isTeacher");

const router = new Router();

router.post("/auth/admin", loginAdmin);
router.post("/auth/teacher", loginTeacher);
router.post("/auth/login", loginStudent);

module.exports = router;
