const {Users} = require(global.models)

const users = {
  getAll : async (req, res) => {
    // peut faire operation sur la requete avant son arrivee vers la base de donnee
    let users = new Users()
    let items = await users.getAll()
    // peut faire des operations de formattage par exemple de la reponse de ma base
    res.send(items)
  }
}

module.exports = users