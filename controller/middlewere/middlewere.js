const objectId = require('mongoose').Types.ObjectId

exports.validateUserId = (req , res, next) =>{
    if(objectId.isValid(req.params._id) == false)
        res.status(400).json({
            error:`invalid user ID..`
        })
        else
          next()
    
}