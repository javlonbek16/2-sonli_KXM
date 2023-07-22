const { connect } = require("mongoose");
const config = require("config");

const run = async (app) => {
  await connect(config.get("MONGO_URL"));

  const PORT = config.get("PORT");
  app.listen(PORT, () => {
    console.log(PORT);
  });
};

module.exports = run;
