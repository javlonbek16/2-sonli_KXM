const Joi = require("joi");

const Sports = require("../models/Sport");
exports.postSports = async (req, res) => {
  const { s_name, c_name, start_year } = req.body;

  const schema = Joi.object({
    s_name: Joi.string().required(),

    c_name: Joi.string().required(),

    start_year: Joi.number().required(),
  });

  const { error } = schema.validate({ s_name, c_name, start_year });

  if (error) return res.status(401).json({ message: error.message });
  await Sports.create({
    s_name,
    c_name,
    start_year,
  });

  res.status(201).json({ message: "Successfully create Sports" });
};

exports.SportsGetAll = async (req, res) => {
  const { skip, limit } = req.query;
  const s = (skip - 1) * limit;
  const sports = await Sports.find().skip(s).limit(limit);

  const allData = await Sports.find();
  const total_page = Math.ceil(allData.length / limit);

  res.status(200).json({ data: sports, total_page });
};

exports.editSports = async (req, res) => {
  const { s_name, c_name, start_year } = req.body;
  const { id } = req.params;

  await Sports.findByIdAndUpdate(id, {
    $set: {
      s_name,
      c_name,
      start_year,
    },
  });

  res.status(201).json({ message: "Success Updated Sports" });
};

exports.deleteSports = async (req, res) => {
  const { id } = req.params;

  await Sports.findByIdAndDelete(id);

  res.status(202).json({ message: "Success Deleted Sports" });
};
