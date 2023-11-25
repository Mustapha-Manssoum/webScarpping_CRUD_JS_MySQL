const mysql = require('mysql2/promise');

const mysqlPool = mysql.createPool({
    host: 'mysql_docker',
    user: 'root',
    password: 'root',
    database : 'srk_movies',
    port: 3306
});


module.exports = mysqlPool;