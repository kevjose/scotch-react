import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 8080;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');
mongoose.connection.on('error', function (err) {
  console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

import {getGames, getGame, postGame, deleteGame} from './app/routes/game';

app.use(express.static(__dirname + '/client/dist'));

// Enable CORS so that we can make HTTP request from webpack-dev-server
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// API Routes
app.route('/games')
  .post(postGame)
  .get(getGames);
app.route('/game/:id')
  .get(getGame)
  .delete(deleteGame);

// For all other request send home page
app.route('/').get((req, res) => {
  res.sendFile('client/dist/index.html', {root: __dirname});
});
app.listen(port);
console.log('listening on', port);



