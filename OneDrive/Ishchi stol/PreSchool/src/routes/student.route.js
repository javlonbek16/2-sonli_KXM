const fileUpload = require('../middlewares/fileUpload');
const { getStudents, postStudent, putStudent, getStudentOne } = require('../controllers/student.controller');

const router = require('express').Router();

router.get("/api/student", getStudents);
router.get("/api/student/one/:id", getStudentOne);
router.post("/api/student/create/:group_id", fileUpload, postStudent);
router.put("/api/student/edit/:group_id/:id", fileUpload, putStudent);





module.exports = router;