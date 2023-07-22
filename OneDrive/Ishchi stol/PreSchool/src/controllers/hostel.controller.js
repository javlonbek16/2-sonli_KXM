const Joi = require("joi");
const Hostels = require("../models/Hostel");
exports.postHostel = async (req, res) => {
  const { block, room_number, room_type, no_beds, cost_bed, isAvailable } =
    req.body;

  const schema = Joi.object({
    block: Joi.string().required(),
    room_number: Joi.number().required(),
    room_type: Joi.string().required(),
    no_beds: Joi.string().required(),
    cost_bed: Joi.string().required(),
    isAvailable: Joi.string().required(),
  });

  const { error } = schema.validate({
    block,
    room_number,
    room_type,
    no_beds,
    cost_bed,
    isAvailable,
  });

  if (error) return res.status(401).json({ message: error.message });

  await Hostels.create({
    block,
    room_number,
    room_type,
    no_beds,
    cost_bed,
    isAvailable,
  });

  res.status(201).json({ message: "Successfully create Hostel" });
};

exports.HostelGetAll = async (req, res) => {
  const { skip, limit } = req.query;
  const s = (skip - 1) * limit;
  const hostel = await Hostels.find().skip(s).limit(limit);

  const allData = await Hostels.find();
  const total_page = Math.ceil(allData.length / limit);

  res.status(200).json({ data: hostel, total_page });
};

exports.editHostel = async (req, res) => {
  const { block, room_number, room_type, no_beds, cost_bed, isAvailable } =
    req.body;
  const { id } = req.params;

  await Hostels.findByIdAndUpdate(id, {
    $set: {
      block,
      room_number,
      room_type,
      no_beds,
      cost_bed,
      isAvailable,
    },
  });

  res.status(201).json({ message: "Success Updated Hostel" });
};

exports.deleteHostel = async (req, res) => {
  const { id } = req.params;

  await Hostels.findByIdAndDelete(id);

  res.status(202).json({ message: "Success Deleted Hostel" });
};
