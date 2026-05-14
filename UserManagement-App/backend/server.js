import exp from 'express'
import { UserApp } from './APIs/UserAPI.js'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import cors from 'cors'

// dotenv
config();
//create Http Server
const app=exp()

//add cors
app.use(cors({
  origin:["http://localhost:5173"]
}))
//body parser middleware
app.use(exp.json())
app.use("/user-api",UserApp)

async function ConnectDB() {
    try{
        await connect(process.env.MONGODB_URL)
        console.log("Connected to DataBase")
        app.listen(process.env.PORT,()=>console.log("Server is running on port 3000"))
    }
    catch(e){
        throw new Error("DataBase Connection Failed")
    }
}
ConnectDB()


app.use((err,req,res,next)=>{
  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  res.status(500).json({
    message: "Internal Server Error",
  });
});