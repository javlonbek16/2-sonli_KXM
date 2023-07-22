const { model, Schema } = require("mongoose");

const schema = new Schema({
  customer_name: {
    type: String,
    required: true,
  },
  customer_phone: {
    type: Number,
    required: true,
  },
  customer_address: {
    adress_line_1: {
      type: String,
      required: true,
    },
    adress_line_2: {
      type: String,
      required: false,
    },
    zip_code: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  category: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: "sent"
  },
  invoice_number: {
    type: String,
    required: true,
  },
  PO_number: {
    type: Number,
    required: true,
  },
  issue_date: {
    type: String,
    required: true,
  },
  due_date: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,
    required: true,
  },
  company_phone: {
    type: Number,
    required: true,
  },
  company_address: {
    adress_line_1: {
      type: String,
      required: true,
    },
    adress_line_2: {
      type: String,
      required: false,
    },
    zip_code: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  items: {
    type: Array,
    required: true,
    default: [],
  },
  payment_details: {
    owner_name: {
      type: String,
      required: true,
    },
    bank_name: {
      type: String,
      required: true,
    },
    IFSC_code: {
      type: String,
      required: true,
    },
    account_number: {
      type: Number,
      required: true,
    },
  },
  additional: {
    tax: {
      type: Number,
      required: false,
    },
    additional_charge: {
      type: Number,
      required: false,
    },
    discount: {
      type: Number,
      required: false,
    },
    sub_total: {
      type: Number,
      required: false,
    },
  },
  total_amount: {
    type: Number,
    required: true,
  },
  signiture: {
    type: String,
    required: true,
  },
  signiture_name: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: false,
  },
  terms_conditions: {
    type: String,
    required: false,
  },
});

module.exports = model("Invoice", schema);
