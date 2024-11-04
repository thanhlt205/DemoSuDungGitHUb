var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Thế Thanh' });
  res.render('index', { title: 'Thanh' });
});

module.exports = router;
