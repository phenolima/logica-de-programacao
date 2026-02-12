numeroSecreto = 5;
tentativa = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto );

    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Voce acertou o numero secreto ${numeroSecreto} em ${tentativa} ${palavraTentativa}`;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativa);
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor');
        } else{
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativa++;
    }
    
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}