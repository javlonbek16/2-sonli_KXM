const Joi = require("joi");
const Course = require("../models/Course");

const getCourse = async (_, res) => {
    const data = await Course.find();
    if (!data) {
        return res.status(404).json({
            message: "Courses not found"
        })
    }
    res.status(200).json(data);
}

const getCourseOne = async (req, res) => {
    const id = req.params.id
    const data = await Course.findOne({ _id: id });

    if (!data) {
        return res.status(404).json({
            message: "Course not found"
        })
    }
    res.status(200).json(data);
}
const postCourse = (req, res) => {
    const { name } = req.body;
    const schema = Joi.object({
        name: Joi.string().required(),
    })
    const { error } = schema.validate({
        name
    })
    if (error) {
        return res.status(403).json({ error: error.message });
    }
    Course.create({ name })
    res.status(201).json({ message: "Successfully Course Created" })
}

const putCourse = async (req, res) => {
    const id = req.params.id
    const { name } = req.body;
    const schema = Joi.object({
        name: Joi.string().required(),
    });
    const { error } = schema.validate({
        name
    })
    if (error) {
        return res.status(403).json({ error: error.message });
    }
    const editCourse = await Course.findByIdAndUpdate(id, { name }, { new: true });
    if (editCourse) {
        return res.status(200).json({ data: Course, success: true });
    } else {
        res.status(404).json({ error: 'Course not found' });
    }
}


module.exports = { getCourse, postCourse, putCourse, getCourseOne }