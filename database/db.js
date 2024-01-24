const mysql = require('mysql2');

 const conn = mysql.createPool({
    port:3306,
    connectionLimit: 10,
    host:'localhost',
    user:'root',
    password:'S@1234',
    database:'employee_manage'
});

 module.exports = conn.promise();
