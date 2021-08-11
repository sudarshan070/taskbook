var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Todo' });
});

router.get('/create', function (req, res, next) {
  res.render('index', { title: 'Create | Todo' });
});

router.get('/api/todo/update/:id', function (req, res, next) {
  res.render('index', { title: 'Update | Todo' });
});

module.exports = router;
