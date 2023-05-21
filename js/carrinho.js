var resumo = document.getElementById('descricao');
var qtdeProduto = document.getElementById('qtdeProduto');
var total = document.getElementById('valorTotal');
var valorProduto;
var valorTotalCompra;
//resumo.innerHTML = '<p><strong>Descrição da caneca</strong></p>' + sessionStorage.nome + '<strong>' + sessionStorage.valor + '</strong>';

qtdeProduto.addEventListener('change',calcularValorCompra);

valorProduto.sessionStorage.valor;
valorProduto. valorProduto.repleceAll('R$', ' ')

function calcularValorCompra(){
    valorProduto = Number(valorProduto);
    valorTotalCompra = valorProduto*qtdeProduto.Value;

    total.innerHTML = '<p><strong> Valor total da compra: </strong></p>' + '<strong>R$ ' + valorTotalCompra + '</strong>';

}
