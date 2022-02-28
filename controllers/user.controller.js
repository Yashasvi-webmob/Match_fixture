
var User= require('../models/user-model');


const create= (req,res) => {
  var newUser = new User({
    userId:req.body.userId,
    username: req.body.username,
    location: req.body.location,
    sport: req.body.sport,
    teamName: req.body.teamName,
  })
  
  newUser.save(function(err, newUser){
    if(err)
    res.send(err);
    else
    res.send({status:200, message:'user added successfully' ,userObj:newUser});
  })
}

const list = (req,res)=>{
  
  User.find(function(err,response){
    if(err)
    res.send(err);
    else
    res.send({status:200, listObj: response});
  })
}

const findByName = (req,res)=>{
 const name = req.query.username;
  newUser.find({name:name},function(err,response){
    if(err)
    res.send(err);
    else
    res.send({status:200, listObj: response});
  })
}


const updateByName= (req,res)=>{
const givName = req.query.username;
const spt = req.query.sport;
  newUser.update({username:givName},{sport:spt},function(err,response){
    if(err)
    res.send(err);
    else
    res.send({status:200, listObj: response});
  });
 
}

const remove = (req,res)=>{
  const id= req.query.userId
  User.findByIdAndRemove(id,function(err,response){
    if(err)
    res.send(err);
    else
    res.send({status:200, listObj: response});
  })
}


/*const create = (req, res, next) => {
    const user = new User(req.body);
    user.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        });
      }
      res.status(200).json({
        message: "Successfully signed up!"
      });
    });
  };


const list = (req, res) => {
    User.find((err, users) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        });
      }
      res.json(users);
    });
  };

const userByID = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
      if (err || !user)
        return res.status("400").json({
          error: "User not found"
        });
      req.profile = user;
      next();
    });
  };*/

/*const remove = (req, res, next) => {
    let user = req.profile;
    user.remove((err, deletedUser) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        });
      }
      deletedUser.hashed_password = undefined;
      deletedUser.salt = undefined;
      res.json(deletedUser);
    });
  };*/

module.exports = {
  //remove,
  create,
  list,
  findByName,
  //updateByName,
  remove
}