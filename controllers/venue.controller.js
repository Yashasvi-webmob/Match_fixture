
var venue= require('../models/venue-model');

const create= async (req, res) => {
  const newVenue = new venue(req.body);

  try {
    const saveVenue = await newVenue.save();
    return res.status(200).json(saveVenue);
  } catch (err) {
    return res.status(500).json(err);
  }

}

const list = async(req,res)=>{
  
  try{
   let listAll=  await venue.find();
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
  const newVenue = await venue.findById(req.params.id);
  if(user){
    newVenue.location= req.body.location,
    newVenue.stadium= req.body.stadium,
    newVenue.teamName= req.body.teamName
  
  const newUser =await newVenue.save();
  res.send({message:"venue updated",user: newUser});
  }
  else{
    return res.status(400).send({message:"venue not found"})
  }
}


const remove = async(req,res)=>{
  const id = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.sen("No such venue");
  }
  await teamModel.findByIdAndRemove(id);
  res.send("DONE");

}

module.exports ={
create,
list,
findById,
updateById,
remove
};
