function requererIndex(req, res){
    res.render('index')
};

function requererContato(req, res){
    res.render('contato')
};


module.exports = {
    requererIndex,
    requererContato
}