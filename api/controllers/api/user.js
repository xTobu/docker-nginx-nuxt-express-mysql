const mysql = require('mysql');
const db_option = {
    host: 'mysql',
    user: 'root',
    password: '123456',
    database: 'myapp',
    port: 3306
};

exports.get_index = function (req, res) {
    const connection = mysql.createConnection(db_option);
    const query = 'SELECT * FROM users';
    connection.query(query, function (err, rows, fields) {
        if (err) throw err;
        res.json({
            data: rows
        });
        res.end();
    });
};

exports.post_index = function (req, res) {
    console.dir(req.body);
    res.json({
        user: req.body.name
    });
};