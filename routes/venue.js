
var express = require('express');
var router = express.Router();
var venueCtrl = require('../controllers/venue.controller');
/* GET users listing. */
router.get('/', function(req, res) {
  res.send('venue route entered');
});

//to post
router
.route('/add-details')
.post(venueCtrl.create);

//to get
router
.route('/list-details')
.get(venueCtrl.list);

router
.route('/find-by-stadium')
.get(venueCtrl.findById);

//to delete
router
.route('/delete-by-id')
.delete(venueCtrl.remove);

//to update
router
.route('/update/:id')
.put(venueCtrl.updateById);

module.exports= router;