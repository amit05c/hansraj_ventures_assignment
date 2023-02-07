const express= require("express")
const { connection } = require("./config/db")
const cors= require("cors")
const { userRouter } = require("./routes/user.Router")
const { blogRouter } = require("./routes/blog.Router")
const app= express()
const PORT= process.env.PORT || 8080
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Welcome to Blog app ");
})

app.use("/user",userRouter)
app.use("/blog",blogRouter)
app.listen(PORT,async()=>{
    try{
      await connection
      console.log("DB connected")
      console.log(`Listening on port ${PORT}`)
    }
    catch(err){
      console.log(err.message)
    }
})
