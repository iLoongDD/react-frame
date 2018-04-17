const express = require('express');
const userModel = require('../db/user');
// eslint-disable-next-line
var router = express.Router();

/* GET users listing. */
router.get('/queryUsers', (req, res, next) => {
  userModel.find({ }, (err, result) => {
    if (err) {
      console.log(err, 'find error');
    }
    console.log('2222', result);
    res.send(result);
  });
});

module.exports = router;
