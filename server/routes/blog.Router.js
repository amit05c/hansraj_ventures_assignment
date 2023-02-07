const {Router}= require("express")
const { Authentication } = require("../authentication/userAuth")
const { createBlog, getblog } = require("../controllers/blogControllers")
const blogRouter= Router()

blogRouter.post("/create",Authentication,createBlog)
blogRouter.get("/",getblog)

module.exports={
    blogRouter
}