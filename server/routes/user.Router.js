const {Router}= require("express")
const { userCreate, login } = require("../controllers/userControllers")
const userRouter= Router()

userRouter.post("/signup",userCreate)
userRouter.post("/login",login)

module.exports={
    userRouter
}