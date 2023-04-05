function requererIndex(req, res){
    let dados = ["dados a exibir"];

    res.render('Index', { dados })
};

module.exports = {requererIndex}