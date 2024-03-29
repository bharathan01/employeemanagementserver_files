const express = require('express')

const empModel = require('../model/dbmodel.js')

 const { getMethodes } = require ('../service/mainmethodes.js')


const { validateUserId } = require('./middlewere/middlewere.js')
const { json } = require('body-parser')
 const register = require('../controller/logincontroller.js')

 const methodes = getMethodes(empModel)

const routes = express.Router()

routes.get('/get', (req, res) => {
    

   methodes.getAll().then(
        data => res.status(200).json(data))

   .catch( error => error.status(400).json(error) )



})
routes.get('/empdata/:_id', validateUserId, (req , res) => {
    methodes.getById(req.params._id).then( data => {
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(404).json({
                error:`error id not getting..`
            })
        }
    })

    
     
})
routes.post('/add', (req ,res) => {
    methodes.create(req.body).then(
        data => res.status(200).json({message:`employee added successfully....`}))
    .catch( error => res.status(404).json({error:`something went wrong..`}))
})


routes.put('/update/:_id',validateUserId, (req , res) => {

    methodes.update(req.params._id,req.body).then(data => 
        res.status(200).json({message:'employee data updated successfully....'}))
        .catch(error => res.status(400).json(error))

})
routes.delete('/delete/:_id' , validateUserId ,(req , res) =>{
    methodes.delete(req.params._id).then(data => 
        res.status(200).json({message:'employee deleted successfully..',
    statusCode:200}))
})

routes.post('/register',(req, res) =>{
    register.register(req.body).then(data =>{
        res.status(res.statusCode).json(data)
    })
})
routes.post('/login',(req,res) =>{
  register.login(req.body).then(data => {
    res.status(res.statusCode).json(data)
  })
})

module.exports = routes
 