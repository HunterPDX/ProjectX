var express = require('express');
var router = express.Router();
var dbFunctions = require('../db/dbFunctions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/subjects', function(req, res, next) {
  var newFunction = new dbFunctions("subjects");
  console.log(newFunction.find(1));
});

module.exports = router;
