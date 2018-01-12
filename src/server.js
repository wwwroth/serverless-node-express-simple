const express = require('express');
const app = express();

const port = process.env.PORT || 8000;
const baseUrl = `http://localhost:${port}`;

app.set('view engine', 'pug')

app.get('/', (req, res) => {
   res.render('index', {
      title: 'wwwroth',
      message: 'A serverless, node/express page'
   })
});

module.exports = app;