const express = require('express');
const app = express();
const porta = 1234;
const path = require('path');
const indexController = require('./Controllers/index.controller')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/index', indexController.requererIndex);

app.listen(porta, () => {
    console.log('Servidor rodando na porta 1234')
});
