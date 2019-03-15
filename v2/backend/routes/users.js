var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json([{
    id: 1,
  	username: "qastest"
  }, {
  	id: 2,
  	username: "qasdevelopment"
  }]);
});

router.get('/:id', function(req, res, next) {
  res.json([{
    firstname: "Hari Kiran",
    lastname: "Yalavarthi"
  }, {
    firstname: "Ravindra Babu",
    lastname: "Yalavarthi"
  }, {
    firstname: "Vanaja",
    lastname: "Gogineni"
  }]);
});

module.exports = router;
