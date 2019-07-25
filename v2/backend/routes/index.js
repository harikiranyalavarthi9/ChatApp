var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/about', function(req, res, next) {
  res.render('about.html');
});

router.get('/sitemap', function(req, res, next) {
  res.render('sitemap.html');
});

module.exports = router;
