const express = require("express");
const bodyParser = require("body-parser");
 const cors=require('cors');
const app = express();
var mysql = require('mysql');
 app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'votes'
});

app.listen(4200, () => console.log(`Example app listening on port 4200!`));

app.post('/register', function (req, res) {
    var name = req.body.name;
    var votes = 0;
    con.query('insert into votes values("' + name + '","' + votes + '")', (err, response) => {
        if (err) throw err;
        else {
            res.json("1")
        }
    })
});


app.get("/allusers", (req, res) => {
	var sql = "select name from votes";
	con.query(sql,function(err,rows){
	if(err) {sendError(err, res);}
    res.json(rows);
	})
});


app.get("/allvotes", (req, res) => {
	var sql = "select votes from votes";
	con.query(sql,function(err,rows){
	if(err) {sendError(err, res);}
    res.json(rows);
	})
});

app.post('/voteAperson', function (req, res) {
    var name = req.body.name;
    sql='update votes set votes=votes+1 where name="'+name+'";'       
    con.query(sql,function(err,response){
	if(err) {throw err;}
    console.log((response));
    res.json(response);
	});
    })


