require('dotenv').config()

const { Sequelize, DataTypes } = require('sequelize');

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
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    imagem: DataTypes.STRING,
    preco_de: DataTypes.STRING,
    preco_por: DataTypes.STRING,
    categoria: DataTypes.STRING
})

const Categoria = database.define('categoria', {
    id_categoria: DataTypes.STRING,
    categoria: DataTypes.STRING
})



try {
    database.authenticate()
    database.sync()
}
catch(error) {
    console.error(error)
}

module.exports = {
    Produtos, Categoria
}