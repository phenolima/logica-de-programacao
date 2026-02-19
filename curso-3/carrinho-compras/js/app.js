let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitarioProduto = produto.split('R$')[1];
    let quantidadeProduto = document.getElementById('quantidade').value;
    let listaProdutos = document.getElementById('lista-produtos')
    let valorTotal = document.getElementById('valor-total');
    let calculoValorTotal = quantidadeProduto * valorUnitarioProduto;
     
    totalGeral = totalGeral + calculoValorTotal;

    valorTotal.innerHTML = `R$${totalGeral}`;

    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$ ${valorUnitarioProduto}</span>
    </section>`

    document.getElementById('quantidade').value = '';
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
    document.getElementById('quantidade').value = '';
}
