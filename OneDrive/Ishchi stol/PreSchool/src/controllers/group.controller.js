const Joi = require("joi");
const Gruop = require("../models/Groups");

const getGroup = async (_, res) => {
    const data = await Gruop.find();
    if (!data) {
        return res.status(404).json({
            message: "Groups not found"
        })
    }
    res.status(200).json(data);
}

const getGroupOne = async (req, res) => {
    const id = req.params.id
    const data = await Gruop.findOne({ _id: id });
    if (!data) {
        return res.status(404).json({
            message: "Group not found"
        })
    }
    res.status(200).json(data);
}

const postGroup = async (req, res) => {
    const { imageName: image } = req;
    const { teacher_id, course_id } = req.params
    const { name, student_amount, } = req.body;
    const schema = Joi.object({
        name: Joi.string().required(),
        student_amount: Joi.number().required(),
    })
    const { error } = schema.validate({
        name, student_amount
    })
    if (error) {
        return res.status(403).json({ error: error.message });
    }
    const CreateGr = await Gruop.create({ name, image, teacher_id, student_amount, course_id })
    if (!CreateGr) {
        return res.status(400).json({ success: false })
    }
    res.status(201).json({ message: "Successfully created" })
}

const putGroup = async (req, res) => {
    const { id, teacher_id, course_id } = req.params
    const { imageName: image } = req;
    const { name, student_amount } = req.body;
    const editGruop = await Gruop.findByIdAndUpdate(id, { name, image, teacher_id, student_amount, course_id }, { new: true });
    if (!editGruop) {
        return res.status(404).json({ error: 'Gruop not found' });
    }
    res.status(200).json({ data: editGruop, success: true });
}


module.exports = { getGroup, postGroup, putGroup, getGroupOne }