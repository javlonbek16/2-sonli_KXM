const fs = require("fs/promises");

const Joi = require("joi");

const Invoices = require("../models/Invoice");

const getAll = async (_, res) => {
  try {
    const invoices = await Invoices.find();

    res.status(200).json({ message: "OK", data: invoices });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const {
      customer_name,
      customer_phone,
      customer_address,
      category,
      invoice_number,
      PO_number,
      issue_date,
      due_date,
      company_name,
      company_phone,
      company_address,
      items,
      payment_details,
      additional,
      total_amount,
      signiture_name,
      notes,
      terms_conditions,
    } = req.body;
    const signiture = req.imageName;

    //VALIDATION
    const schema = Joi.object({
      customer_name: Joi.string().required(),
      customer_phone: Joi.number().required(),
      customer_address: {
        adress_line_1: Joi.string().required(),
        adress_line_2: Joi.string(),
        zip_code: Joi.string().required(),
        city: Joi.string().required(),
        country: Joi.string().required(),
      },
      category: Joi.string().required(),
      invoice_number: Joi.string().required(),
      PO_number: Joi.number().required(),
      issue_date: Joi.string().required(),
      due_date: Joi.string().required(),
      company_name: Joi.string().required(),
      company_phone: Joi.number().required(),
      company_address: {
        adress_line_1: Joi.string().required(),
        adress_line_2: Joi.string(),
        zip_code: Joi.string().required(),
        city: Joi.string().required(),
        country: Joi.string().required(),
      },
      items: Joi.array().required(),
      payment_details: {
        owner_name: Joi.string().required(),
        bank_name: Joi.string().required(),
        IFSC_code: Joi.string().required(),
        account_number: Joi.number().required(),
      },
      additional: {
        tax: Joi.number().required(),
        additional_charge: Joi.number().required(),
        discount: Joi.number().required(),
        sub_total: Joi.number().required(),
      },
      total_amount: Joi.number().required(),
      signiture: Joi.string().required(),
      signiture_name: Joi.string().required(),
      notes: Joi.string().required(),
      terms_conditions: Joi.string().required(),
    });

    const { error } = schema.validate({
      customer_name,
      customer_phone,
      customer_address,
      category,
      invoice_number,
      PO_number,
      issue_date,
      due_date,
      company_name,
      company_phone,
      company_address,
      items,
      payment_details,
      additional,
      total_amount,
      signiture,
      signiture_name,
      notes,
      terms_conditions,
    });
    if (error) {
      return res.status(403).json({ error: error.message });
    }

    Invoices.create({
      customer_name,
      customer_phone,
      customer_address,
      category,
      invoice_number,
      PO_number,
      issue_date,
      due_date,
      company_name,
      company_phone,
      company_address,
      items,
      payment_details,
      additional,
      total_amount,
      signiture,
      signiture_name,
      notes,
      terms_conditions,
    });

    res.status(201).json({ message: "OK" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const put = async (req, res) => {
  try {
    const {
      customer_name,
      customer_phone,
      customer_address,
      category,
      invoice_number,
      PO_number,
      issue_date,
      due_date,
      company_name,
      company_phone,
      company_address,
      items,
      payment_details,
      additional,
      total_amount,
      signiture_name,
      notes,
      terms_conditions,
    } = req.body;
    const signiture = req.imageName;
    const { id } = req.params;

    //VALIDATION
    const schema = Joi.object({
      customer_name: Joi.string().required(),
      customer_phone: Joi.number().required(),
      customer_address: {
        adress_line_1: Joi.string().required(),
        adress_line_2: Joi.string(),
        zip_code: Joi.string().required(),
        city: Joi.string().required(),
        country: Joi.string().required(),
      },
      category: Joi.string().required(),
      invoice_number: Joi.string().required(),
      PO_number: Joi.number().required(),
      issue_date: Joi.string().required(),
      due_date: Joi.string().required(),
      company_name: Joi.string().required(),
      company_phone: Joi.number().required(),
      company_address: {
        adress_line_1: Joi.string().required(),
        adress_line_2: Joi.string(),
        zip_code: Joi.string().required(),
        city: Joi.string().required(),
        country: Joi.string().required(),
      },
      items: Joi.array().required(),
      payment_details: {
        owner_name: Joi.string().required(),
        bank_name: Joi.string().required(),
        IFSC_code: Joi.string().required(),
        account_number: Joi.number().required(),
      },
      additional: {
        tax: Joi.number().required(),
        additional_charge: Joi.number().required(),
        discount: Joi.number().required(),
        sub_total: Joi.number().required(),
      },
      total_amount: Joi.number().required(),
      signiture: Joi.string().required(),
      signiture_name: Joi.string().required(),
      notes: Joi.string().required(),
      terms_conditions: Joi.string().required(),
    });

    const { error } = schema.validate({
      customer_name,
      customer_phone,
      customer_address,
      category,
      invoice_number,
      PO_number,
      issue_date,
      due_date,
      company_name,
      company_phone,
      company_address,
      items,
      payment_details,
      additional,
      total_amount,
      signiture,
      signiture_name,
      notes,
      terms_conditions,
    });
    if (error) {
      return res.status(403).json({ error: error.message });
    }

    await Invoices.findByIdAndUpdate(id, {
      customer_name,
      customer_phone,
      customer_address,
      category,
      invoice_number,
      PO_number,
      issue_date,
      due_date,
      company_name,
      company_phone,
      company_address,
      items,
      payment_details,
      additional,
      total_amount,
      signiture,
      signiture_name,
      notes,
      terms_conditions,
    });

    res.status(200).json({ message: "OK" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const genOne = async (req, res) => {
  try {
    const { id } = req.params;

    const invoice =  await Invoices.findOne(id);

    res.status(200).json({ message: "OK", data: invoice });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const {status} = req.query;

    await Invoices.findByIdAndUpdate(id, {status});

    res.status(200).json({ message: "OK" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const _delete = async (req, res) => {
  try {
    const { id } = req.params;

    const invoice = await Invoices.findById(id);

    fs.unlink(`${process.cwd()}/uploads/${invoice.image}`);

    await Invoices.findByIdAndDelete(id);

    res.status(200).json({ message: "OK" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const pagination = async(req, res)=>{
  try {
    let {skip, limit} = req.query;

    skip = (skip - 1) * limit;

    const data = await Invoices.find().skip(skip).limit(limit).exec();

    res.status(200).json({message: "success", data});

  } catch (error) {
    res.status(400).json({message: error.message})
  }
};


const categories = async(req, res)=>{
  try {
    const data = await Invoices.distinct("category");

    res.status(200).json({message: "ok", data});
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

module.exports = { getAll, create, put, _delete, genOne, updateStatus, pagination, categories };
