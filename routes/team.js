const mongoose = require('mongoose');
const express = require('express');
var teamCtrl = require('../controllers/team.controller');
var router = express.Router();

//to enter new user data
router.get('/', function(req,res) {
  res.send("team route entered");
});
// to post
router
.route('/add-details')
.post(teamCtrl.create);

//to get
router
.route('/list-details')
.get(teamCtrl.list);

router
.route('/find-by-team')
.get(teamCtrl.findByteam);

//to delete
router
.route('/delete-by-id')
.get(teamCtrl.remove);

module.exports = router;