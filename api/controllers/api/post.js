exports.get_index = function (req, res) {
    res.json({
        user: 'tobu'
    });
};

exports.post_index = function (req, res) {
    console.dir(req.body);
    res.json({
        user: req.body.name
    });
};