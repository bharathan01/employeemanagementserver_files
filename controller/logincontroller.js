

const userModel = require('../model/regisrterModel.js')
const mainMethode = require('../service/mainmethodes.js')


register = (userDetails) =>{
    username = userDetails.username
    email = userDetails.email
  
     return userModel.user.findOne({email}).then(data =>{
        if(data){
            return{
                status:false,
                stausCode:400,
                message:'Email is already registered..'
            }
        }
        else{
             newuser = new userModel.user(userDetails)

        }
        newuser.save()
        return{
            status:true,
            statusCode:200,
            message:'registred Successfully..' 

        }

     })
}
login = (details)=>{
    email = details.email
    password = details.password
   return userModel.user.findOne({email,password}).then(data =>{
        if(data){
          email = data.email
          password = data.password
          return{
            data,
            status:true,
            statusCode:200,
            message:'log in successfull'
          }
        }
        return{
            status:false,
            statusCode:400,
            message:'email id or password is wrong..'
        }
        
    })
}
module.exports = {
    register,login
}