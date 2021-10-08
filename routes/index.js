var express = require('express');
const logger = require('../logger');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/add', function(req, res, next){
  var n1 = parseInt(req.query.n1);
  var n2 = parseInt(req.query.n2);
  logger.info('/api/add Used to add ' + n1 + ' and ' + n2);
  res.json({answer: n1 + n2});
});

module.exports = router;
