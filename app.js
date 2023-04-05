const express = require('express');
const app = express();
const porta = 1234;

app.get('/', (req,res) => {
    res.send('Servidor rodando em: / - porta 1234')
});

app.listen(porta, () => {
    console.log('Servidor rodando na porta 1234')
});
