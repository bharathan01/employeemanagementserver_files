const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/employee_db'



module.exports = ()=> {
     return mongoose.connect(url,{useNewUrlParser:true})

}
