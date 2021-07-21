var exports = module.exports = {};

exports.addVictory = function(conn, app) {
    app.post('/victory/:id', (req, res) => {
        var id = req.params.id;
        var victory;
        conn.query('select V from liga where id = ?', [id], function(err, result) {
            if (err) throw err;
            victory = result[0].V;
            victory = victory + 1;
            conn.query('update liga set V = ? where id = ?', [victory, id], function(error, finalres) {
                if (error) throw error;
                res.send('1 victory added');
            })
        })
    })
}

exports.resetVictory = function(conn, app) {
    app.post('/resetVictory/:id', (req, res) => {
        var id = req.params.id;
        var victory = 0;
        conn.query('update liga set V = ? where id = ?', [victory, id], function(error, finalres) {
            if (error) throw error;
            res.send('victory reseted');
        })
    })
}

exports.addNul = function(conn, app) {
    app.post('/nul/:id', (req, res) => {
        var id = req.params.id;
        var nul;
        conn.query('select N from liga where id = ?', [id], function(err, result) {
            if (err) throw err;
            nul = result[0].N;
            nul = nul + 1;
            conn.query('update liga set N = ? where id = ?', [nul, id], function(error, finalres) {
                if (error) throw error;
                res.send('1 nul added');
            })
        })
    })
}

exports.resetNul = function(conn, app) {
    app.post('/resetNul/:id', (req, res) => {
        var id = req.params.id;
        var nul = 0;
        conn.query('update liga set N = ? where id = ?', [nul, id], function(error, finalres) {
            if (error) throw error;
            res.send('nul reseted');
        })
    })
}

exports.addDefeat = function(conn, app) {
    app.post('/defeat/:id', (req, res) => {
        var id = req.params.id;
        var defeat;
        conn.query('select D from liga where id = ?', [id], function(err, result) {
            if (err) throw err;
            defeat = result[0].D;
            defeat = defeat + 1;
            conn.query('update liga set D = ? where id = ?', [defeat, id], function(error, finalres) {
                if (error) throw error;
                res.send('1 defeat added');
            })
        })
    })
}

exports.resetDefeat = function(conn, app) {
    app.post('/resetDefeat/:id', (req, res) => {
        var id = req.params.id;
        var defeat = 0;
        conn.query('update liga set D = ? where id = ?', [defeat, id], function(error, finalres) {
            if (error) throw error;
            res.send('defeat reseted');
        })
    })
}