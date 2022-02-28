var venue= require('../models/venue-model');

const create= (req,res) => {
  var newVenue = new venue({
    stadium: req.body.stadium,
    location: req.body.location,
    team: req.body.team,
  })

  newVenue.save(function(err, newVenue){
    if(err)
    res.send(err);
    else
    res.send({status:200, message:'user added successfully' ,userObj:newVenue});
  })
}

const list = (req,res)=>{
  newVenue.find(function(err,response){
    if(err)
    res.send(err);
    else
    res.send({status:200, listObj: response});
  })
}


const findByStadium = (req,res)=>{
  const name = req.query.stadium;
   newUser.find({stadium:name},function(err,response){
     if(err)
     res.send(err);
     else
     res.send({status:200, listObj: response});
   })
 }

 const updateByStadium= (req,res)=>{
  const givName = req.query.stadium;
  const spt = req.query.sport;
    newUser.update({stadium:givName},{sport:spt},function(err,response){
      if(err)
      res.send(err);
      else
      res.send({status:200, listObj: response});
    });
   
  }

  const remove = (req,res)=>{
    const id= req.query.userId
    venue.findByIdAndRemove(id,function(err,response){
      if(err)
      res.send(err);
      else
      res.send({status:200, listObj: response});
    })
  }
 
module.exports ={
create,
list,
findByStadium,
updateByStadium,
remove
};
