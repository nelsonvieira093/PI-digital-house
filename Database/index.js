require('dotenv').config()
const { Sequelize } = require('sequelize')

const database = new Sequelize(
    process.env.DB_NOME,
    process.env.DB_USUARIO,
    process.env.DB_SENHA,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
}
)

const tabelaDeProdutos = {}

try {
    database.authenticate()
    database.sync()
}
catch(error) {
    console.error(error)
}

module.exports = {
    tabelaDeProdutos
}