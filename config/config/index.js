const dotnev = require("dotenv");

dotnev.config();

module.exports = { APP_PORT, DB_Url, BASE_URL } = process.env;
