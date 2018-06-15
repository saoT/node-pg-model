const {Router} = require('express')

const bodyParser = require('body-parser')

const {
  users,
  auth
} = require(global.controllers)

const authMiddleware = require('./middleware/auth')

// Initiate 
const routes = new Router()

routes.use(bodyParser.urlencoded({extended: false}));
routes.use(bodyParser.json());

routes.get('/users', users.getAll)
routes.post('/auth/register', authMiddleware.hashCredentials, auth.register)
routes.post('/auth/login', auth.login)

routes.get('/restricted', authMiddleware.verifyToken, users.restrictedMethod)

// routes.post('/auth/login', auth.login)

// routes.get('/restricted', authMiddleware.verifyToken, controller)

// garder les routes RESTful
// un endpoint pour chaque controller :
// /users, /owners, /reviews
// CRUD
// GET -> /users -> getAll, fetchAll
// POST -> /users -> createOne, postOne
// UPDATE -> /users/:id -> updateOne
// DELETE -> /users:id -> deleteOne
// CUSTOM -> /users/filter/country/:id -> filterByCountry

module.exports = routes