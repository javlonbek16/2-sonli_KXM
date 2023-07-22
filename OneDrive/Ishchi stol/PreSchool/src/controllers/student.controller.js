const Joi = require("joi");
const Student = require("../models/Student");
const getStudents = async (_, res) => {
    const data = await Student.find();
    if (!data) {
        return res.status(404).json({
            message: "Students not found"
        })
    }
    res.status(200).json(data);
}

const postStudent = (req, res) => {
    const { imageName: image } = req;
    const { group_id } = req.params;
    const { username, password, f_name, l_name, gender, birthdate, email, phone } = req.body;
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
        f_name: Joi.string().required(),
        l_name: Joi.string().required(),
        gender: Joi.string().required(),
        birthdate: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.number().required(),
    })

    const { error } = schema.validate({
        username, password, f_name, l_name, gender, birthdate, email, phone,
    })

    if (error) {
        return res.status(403).json({ error: error.message });
    }
    Student.create({ username, password, f_name, l_name, gender, birthdate, email, group_id, phone, image })
    res.status(201).json({ message: "Successfully created" })
}

const getStudentOne = async (req, res) => {
    const id = req.params.id
    const data = await Student.findOne({ _id: id });
    if (!data) {
        return res.status(404).json({
            message: "Student not found"
        })
    }
    res.status(200).json(data);
}

const putStudent = async (req, res) => {
    const id = req.params.id
    const { imageName: image } = req;
    const { username, password,
        f_name, l_name, gender, birthdate, email, group_id, phone } = req.body;
    const editStudent = await Student.findByIdAndUpdate(id, { username, password, f_name, l_name, gender, birthdate, email, group_id, phone, image }, { new: true });
    if (editStudent) {
        return res.status(200).json({ data: editStudent, success: true });
    } else {
        res.status(404).json({ error: 'Stundent not found' });
    }
}



module.exports = { getStudents, postStudent, putStudent, getStudentOne }