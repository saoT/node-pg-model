const {Router} = require('express')
const bodyParser = require('body-parser')

const routes = new Router()

routes.use(bodyParser.urlencoded({extended: false}));
routes.use(bodyParser.json());

const {users} = require (global.controllers)

routes.get('/users', users.getAll)

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