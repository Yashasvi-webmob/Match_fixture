
const  mongoose  = require('mongoose');
var sportModel= require('../models/sport-model');

const create= async (req, res) => {
  const newSport = new sportModel(req.body);

  try {
    const saveSport = await newSport.save();
    return res.status(200).json(saveSport);
  } catch (err) {
    return res.status(500).json(err);
  }

}

const list = async (req,res)=>{
  
  try{
   let listAll=  await sportModel.find();
   if(listAll== null){
     res.send("empty docs");
   }
   else{
     res.send(listAll);
   }
  }catch(err){
   res.status(400).json({message:err.message});
  }
 }

const findById = async(req,res)=>{
  let id = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.send("No Such ID");
  }
  else{
    let sport = await sportModel.findById(id);
    res.send({status:200,Obj:sport});
  }
 }

 const updateById= async(req,res)=>{
  const newsport = await sportModel.findById(req.params.id);
  if(user){
    newsport.sport= req.body.sport,
    newsport.teams= req.body.teams
  
  const newUser =await newsport.save();
  res.send({message:"venue updated",user: newUser});
  }
  else{
    return res.status(400).send({message:"team not found"})
  }
}

 const remove = async(req,res)=>{
  const id=  await req.params.id;
  if(mongoose.isValidObjectId(id)){
    await sportModel.findByIdAndRemove(id);
    res.send("DONE");
  }
  else{
    res.send({status:400, message:"No such user exists"});
  }

}
 

module.exports = {
    create,
    list,
    findById,
    updateById,
    remove
};