//conversar com o william como fazer o crud dos arquivos

const Produtos = require('./database')
const Categoria = require('./database')

Produtos.create({
    titulo: 'Geladeira Brastemp Frost Free Inverse 443 litros cor Inox com Turbo Ice',
    descricao: 'A Geladeira Brastemp Frost Free Inverse 443 litros cor Inox tem refrigerador em cima e freezer embaixo, deixando os alimentos mais utilizados sempre à mão. Com o Turbo Ice, faça gelo mais rápido sempre que precisar. O modelo conta ainda com Twist Ice Advanced e Espaço Adapt.',
    imagem: '/images/GELADEIRA1.jpeg',
    preco_de: '6.300,00',
    preco_por: '4.929,55',
    id_categoria: '1'
})

Categoria.create({
    categoria: 'Geladeira'
})