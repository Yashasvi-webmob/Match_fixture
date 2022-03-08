var User= require('../models/user-model');
const bcrypt= require('bcryptjs');
var jwt = require('jsonwebtoken'); 


const signup= async(req,res)=>{
    /*const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()});
    }*/
  
    const{ email,password,username,sport,teamName,location,isCaptain}= req.body;

    try {
      let user1 = await User.findOne({
        email
      });
      if (user1) {
        return res.status(400).json({
          msg: "USER ALREADY EXIST"
        });
      }
    
    

      const user = new User({
        email,
        password,
        username,
        sport,
        teamName,
        location,
        isCaptain
      })  
    
      const salt = await bcrypt.genSalt();
      user.password = await bcrypt.hash(password,salt);
  
      await user.save();
  
      const payload = {
        user: {
          id: user.id
        }
      };
      
      jwt.sign(
        payload,
        "randomString",
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token
          });
        }
      );
      
    }
    catch (err) {
      console.log(err.message);
      res.status(500).send("Error is Saving");
    }  

} 



const login= async(req,res) =>{

async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  const { email, password } = req.body;
  try {
    
    let user = await User.findOne({
      email
    });
    if (!user)
      return res.status(400).json({
        message: "User Not Exist"
      });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({
          message: "Incorrect Password!"
        });
        
      const payload = {
        user: {
          id: user.id
        }
      };   
      
      jwt.sign(
        payload,
        "randomString",
        (err, token) => {
          if (err) throw err;
          return res.json({
            token
          });
        }
      );

  } catch (error) {
    console.error(e);
    return res.status(500).json({
      message: "Server Error"
    });
  }
}

}

//find user by generated token 



//
const create= (req,res) => {
  var newUser = new User({
    password:req.body.password,
    email: req.body.email,
    username: req.body.username,
    location: req.body.location,
    sport: req.body.sport,
    teamName: req.body.teamName,
    isCaptain: req.body.isCaptain
  })
  
  newUser.save(function(err, newUser){
    if(err)
    res.send(err);
    else
    res.send({status:200, message:'user added successfully' ,userObj:newUser});
  })
}

// to find current user using token 

 const currentUser= async(req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  }
  catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
}



//to display all
const list = async (req,res)=>{
  
 try{
  let listAll=  await User.find();
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
    let sport = await User.findById(id);
    res.send({status:200,Obj:sport});
  }
 }

const updateById= async(req,res)=>{
  const user = await User.findById(req.params.id);
  if(user){
    user.password=req.body.password,
    user.email= req.body.email,
    user.username= req.body.username,
    user.location= req.body.location,
    user.sport= req.body.sport,
    user.teamName= req.body.teamName,
    user.isCaptain= Boolean(req.body.isCaptain)
  
  const newUser =await user.save();
  res.send({message:"user updated",user: newUser});
  }
  else{
    return res.status(400).send({message:"user not found"})
  }
}

const remove = async(req,res)=>{
  const id = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.sen("No such user");
  }
  await teamModel.findByIdAndRemove(id);
  res.send("DONE");

}


module.exports = {
  
  create,
  list,
  updateById,
  findById,
  remove,
  currentUser,
  login,
  signup
}