const userModel = require('../models/userModel')
const { compare } = require('../helpers/bcrypts')
const { sign } = require('../helpers/jwtoken')

class UserController {
  static signup (req, res, next) {
    let {email, password} = req.body
    let newUser = {email, password}

    userModel
      .create(newUser)
      .then(created => {
        res.status(201).json(created)
      })
      .catch(next)
  }

  static signin (req, res, next) {
    let {email, password} = req.body

    userModel
      .findOne({email})
      .then(found => {
        if (found) {
          if (compare(password, found.password)) {
            let payload = {
              username: found.username,
              email: found.email,
              id: found._id
            }
            console.log('akan ke sign')
            let token = sign(payload)
            res.status(200).json({
            token})
          } else {
            throw ({
              code: 404,
              message: `invalid username / email / password`
            })
          }
        } else {
          throw ({
            code: 404,
            message: `invalid username / email / password`
          })
        }
      })
      .catch(next)
  }

}

module.exports = UserController
