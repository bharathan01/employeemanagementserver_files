const mongoose =require('mongoose')

module.exports =  mongoose.model('empolyee',{
    fullname:{type:String},
    position:{type:String},
    address:{type:String},
    salary:{type:Number},
},'Empoyees')