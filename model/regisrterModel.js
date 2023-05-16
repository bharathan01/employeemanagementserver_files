const mongoose =  require('mongoose')

user = mongoose.model('users',{

    name:{type:String},
    username:{type:String},
    email:{type:String},
    password:{type:String},

},'USERS')
module.exports = {
    user
}