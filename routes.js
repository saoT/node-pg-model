const {Router} = require('express')
const express = require('express')


//const api = require('./api')

const routes = new Router()

//routes.use('/api',api)

// fallback sur le front
routes.use(express.static('./public'));

module.exports = routes