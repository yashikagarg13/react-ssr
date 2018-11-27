const express = require('express');
const functions = require('./functions');

const router = express.Router();

router.get('/', (req, res) => {
  functions.getAllEvents().then((response) => {
    res.json({ events: response });
  });
});

module.exports = router;
