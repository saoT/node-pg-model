const {paths} = require('./config.js')
Object.assign(global, paths)

const express = require('express')

const routes = require('./routes.js')

const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");// www.google.com monsite.com 143.45.78.23
  res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  next();
});
console.log(process.env)
app.use(routes)

app.listen(3000, (err) => {
  console.log('App listening on port 3000')
})