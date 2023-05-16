const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')

//importing db connect
const connectdb = require('./db.js')
const empolyeRoute = require('./controller/controller.js')

const app = express()

//what ever the data comming inthe body part convered in to json
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:4200'}))
app.use('/api/employee', empolyeRoute)
 


connectdb().then(() => {
    app.listen(3000, () => console.log('sever stated at the port 3000...'))
    console.log('database connected successfully....'); 
}).catch(error => console.log(error))

  
