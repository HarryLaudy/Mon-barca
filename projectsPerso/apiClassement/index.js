const express = require('express');
const app = express();
const mysql = require('mysql');
const Points = require('./points');
const Match = require('./match_done');
const Result = require('./result');
const Diff = require('./diff');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'classement'
});

conn.connect(function(err) {
    if (err) throw err;
    console.log('connected');
    conn.query('select * from liga order by pts desc', function(error, result) {
        if (error) throw error;
        app.get('/info', (req, res) => {
            res.send(result);
        })
    })
    Points.seePoints(conn, app);
    Points.add3Points(conn, app);
    Points.add1Point(conn, app);
    Points.resetPoints(conn, app);
    Match.incMatchDone(conn, app);
    Match.resetMatchDone(conn, app);
    Result.addVictory(conn, app);
    Result.resetVictory(conn, app);
    Result.addNul(conn, app);
    Result.resetNul(conn, app);
    Result.addDefeat(conn, app);
    Result.resetDefeat(conn, app);
    Diff.incButPour(conn, app);
    Diff.resetButPour(conn, app);
})

app.listen(8000);