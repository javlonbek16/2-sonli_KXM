const fileUpload = require('../middlewares/fileUpload');
const { getTeachers, postTeacher, putTeacher, getTeacherOne } = require('../controllers/teacher.controller');

const router = require('express').Router();

router.get("/api/teacher", getTeachers);
router.get("/api/teacher/one/:id", getTeacherOne);
router.post("/api/teacher/create", fileUpload, postTeacher);
router.put("/api/teacher/edit/:id", fileUpload, putTeacher);


module.exports = router;