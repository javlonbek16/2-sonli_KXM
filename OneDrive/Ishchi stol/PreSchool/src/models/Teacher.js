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
    about: {
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
    phone: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: false,
    },
    linkedin: {
        type: String,
        required: false,
    },
    instagram: {
        type: String,
        required: false,
    },
    telegram: {
        type: String,
        required: false,
    },
    facebook: {
        type: String,
        required: false,
    },
    educations: {
        type: [String],
        required: false,
    },
    skills: {
        type: [String],
        required: false,
    },
    adress: [{
        street: {
            type: String,
            required: false,
        },
        city: {
            type: String,
            required: false,
        },
        state: {
            type: String,
            required: false,
        },
        zip: {
            type: String,
            required: false,
        },
        country: {
            type: String,
            required: false,
        },
    }]
},
    {
        timestamps: true,
    });

module.exports = model("Teacher", schema);