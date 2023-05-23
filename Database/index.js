const { Sequelize, DataTypes } = require('sequelize')


const database = new Sequelize(
    'eletro',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

// DDL - Definição das tabelas
const Produtos = database.define('produtos', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true
    },
    preco: DataTypes.DOUBLE,
})



try {
    database.authenticate()
    database.sync()
}
catch(error) {
    console.error(error)
}

module.exports = {
    Produtos,
}