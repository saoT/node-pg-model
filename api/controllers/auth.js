const {Users} = require(global.models)
const authLib = require('../lib/auth')

// auth/register
// auth/login
const auth = {

  register : async (req, res) => {
    const users = new Users()
    let item = await users.createOne(req.body)
    console.log('hello')
    item.token = authLib.generateToken(item)
    res.send(item)
  },

  login : async (req, res) => {
    const users = new Users()
    const items = await users.getByOne({name: req.body.name}) // [{name : 'hello', mail : 'hello@gmail.com'}]
    const user = items.rows[0]
    user.token = authLib.verifyLogin(req, user)
    if (user.token) res.send(user)
    else res.send('Please, try again !')
  }

}

module.exports = auth