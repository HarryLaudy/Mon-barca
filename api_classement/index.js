const express = require('express');
const mysql = require('mysql');
const app = express();
const Points = require('./points');
const Match = require('./match_done');
const Result = require('./result');
const Diff = require('./diff');
require('dotenv').config();

const conn = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

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
});

app.listen(8000);