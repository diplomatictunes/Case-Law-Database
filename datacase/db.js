require('dotenv').config();

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "craigw",
    password: "Loreen2023",
    database: "case_law_database",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
