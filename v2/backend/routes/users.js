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
  const family_data = [{
    id: 1,
    firstname: "Hari Kiran",
    lastname: "Yalavarthi"
  }, {
    id: 2,
    firstname: "Ravindra Babu",
    lastname: "Yalavarthi"
  }, {
    id: 3,
    firstname: "Vanaja",
    lastname: "Gogineni"
  },
  {
    id: 4,
    firstname: "Vinaya Sai",
    lastname: "Yalavarthi"
  }];
  res.json(family_data.filter(obj => obj.id == req.params.id));
});

module.exports = router;
