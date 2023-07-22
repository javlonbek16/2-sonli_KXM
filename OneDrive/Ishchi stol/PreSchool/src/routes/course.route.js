const router = require("express").Router();
const { getCourse, postCourse, putCourse, getCourseOne } = require("../controllers/course.controller");



router.get("/api/course", getCourse);
router.get("/api/course/one/:id", getCourseOne);
router.post("/api/course/create", postCourse);
router.put("/api/course/edit/:id", putCourse);


module.exports = router;
