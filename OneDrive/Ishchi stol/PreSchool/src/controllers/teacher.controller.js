const Joi = require("joi");
const Teacher = require("../models/Teacher");

const getTeachers = async (req, res) => {
    const data = await Teacher.find();
    if (!data) {
        return res.status(404).json({
            message: "Teachers not found"
        })
    }
    res.status(200).json(data);
}

const getTeacherOne = async (req, res) => {
    const id = req.params.id
    const data = await Teacher.findOne({ _id: id });
    if (!data) {
        return res.status(404).json({
            message: "Teacher not found"
        })
    }
    res.status(200).json(data);
}

const postTeacher = (req, res) => {
    const { imageName: image } = req;
    const { username, password, f_name, l_name, about, gender, birthdate, email, phone,
        language, linkedin
    } = req.body;

    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
        f_name: Joi.string().required(),
        l_name: Joi.string().required(),
        about: Joi.string().required(),
        gender: Joi.string().required(),
        birthdate: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.number().required(),
        language: Joi.string().required(),
        linkedin: Joi.string().required(),
    })

    const { error } = schema.validate({
        username, password, f_name, l_name, about, gender, birthdate, email, phone,
        language, linkedin
    })
    if (error) {
        return res.status(403).json({ error: error.message });
    }
    Teacher.create({
        username, password,
        f_name, l_name, about, gender, birthdate, email, phone,
        image, language, linkedin,
    })
    res.status(201).json({ message: "Successfully created" })
}

const putTeacher = async (req, res) => {
    const id = req.params.id
    const { imageName: image } = req;
    const { username, password, f_name, l_name, about, gender, birthdate, email, phone,
        language, linkedin
    } = req.body;
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
        f_name: Joi.string().required(),
        l_name: Joi.string().required(),
        about: Joi.string().required(),
        gender: Joi.string().required(),
        birthdate: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.number().required(),
        language: Joi.string().required(),
        linkedin: Joi.string().required(),
    })

    const { error } = schema.validate({
        username, password, f_name, l_name, about, gender, birthdate, email, phone,
        language, linkedin
    })
    if (error) {
        return res.status(403).json({ error: error.message });
    }

    const editTeacher = await Teacher.findByIdAndUpdate(id, {
        username, password,
        f_name, l_name, about, gender, birthdate, email, phone,
        language, linkedin, image
    }, { new: true });
    if (editTeacher) {
        return res.status(200).json({ data: editTeacher, success: true });
    } else {
        res.status(404).json({ error: 'Stundent not found' });
    }
}

module.exports = { getTeachers, postTeacher, putTeacher, getTeacherOne }