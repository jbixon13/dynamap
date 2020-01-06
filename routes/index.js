var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DynaMap' });
});

/* dynamically create routes for each location ID */
router.get('/locations/:id', function(req, res) {
  res.render('locations', { id: req.params.id });
});


module.exports = router;
