let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio";

function botaoConsole(){
    console.log("O botao Console foi clicado");
}

function botaoAlerta(){
    alert("Eu amo JS");
}

function botaoPrompt(){
    let cidade = prompt("Digite o nome de uma cidade brasileira");
    alert(`Estive em ${cidade} e lembrei de voce`);
}

function botaoSoma(){
    let num1 = parseInt(prompt("Digite o primeiro número"));
    let num2 = parseInt(prompt("Digite o segundo número"));
    let soma = num1 + num2;
    alert(`O resultado da soma desses dois numeros é: ${soma}`);
}