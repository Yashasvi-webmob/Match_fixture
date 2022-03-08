
const teamModel = require('../models/team-model');

//create a user
const create= async (req, res) => {
  const newTeam = new teamModel(req.body);

  try {
    const saveTeam = await newTeam.save();
    return res.status(200).json(saveTeam);
  } catch (err) {
    return res.status(500).json(err);
  }

};

//list all users
const list = async (req,res)=>{
  
  try{
   let listAll=  await teamModel.find();
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
    let obj = await teamModel.findById(id);
    res.send({status:200,Obj:obj});
  }
 }
//delete a user
const remove = async(req,res)=>{
  const id = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.sen("No such team");
  }
  await teamModel.findByIdAndRemove(id);
  res.send("DONE");

}

//update a user
const updateById= async(req,res)=>{
  const newteam = await teamModel.findById(req.params.id);
  if(user){
    newteam.users= req.body.users,
    newteam.location= req.body.location,
    newteam.stadium= req.body.stadium,
    newteam.team= req.body.team
  
  const newUser =await newteam.save();
  res.send({message:"venue updated",user: newUser});
  }
  else{
    return res.status(400).send({message:"team not found"})
  }
}

module.exports ={
    create,
    list,
    findById,
    remove,
    updateById
};
