listaDeNumeros = []; 

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if(listaDeNumeros.length == quantidade){
        listaDeNumeros = [];
    }
    for (i = 1; i <= quantidade; i++){
        let numeroSorteado = parseInt(Math.random() * (ate - de + 1) + de);
        listaDeNumeros.push(numeroSorteado);
    }
    exibirNumerosNaTela(`Números Sorteados: ${listaDeNumeros}`);
    document.getElementById('btn-reiniciar').setAttribute('class', 'container__botao');
}

function exibirNumerosNaTela(texto) {
    let campo = document.getElementById('resultado');
    campo.innerHTML = texto;
}

function reiniciar() {
    exibirNumerosNaTela('Números sorteados:  nenhum até agora');
    listaDeNumeros = [];
    document.getElementById('btn-reiniciar').setAttribute('class', 'container__botao-desabilitado');
    limparCampos();
}

function limparCampos() {
    quantidade = document.getElementById('quantidade');
    de = document.getElementById('de');
    ate = document.getElementById('ate');
    de.value = '';
    ate.value = '';
    quantidade.value = '';
}