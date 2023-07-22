const auth = require("./auth.route");
const account = require("./accounts.route");
const blog = require("./blog.route");
const teacher = require("./teacher.route");
const timeTable = require("./timeTable.route");
const transport = require("./transport.route");
const setting = require("./setting.route");
const sport = require("./sport.route");
const student = require("./student.route");
const fees = require("./fees.route");
const holiday = require("./holiday.route");
const hostel = require("./hostel.route");
const course = require("./course.route");
const event = require("./event.route");
const examList = require("./examList.route");
const group = require("./group.route");
const library = require("./library.route");
const invoice = require("./invoice.route");

module.exports = [
  auth,
  account,
  blog,
  teacher,
  timeTable,
  transport,
  setting,
  sport,
  student,
  fees,
  holiday,
  hostel,
  course,
  event,
  examList,
  group,
  library,
  invoice,
];
