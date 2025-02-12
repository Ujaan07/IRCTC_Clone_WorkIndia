const dotenv = require("dotenv");

dotenv.config();
var PGDATABASE = process.env.PGDATABASE;
var PGHOST = process.env.PGHOST;
var PGPASSWORD = process.env.PGPASSWORD;
var PGPORT = process.env.PGPORT;
var PGUSER = process.env.PGUSER;

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Ujaan@1509",
    host: "localhost",
    port: 5432,
    database: "irctc"
});

module.exports = pool;