const mongoose= require("mongoose")

const blogSchema= new mongoose.Schema({
    
    title: {type: String, required: true},
    resturant: {type: String, required: true},
    address: {type: String, required: true},
    content: {type: String, require: true},
    userId: {type: mongoose.Schema.Types.ObjectId,
        ref: "register", required:true},
    photo: {type: String, required: true}
    })

const BlogModel= mongoose.model("blog",blogSchema)

module.exports= {
    BlogModel
}