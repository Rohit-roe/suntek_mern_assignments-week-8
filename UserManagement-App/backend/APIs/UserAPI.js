import exp from 'express'
import {UserModel} from '../models/UserModel.js'
// create mini express app
export const UserApp = exp.Router()
//User API Routes

//Create User
UserApp.post("/users",async (req,res)=>{
    //get new user
    let newUser=req.body
    // create user document
    let newUserDoc = new UserModel(newUser)
    await newUserDoc.save()
    res.status(201).json({message:"User Created",payload:newUserDoc})
})
//read all users
UserApp.get("/users",async (req,res)=>{
    let userList=await UserModel.find({status:true})
    if (userList.length===0){
        res.status(404).json({message:"No user present"})
    }
    else{
       res.status(200).json({message:"Users",payload:userList})
    }
})

// read a user by id
UserApp.get("/users/:id",async (req,res)=>{
    let uid=req.params.id
    let user=await UserModel.findOne({_id:uid,status:true})
    if (!user){
        res.status(404).json({message:"User Not Found"})
    }
    else{
        res.status(200).json({message:"User Found",payload:user})
    }
})
// delete a user by id
UserApp.delete("/users/:id",async (req,res)=>{
    let uid=req.params.id
    let user=await UserModel.findByIdAndUpdate(uid,{$set:{status:false}},{new:true})
    if (!user){
        res.status(404).json({message:"User Not Found"})
    }
    else{
        res.status(200).json({message:"User Removed"})
    }
})

// Activate the user
UserApp.patch("/users/:id",async (req,res)=>{
    let uid=req.params.id
    let user=await UserModel.findByIdAndUpdate(uid,{$set:{status:true}},{new:true})
    res.status(200).json({message:"User Removed",payload:user})
})

// update a user by id