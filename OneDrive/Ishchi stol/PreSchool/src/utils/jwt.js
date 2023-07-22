const jwt = require("jsonwebtoken");

const config = require("config");

const sign = (payload) =>
  jwt.sign(payload, config.get("SECRET_KEY"), { expiresIn: "24h" });

const verify = (payload) => jwt.verify(payload, config.get("SECRET_KEY"));

module.exports = {
  sign,
  verify,
};
