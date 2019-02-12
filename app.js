
// Before using the app you must have installed Mysql
// You can download XAMPP (which has Mysql as well) from https://www.apachefriends.org/index.html
// After downloading and installing you must start the Apache server and Mysql then visit http://localhost/phpmyadmin/ for the 
// mysql dashboard.
// To run this app you must run 'npm i -g nodemon' then, within the project, run 'npm start'

const express = require('express');
const mysql = require('mysql');

//CREATE CONNECTION
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root', // this can be edited in mysql dashboard
    password : 'passwordyousetinmysqlforroot', // to be set in mysql dashboard for this to work
  });

//CONNECT
db.connect((err) => {
    if(err) {
        throw err;
    } else {
        console.log("Connection established. Beam me up, Steve!")
    }
});

const app = express();

//CREATE DATABASE
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql'; // create a sql query string 
    db.query(sql, (err, result) => {
        if(err){
            throw err;
        } else {
            console.log(result);
            res.send('Reason: complaint! Subject: Steve!');
        }
    });
});

app.listen( '3000', () => {
    console.log('app server started on port 3000');
});