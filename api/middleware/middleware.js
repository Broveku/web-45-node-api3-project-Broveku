const User = require('./users-model')

function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log(`it is a ${req.method}`)
  console.log(`${req.url}`)
  next()
}

function validateUserId(req, res, next) {
  const { id } = req.params
  User.getById(id)
      .then(possibleUser=>{
        if(possibleUser){
          req.user = possibleUser
          next()
        }else{
          next({message: 'not found', status: 404})
        }
      })
      .catch(next)
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules

module.exports = { validateUserId, logger, validateUser, validatePost }