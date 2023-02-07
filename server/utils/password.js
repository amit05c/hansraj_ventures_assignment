const bcrypt= require('bcryptjs')

const hashPassword= (password)=>{
//   let x=  bcrypt.genSalt(10, function(err, salt) {
//  return   bcrypt.hash(password, salt, function(err, hash) {
//             // Store hash in your password DB.
//             // console.log(hash)
//             return hash
//         });
//     });
//     console.log(x)

var hash = bcrypt.hashSync(password, 10);
// console.log(hash)
return hash
}

const checkPassword= async(password,hash)=>{
    let check= bcrypt.compareSync(password, hash); 
    // console.log(check)
    return check      //true //false
}







module.exports={
    hashPassword,
    checkPassword
}