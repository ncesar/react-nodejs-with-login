require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

const api = require('./src/api/');

app.use(morgan('common'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Go to /api to start working with the server 😊',
  });
});

app.use('/api/', api);

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log('listening on:', port);
});
