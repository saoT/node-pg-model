const {Router} = require('express')
const bodyParser = require('body-parser')

const apiRoutes = new Router()

apiRoutes.use(bodyParser.urlencoded({extended: false}));
apiRoutes.use(bodyParser.json());

const {users} = require (global.controllers)

apiRoutes.get('/users', users.getAll)

// garder les routes RESTful
// un endpoint pour chaque controller :
// /users, /owners, /reviews
// CRUD
// GET -> /users -> getAll, fetchAll
// POST -> /users -> createOne, postOne
// UPDATE -> /users/:id -> updateOne
// DELETE -> /users:id -> deleteOne
// CUSTOM -> /users/filter/country/:id -> filterByCountry

module.exports = apiRoutes