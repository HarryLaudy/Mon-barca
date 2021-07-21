var exports = module.exports = {};

exports.incMatchDone = function(conn, app) {
    app.post('/matchDone/:id', (req, res) => {
        var id = req.params.id;
        var match_done;
        conn.query('select J from liga where id = ?', [id], function(err, result) {
            if (err) throw err;
            match_done = result[0].J;
            match_done = match_done + 1;
            conn.query('update liga set J = ? where id = ?', [match_done, id], function(error, finalres) {
                if (error) throw error;
                res.send('1 match more done');
            })
        })
    })
}

exports.resetMatchDone = function(conn, app) {
    app.post('/resetMatchDone/:id', (req, res) => {
        var id = req.params.id;
        var match_done = 0;
        conn.query('update liga set J = ? where id = ?', [match_done, id], function(error, finalres) {
            if (error) throw error;
            res.send('match reseted');
        })
    })
}