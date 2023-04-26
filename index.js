var express = require("express");
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "share_car_ladakh"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM cars", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});