const express = require("express");

const app = express();

require("./start/modules")(app);
require("./start/run")(app);
