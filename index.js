import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mysql from 'mysql';

const app = express();
app.use(cors());
app.use(bodyParser.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "share_car_ladakh"
});

var data;
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM cars", function (err, result, fields) {
    if (err) throw err;
    data = result;
  });
});

app.listen(443, () => console.log('API running on port 8000'));

app.get('/car-data', (req, res) => {
  res.send(data);
  // res.json(data);
});
