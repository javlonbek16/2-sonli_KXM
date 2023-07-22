const Transports = require("../models/Transport");
exports.postTransport = async (req, res) => {
  const {
    route_name,
    vehicle_number,
    drive_name,
    drive_license,
    phone,
    address,
  } = req.body;

  const schema = Joi.object({
    route_name: Joi.string().required(),
    vehicle_number: Joi.string().required(),
    drive_name: Joi.string().required(),
    drive_license: Joi.string().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
  });

  const { error } = schema.validate({
    route_name,
    vehicle_number,
    drive_name,
    drive_license,
    phone,
    address,
  });

  if (error) return res.status(401).json({ message: error.message });

  await Transports.create({
    route_name,
    vehicle_number,
    drive_name,
    drive_license,
    phone,
    address,
  });

  res.status(201).json({ message: "Successfully create Transport" });
};

exports.transportGetAll = async (req, res) => {
  const { skip, limit } = req.query;
  const s = (skip - 1) * limit;
  const transports = await Transports.find().skip(s).limit(limit);

  const allData = await Transports.find();
  const total_page = Math.ceil(allData.length / limit);

  res.status(200).json({ data: transports, total_page });
};

exports.editTransport = async (req, res) => {
  const {
    route_name,
    vehicle_number,
    drive_name,
    drive_license,
    phone,
    address,
  } = req.body;
  const { id } = req.params;

  await Transports.findByIdAndUpdate(id, {
    $set: {
      route_name,
      vehicle_number,
      drive_name,
      drive_license,
      phone,
      address,
    },
  });

  res.status(201).json({ message: "Success Updated Transport" });
};

exports.deleteTransport = async (req, res) => {
  const { id } = req.params;

  await Transports.findByIdAndDelete(id);

  res.status(202).json({ message: "Success Deleted Transport" });
};
