const {connection} = require(global.database)

class Model {
  constructor (table) {
    this.table = table
  }

  getAll () {
    return connection.run(`SELECT * from ${this.table}`)
  }

  getOne (id) {
    // const query =  {
    //   query : 'SELECT * from table WHEREid=$::id'
    //   values = ['']
    // }
    return connection.run(`SELECT * from ${this.table} WHERE id=${id}`)
  }

  // toutes les methodes de CRUD general
}

module.exports = {Model}