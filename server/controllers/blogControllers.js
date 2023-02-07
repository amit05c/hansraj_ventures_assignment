const { BlogModel } = require("../models/blog.model");

const createBlog= async(req,res)=>{
    try{
        let {title,address,resturant,content,userId,photo}= req.body
          let newBlog= new BlogModel({
            userId,
           title,
           address,
           resturant,
           content,
           photo

          })
       await newBlog.save()
       res.status(201).json({
        status: "success",
        data: {
          blog: newBlog,
        }
      });
       
    }
    catch(err){
        res.status(400).json({
            status: "fail",
            message: err.message,
          });
    }
}

const getblog= async(req,res)=>{
      try{
        if(req.query){

            let allBlog= await BlogModel.find({...req.query})
            res.status(201).json({
                status: "success",
                data: allBlog
              });
        }else{
          let allBlog= await BlogModel.find()
          res.status(201).json({
            status: "success",
            data: allBlog
          });
        }
      }
      catch(err){
        res.status(400).json({
            status: "fail",
            message: err.message,
          });
      }
}

module.exports={
    createBlog,getblog
}