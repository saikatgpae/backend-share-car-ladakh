// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import mysql from 'mysql';
// // var mysql = require('mysql');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "share_car_ladakh"
// });

// // var data;
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM cars", function (err, result, fields) {
//     if (err) throw err;
//     // data = result;
//     console.log(result);
//   });
// });

// app.get('/', function(req, res){
//   res.send('hello world!');
// });




// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import ip from 'ip';

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.get('/', function(req, res){
//   res.send("Hello world!");
// });

// app.get('/sign-up', (req, res) => {
//   res.send({ a: 'b' });
// });
// app.post('/sign-up', (req) => {
//   console.log('Frontend data', req.body.inputs);
// });

// app.get('/create-account', (req, res) => {
//   res.send({ e: 'f' });
// });
// app.post('/create-account', (req) => {
//   console.log('Frontend data', req.body.inputs);
// });

// const server = app.listen(5001, () => {
//   const { port, address } = server.address();
//   console.log('App listening at http://%s:%s', address, port);
// });


import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import ip from 'ip';
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(5001, () => console.log('API running on port 5001'));

app.get('/', (req, res) => res.json('App is running 😎'));
