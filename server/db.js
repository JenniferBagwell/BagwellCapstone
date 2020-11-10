const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres", // username for your postgres db in pgAdmin4 when you setup db
  host: "localhost", // localhost because thats where the db is reachable (would be server ip address when hosted)
  database: "test 2", // name of db you wanna connect with, in my case it was test cause i called it that
  password: "j0hnj0hnkk", //im not giving you my password, will be an env when pushed to GH
  port: 5432 // generic port for pg
});
module.exports = pool;
