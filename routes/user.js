const mongoose = require('mongoose');
const express = require('express');
var userCtrl = require('../controllers/user.controller');
var router = express.Router();

//to enter new user data
router.get('/', function(req,res) {
  res.send("users route entered");
});
// to post
router
.route('/add-details')
.post(userCtrl.create);

//to get
router
.route('/list-details')
.get(userCtrl.list);

router
.route('/find-by-name')
.get(userCtrl.findByName);

//to delete
router
.route('/delete-by-id')
.delete(userCtrl.remove);

module.exports = router;