let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(idJogo) {
    gameclicado = document.getElementById(`game-${idJogo}`);
    botao = gameclicado.querySelector('.dashboard__item__button');
    imagem = gameclicado.querySelector('.dashboard__item__img');
    jogo = gameclicado.querySelector('.dashboard__item__name');

    if (botao.classList.contains('dashboard__item__button--return')) {
        let resposta = prompt(`Deseja confirmar a devolucao do jogo ${jogo.innerHTML}? Digite SIM`);
        if (resposta == 'SIM') {
            alert('Devolucao confirmada!');
            botao.innerHTML  = 'Alugar';
            botao.classList.remove('dashboard__item__button--return');
            imagem.classList.remove('dashboard__item__img--rented');
            jogosAlugados--;
        } else {
            return null;
        }
    } else {
        botao.innerHTML = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        jogosAlugados++;
    }
    contarEExibirJogosAlugados();
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__button--return').length;
    contarEExibirJogosAlugados();
});


function ordenarNumeros(a, b, c) {
    let numerosOrdenados = [a, b, c].sort();
    console.log(`Números ordenados: ${numerosOrdenados}`);
}

ordenarNumeros(3, 1, 5);