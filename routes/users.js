var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.app.get('sql'));
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {
  console.log(req.body);
  res.send("123");
});

module.exports = router;
