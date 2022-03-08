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
.get(teamCtrl.findById);

//to delete
router
.route('/delete-by-id')
.get(teamCtrl.remove);

//to update
router
.route('/update/:id')
.put(teamCtrl.updateById);

module.exports = router;