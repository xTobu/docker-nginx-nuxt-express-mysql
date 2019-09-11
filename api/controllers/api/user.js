const mysql = require('mysql');
const db_option = {
    host: 'mysql',
    user: 'root',
    password: '123456',
    database: 'myapp',
    port: 3306
};

exports.getUsers = function (req, res) {
    const connection = mysql.createConnection(db_option);
    const query = 'SELECT * FROM user';
    connection.query(query, function (err, rows, fields) {
        if (err) throw err;
        res.json({
            data: rows
        });
        res.end();
    });
};

exports.postUser = function (req, res) {
    const connection = mysql.createConnection(db_option);
    const query = 'INSERT INTO user SET ?';
    connection.query(query, req.body, function (error, results, fields) {
        if (error) throw error;
        res.json({
            data: {
                id: results.insertId
            },
            req: req.body
        });
    });
};