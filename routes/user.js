const mongoose = require('mongoose');
const express = require('express');
const {check, validationResult}= require('express-validator');
var userCtrl = require('../controllers/user.controller');
var User = require('../models/user-model');
var router = express.Router();

//to enter new user data
router.get('/', function(req,res) {
  res.send("users route entered");
});

// to signup
router
.route('/signup')
.post(userCtrl.signup);

// to login
router
.route('login')
.post(
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6
    })
  ],userCtrl.login);

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
.get(userCtrl.findById);

//to delete
router
.route('/delete-by-id')
.delete(userCtrl.remove);

//to update
router
.route('/update/:id')
.put(userCtrl.updateById);

module.exports = router;