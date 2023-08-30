// imports from node_modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');
var cors = require("cors");

require('./models/account.model');
// connecting passport config
require('./config/passport.config')

// custom imports
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
// importing rest api related information
var employeesRouter = require('./routes/api/employees');
var authRouter = require('./routes/api/auth');



// variables
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // where is the template
app.set('view engine', 'pug'); // what's the template engine

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//setting up auth middleware
passport.initialize();

app.use(cors());
app.use('/', indexRouter); //localhost:3000/
app.use('/users', usersRouter); // localhost:3000/users
app.use('/about', aboutRouter); // localhost:3000/about

// REST API - Endpoints
app.use('/api/employees', employeesRouter)
app.use('/api/auth', authRouter)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
