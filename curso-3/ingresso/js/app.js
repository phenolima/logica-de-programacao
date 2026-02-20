function comprar() {
    let qtdPista = parseInt(document.getElementById('qtd-pista').innerHTML);
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').innerHTML);
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').innerHTML);
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtdDesejada = document.getElementById('qtd').value;

    if (tipoIngresso == 'pista') {
        restantePista = qtdPista - qtdDesejada;
        if (restantePista < 0) {
            alert(`Quantidade indisponível para ingressos do tipo: ${tipoIngresso}`);
        } else {
            document.getElementById('qtd-pista').innerHTML = `${restantePista}`;
        }
    }

    if (tipoIngresso == 'superior') {
        restanteSuperior = qtdSuperior - qtdDesejada;
        if (restanteSuperior < 0) {
            alert(`Quantidade indisponível para ingressos do tipo: ${tipoIngresso}`);
        } else {
            document.getElementById('qtd-superior').innerHTML = `${restanteSuperior}`;
        }
    }

    if (tipoIngresso == 'inferior') {
        restanteInferior = qtdInferior - qtdDesejada;
        if (restanteInferior < 0) {
            alert(`Quantidade indisponível para ingressos do tipo: ${tipoIngresso}`);
        } else {
            document.getElementById('qtd-inferior').innerHTML = `${restanteInferior}`;
        }
    }
    
}


