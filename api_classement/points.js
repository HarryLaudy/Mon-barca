var exports = module.exports = {};

exports.seePoints = function(conn, app) {
    app.get('/points', (req, res) => {
        conn.query('select id, equipe, pts from liga', function(err, result) {
            if (err) throw err;
            res.send(result)
        })
    })
    app.get('/points/:id', (req, res) => {
        var id = req.params.id;
        conn.query('select id, equipe, pts from liga where id = ?', [id], function(err, result) {
            if (err) throw err;
            res.send(result);
        })
    })
}

exports.add3Points = function (conn, app) {
    app.post('/3points/:id', (req, res) => {
        var id = req.params.id;
        var points;
        conn.query('select pts from liga where id = ?', [id], function(err, result) {
            if (err) throw err;
            points = result[0].pts;
            points = points + 3;
            conn.query('update liga set pts = ? where id = ?', [points, id], function(error, finalres) {
                if (error) throw error;
                res.send('3 points added');
            })
        })
    })
}

exports.add1Point = function(conn, app) {
    app.post('/1points/:id', (req, res) => {
        var id = req.params.id;
        var points;
        conn.query('select pts from liga where id = ?', [id], function(err, result) {
            if (err) throw err;
            points = result[0].pts;
            points = points + 1;
            conn.query('update liga set pts = ? where id = ?', [points, id], function(error, finalres) {
                if (error) throw error;
                res.send('1 point added');
            })
        })
    })
}

exports.resetPoints = function(conn, app) {
    app.post('/resetPoints/:id', (req, res) => {
        var id = req.params.id;
        var points = 0;
        conn.query('update liga set pts = ? where id = ?', [points, id], function(error, finalres) {
            if (error) throw error;
            res.send('Point erased');
        })
    })
}