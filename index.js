const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const port = '8082';
const app = express();
app.use(cors());

// API
const events = require('./src/backend/events');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/events', events);

// SSR
app.use('/', express.static('public'));

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get('/', (req, res) => {
  res.send(`Hello! App is at http://localhost:${port}`);
});


app.listen(process.env.PORT || port);
