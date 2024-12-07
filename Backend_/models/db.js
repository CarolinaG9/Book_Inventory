const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "inventory"
});

module.exports = pool.promise();
