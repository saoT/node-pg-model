const routes = require('./routes')
const authLib = require('./lib/auth')
const authMiddleware = require('./middleware/auth')

// Object.assign(api, require('./routes'))
// Object.assign(api, authLib)
// Object.assign(api, require('./middleware/auth'))


// console.log(routes)
// console.log(authLib)
// console.log(authMiddleware)

module.exports = {
  routes,
  authLib,
  authMiddleware
}