const mongoose= require("mongoose")

const userSchema= new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    photo:  {type: String, default:"https://img.freepik.com/free-icon/user_318-875902.jpg"},
    password: {type: String, require: true}
})

const UserModel= mongoose.model("register",userSchema)

module.exports={
    UserModel
}