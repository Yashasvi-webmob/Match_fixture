
const teamModel = require('../models/team-model');

//create a user
const create= (req,res) => {
  var newteam = new team({
    userId:req.body.userId,
    stadium: req.body.stadium,
    sport: req.body.sport,
    teamName: req.body.teamName,
  })

  newteam.save(function(err, newteam){
    if(err)
    res.send(err);
    else
    res.send({status:200, message:'team added successfully' ,userObj: newteam});
  })
}

//list all users
const list = (req,res)=>{
  newteam.find(function(err,response){
    if(err)
    res.send(err);
    else
    res.send({status:200, listObj: response});
  })
}


const findByteam = (req,res)=>{
  const name = req.query.team;
   newUser.find({team:name},function(err,response){
     if(err)
     res.send(err);
     else
     res.send({status:200, listObj: response});
   })
 }
//delete a user
const remove = (req,res)=>{
  const id= req.query.userId
  teamModel.findByIdAndRemove(id,function(err,response){
    if(err)
    res.send(err);
    else
    res.send({status:200, listObj: response});
  })
}

//update a user

module.exports ={
    create,
    list,
    findByteam,
    remove
};
