// database connection config

const Pool = require("pg").Pool; // require pg library

const pool = new Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;