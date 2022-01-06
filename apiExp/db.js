import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'dell.demo',
    port: 3306,
    database: 'zrzyt',
    user: 'zrzyt',
    password: 'JKF8wpjPJGCeT2GJ',
})

export default pool.promise();