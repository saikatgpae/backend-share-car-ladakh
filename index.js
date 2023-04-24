import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import ip from 'ip';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(8000, () => console.log('API running on port 8000'));

app.get('/', (req, res) => res.json('App is running 😎'))


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
