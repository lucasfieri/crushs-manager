require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { Model } = require('objection');
const connectToDb = require('./database');
const cors = require('cors');

Model.knex(connectToDb());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const crushsController = require('./controllers');

app.get('/', (req, res) => {
  return res.status(200).json({
      application: 'Crushs Manager',
      time: new Date(),
      version: '1.0.0'
  })
});

app.use('/crushs', crushsController);

app.listen(3000, () => console.log('Estou funcionando na porta 3000'))