function alterarStatus(idJogo) {
    gameclicado = document.getElementById(`game-${idJogo}`);
    botao = gameclicado.querySelector('.dashboard__item__button');
    imagem = gameclicado.querySelector('.dashboard__item__img');
    jogo = gameclicado.querySelector('.dashboard__item__name');

    console

    if (botao.innerHTML == 'Alugar') {
        botao.innerHTML  = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
    } else {
        botao.innerHTML = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
        imagem.classList.remove('dashboard__item__img--rented');
    }
}