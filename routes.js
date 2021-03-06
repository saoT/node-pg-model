const {Router} = require('express')
const express = require('express')


const api = require(global.api)

const routes = new Router()

routes.use('/api', api.routes)

// fallback sur le front
routes.use(express.static('./public'));

module.exports = routes