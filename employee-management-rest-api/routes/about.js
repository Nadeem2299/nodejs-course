var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'About Us Page' });
    // rendering template using pug
});

module.exports = router;