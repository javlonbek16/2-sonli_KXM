const { model, Schema } = require("mongoose");

const schema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    f_name: {
        type: String,
        required: true,
    },
    l_name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    birthdate: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    group_id: {
        type: Schema.Types.ObjectId, ref: 'Group',
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    });

module.exports = model("Student", schema)