function requererIndex(req, res){
    let dados = ["dados a exibir"];

    res.render('Index', { dados })
};

function requererContato(req, res){
    let dados = ["dados a exibir"];

    res.render('Contato', { dados })
};


module.exports = {
    requererIndex,
    requererContato
}