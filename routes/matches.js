// matche controller route..
const mongoose = require('mongoose');
const express = require('express');

var matchModel= require("../models/match-model");

var router = express.Router();
//to decide 2 matches or teams don't conflict
router.get('/', function(req,res) {
  res.send("users route entered");
});

// to create request
router.post('/create-request' , async(req, res) => {
    const newMatch = new matchModel(req.body);
  
    try {
      const saveMatch = await newMatch.save();
      return res.status(200).json(saveMatch);
    } catch (err) {
      return res.status(500).json(err);
    }
  
  });
// to delete request

router.delete('/del-request/:id',async(req,res)=>{
    const id=  await req.params.id;
    if(mongoose.isValidObjectId(id)){
      await matchModel.findByIdAndRemove(id);
      res.send("DONE");
    }
    else{
      res.send({status:400, message:"No such user exists"});
    }
  
  });
// to list requests
router.get('/list-details',async (req,res)=>{
  
  try{
   let listAll=  await matchModel.find();
   if(listAll== null){
     res.send("empty docs");
   }
   else{
     res.send(listAll);
   }
  }catch(err){
   res.status(400).json({message:err.message});
  }
 });

 //find req by id
 router.get('/update/:id',async(req,res)=>{
  let id = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.send("No Such ID");
  }
  else{
    let match = await matchModel.findById(id);
    res.send({status:200,Obj:match});
  }
 });


module.exports = router;
