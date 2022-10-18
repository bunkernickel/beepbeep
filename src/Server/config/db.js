const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "secretpassword",
database:"user_info" 
})

module.exports = db;