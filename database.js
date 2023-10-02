var mysql = require('mysql');

var connection = mysql.createConnection({
    hostname:"DESKTOP-Q60621U",
    database:"sakila",
    user:"root",
    password:""
});

module.exports = connection;