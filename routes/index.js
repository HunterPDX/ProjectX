var express = require('express');
var router = express.Router();

var knex 	= require('../db/db');
var mysql   = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/subjects', function(req, res, next) {
  	knex('subjects').then(function(data){
		console.log(data);
	});
});


module.exports = router;
