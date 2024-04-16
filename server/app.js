require('dotenv').config(); // At the top of your file

const port = process.env.PORT || 3000;
const express = require('express');
const path = require('path');
const app = express();
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var flash = require('express-flash');
var session = require('express-session');
var db = require('./database');
var routes = require('./routes');
const apiRouter = require('./routes'); // Adjust this path to where your routes file is located
var logger = require('morgan');

// Middlewares for parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));

// API routes should come first to ensure they are checked before trying to serve static files
app.use('/api', apiRouter); // All API routes are prefixed with '/api'

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
