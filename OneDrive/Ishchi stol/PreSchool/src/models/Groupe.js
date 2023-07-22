const { model, Schema } = require("mongoose");

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    teacher_id: {
        type: Schema.Types.ObjectId, ref: 'Teacher',
        required: true,
    },
    student_amount: {
        type: Number,
        required: false,
    },
    course_id: {
        type: Schema.Types.ObjectId, ref: 'Course',
        required: true,
    }
},
    {
        timestamps: true,
    });
module.exports = model("Groups", schema);

