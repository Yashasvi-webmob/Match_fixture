
const express = require('express');
var sportCtrl = require('../controllers/sport.controller');
var router = express.Router();

//to enter new user data
router.get('/', function(req,res) {
  res.send("sport route entered");
});
// to post
router
.route('/add-details')
.post(sportCtrl.create);

//to get
router
.route('/list-details')
.get(sportCtrl.list);

router
.route('/find-by-sport')
.get(sportCtrl.findById);

//to delete
router
.route('/delete-by-id')
.get(sportCtrl.remove);

//to update
router
.route('/update/:id')
.put(sportCtrl.updateById);

module.exports = router;