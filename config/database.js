const { createPool } = require("mysql");

const pool = createPool({
  port: 3306,
  host: "localhost",
  user: "rentochcom_food_menu_ab",
  password: "HjJIUWE+RUZJ",
  database: "rentochcom_food_menu",
  connectTimeout: 10,
});
// for local
// const pool = createPool({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "restaurants",
//   connectTimeout: 10,
// });

module.exports = pool;
