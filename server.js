import express  from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './routes';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import * as conf from './config.json';

dotenv.config();
const app = express();
const environment = process.env.NODE_ENV || 'development';
const config = conf[environment];

app.use(cors());

app.use(bodyParser.json());

const router= express.Router();

app.use('/',router);
Routes.init(router);

app.use( (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.get('/', (req,res) => {
    res.send('hello there!');
});

const PORT = 3001;
mongoose.connect(config.db, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true },
    (err, res) => console.log("mongo connection success", err ? err : ''));

app.listen(process.env.PORT || PORT, function() {
    console.log("server connected to port " + PORT);
});