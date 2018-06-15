const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const moment = require('moment')

const {Users} = require(global.models)

module.exports = {

  hashCredentials : (req, res, next) => {
    const salt = bcrypt.genSaltSync(10)
    // {mail, password} -> {mail, hash}

    req.body = {
      name : req.body.name,
      credentials : bcrypt.hashSync(req.body.name + req.body.password, salt)
    }

    next()
  },

  verifyToken : (req, res, next) => {
    const token = req.query.token;

    if(!token) res.send('Authorization required') // sinon j'envoie directment vers la page de login

    else {
      jwt.verify(token, process.env.APP_SECRET, (err, payload) => {
        if (err || payload.exp < moment().unix()) res.send('Token expired')
        else next()
      })
    }
  }

}