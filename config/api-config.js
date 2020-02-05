import express  from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from '../routes';
let app = express();

app.use(cors());

app.use(bodyParser.json());

let router= express.Router();

app.use('/',router);
Routes.init(router);

app.use( (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.get('/', (req,res) => {
    res.send('hello there!');
});

let ApiConfig = { app };

module.exports = ApiConfig;