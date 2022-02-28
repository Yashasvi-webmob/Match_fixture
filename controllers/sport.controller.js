
var sportModel= require('../models/sport-model');

const create= (req,res) => {
  var newSport = new sportModel({
   
    sport: req.body.sport,
    teamName: req.body.teamName,
  })

  newSport.save(function(err, newSport){
    if(err)
    res.send(err);
    else
    res.send({status:200, message:'user added successfully' ,userObj: newSport});
  })
}

const list = (req,res)=>{
  newSport.find(function(err,response){
    if(err)
    res.send(err);
    else
    res.send({status:200, listObj: response});
  })
}

const findBySport = (req,res)=>{
  const name = req.query.sport;
   sportModel.find({sport:name},function(err,response){
     if(err)
     res.send(err);
     else
     res.send({status:200, listObj: response});
   })
 }

 const remove = (req,res)=>{
  const id= req.query.userId
  sportModel.findByIdAndRemove(id,function(err,response){
    if(err)
    res.send(err);
    else
    res.send({status:200, listObj: response});
  })
}
 

module.exports = {
    create,
    list,
    findBySport,
    remove
};