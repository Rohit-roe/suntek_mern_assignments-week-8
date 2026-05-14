import { Schema,model } from "mongoose"

// Create User Scheme with vlidation
const UserSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name is Required"]
    }, 
    email:{
        type:String,
        required:[true,"Email is Required"],
        unique:true
    },
    dateOfBirth:{
        type:Date,
        required:[true,"date of birth is required"]
    } ,
    mobileNumber:{
        type:Number
    },
    status:{
        type:Boolean,
        default:true
    }
},{
    strict:true,
    versionKey:false,   
    timestamps:true
})
// Create User Moderl For user schema

export const UserModel = model("user",UserSchema)