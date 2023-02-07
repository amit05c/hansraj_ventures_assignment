const mongoose= require("mongoose")
mongoose.set('strictQuery', false);
require('dotenv').config()
const connection = mongoose.connect("mongodb+srv://amit05c:amitghosh@cluster0.fdtcdom.mongodb.net/hansraj_ventures?retryWrites=true&w=majority")

module.exports={
    connection
}