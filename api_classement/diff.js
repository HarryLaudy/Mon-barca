var exports = module.exports = {};

exports.incButPour = function(conn, app) {
    app.post('/butPour/:id', (req, res) => {
        var id = req.params.id;
        var but;
        conn.query('select bp from liga where id = ?', [id], function(err, result) {
            if (err) throw err;
            console.log(result);
            but = result[0].bp;
            but = but + 1;
            conn.query('update liga set bp = ? where id = ?', [but, id], function(error, finalres) {
                if (error) throw error;
                res.send('1 but more added');
            })
        })
    })
}

exports.resetButPour = function(conn, app) {
    app.post('/resetButPour/:id', (req, res) => {
        var id = req.params.id;
        var but = 0;
        conn.query('update liga set bp = ? where id = ?', [but, id], function(error, finalres) {
            if (error) throw error;
            res.send('bp reseted');
        })
    })
}