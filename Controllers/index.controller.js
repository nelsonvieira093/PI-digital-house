function requererIndex(req, res){
    res.render('index')
};

function requererContato(req, res){
    res.render('contato')
};

function requererLoja(req, res){
    res.render('loja')
};



function requererCarrinho(req, res){
    req.ListarProdutos = res.query
    res.render('carrinho')
};


const {ListarProdutos} = require('../Models/produtos.model')


const requererTodosProdutos = (req, res) => {
    const renderizarProdutos = ListarProdutos();
    res.render("detalhes_produto",{
        renderizarProdutos,
    });
};

const { obterProdutosPorId } = require('../Models/produtos.model');

function requererProdutosPorId(req, res) {

    
    const  id  = req.params;

    const ProdutosEncontradoPorId = obterProdutosPorId(id);

    res.render("detalhes_produto",{
        ProdutosEncontradoPorId
    });
}

 
/*function requererListarProdutos (req, res){
    res.render('detalhes_produtos')
};
*/

module.exports = {
    requererIndex,
    requererContato,
    requererLoja,
    requererCarrinho,
    requererTodosProdutos,
    requererProdutosPorId
}