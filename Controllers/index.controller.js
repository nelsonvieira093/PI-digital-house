function requererIndex(req, res){
    res.render('Index')
};

function requererContato(req, res){
    res.render('Contato')
};


module.exports = {
    requererIndex,
    requererContato
}