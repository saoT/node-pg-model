const path = require ('path');

const config = {};

const nodePath = path.dirname(require.main.filename)

config.paths = {
  config: path.resolve(nodePath +'/config/'),
  api: path.resolve(nodePath + '/api/'),
  controllers: path.resolve(nodePath + '/api/controllers/'),
  database: path.resolve(nodePath + '/database/'),
  models: path.resolve(nodePath + '/database/models/')
}

config.server = {
  secret: process.env.APP_SECRET
}

config.db = {
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  name: process.env.PGDATABASE,
  user: process.env.PGUSER,
  pwd: process.env.PGPASSWORD,
}

module.exports = config