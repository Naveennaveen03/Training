const mysql = require('mysql2')
const db = mysql
    .createPool({
        host: '127.0.0.1',
        user: 'root',
        password: 'Knackforge@2003',
        database: 'db',
    })
    .promise()

module.exports = db