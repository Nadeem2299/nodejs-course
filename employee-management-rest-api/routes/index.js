var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Employee Management App v1' });
  // rendering template using pug
});

module.exports = router;
