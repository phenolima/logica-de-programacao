function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let listaDeNumeros = [] 

    for (i = 1; i <= quantidade; i++){
        let numeroSorteado = obterNumeroAleatorio(de, ate);
        if (listaDeNumeros.includes(numeroSorteado)) {
            return sortear();
        } else {
            listaDeNumeros.push(numeroSorteado);
        }
    }

    let campoResultado = document.getElementById('resultado');
    campoResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${listaDeNumeros}</label>`
    alterarBotaoReiniciar();
}

function obterNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}

function reiniciar() {
    campoResultado = document.getElementById('resultado');
    campoResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
    limparCampos();
    alterarBotaoReiniciar();
}

function limparCampos() {
    quantidade = document.getElementById('quantidade');
    de = document.getElementById('de');
    ate = document.getElementById('ate');
    de.value = '';
    ate.value = '';
    quantidade.value = '';
}

function alterarBotaoReiniciar(){
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}