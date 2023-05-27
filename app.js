//importações
const express = require('express');
const app = express();
const porta = 1234;
const path = require('path');
const indexController = require('./Controllers/index.controller')
const database = require('./Database/database') // importação do servidor

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'images')));

//roteamento das páginas
app.get('/index', indexController.requererIndex);
app.get('/contato', indexController.requererContato);
app.get('/loja', indexController.requererLoja);
app.get('/produtos', indexController.requererTodosProdutos);
app.get('/carrinho', indexController.requererCarrinho);
app.get('/detalheDoProduto/:id', indexController.requererProdutosPorId);
app.get('/detalheDoProduto', indexController.requererTodosProdutos);
//app.get('/detalhes_produto', indexController.requererListarProdutos)

app.listen(porta, () => {
    console.log('Servidor rodando na porta 1234')
});
