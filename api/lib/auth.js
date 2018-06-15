const jwt = require('jsonwebtoken')
const moment = require('moment')
const bcrypt = require('bcrypt')

const generateToken = (user) => {
  const payload = {
    exp : moment().add(14, 'days').unix(),
    iat : moment().unix(),
    iss : user.name,
    sub : user.credentials
  }
  return jwt.sign(payload, process.env.APP_SECRET)
}

const verifyLogin = (req, user) => {
  if ( user && bcrypt.compareSync(req.body.name + req.body.password, user.credentials)) {
    return generateToken(user)
  }
  return false
}
module.exports = {
  generateToken,
  verifyLogin
}