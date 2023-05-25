function requererIndex(req, res){
    res.render('index')
};

function requererContato(req, res){
    res.render('contato')
};

function requererLoja(req, res){
    res.render('loja')
};

function requererProdutos(req, res){
    res.render('produtos')
};

function requererCarrinho(req, res){
    res.render('carrinho')
};

 
/*function requererListarProdutos (req, res){
    res.render('detalhes_produtos')
};
*/

module.exports = {
    requererIndex,
    requererContato,
    requererLoja,
    requererProdutos,
    requererCarrinho
    //requererListarProdutos
}