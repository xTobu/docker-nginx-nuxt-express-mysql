const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer');

const indexRouter = require('./routes/index');
const api_userRouter = require('./routes/api/user');
const app = express();

// bodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// multer for parsing multipart/form-data , only multer@0.1.8
// https://segmentfault.com/q/1010000003050818
app.use(multer()); 



// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({
//   extended: false
// }));
app.use(cookieParser());

// gzip
// app.use(express.static(path.join(__dirname, 'public')));

// disable route "/"
// app.use('/', indexRouter);

// API Route 
app.use('/api/user', api_userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;