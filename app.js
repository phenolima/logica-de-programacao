alert("Boas vindas ao jogo do numero secreto!");
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt("Escolha um numero de 1 a 10");

    if (chute == numeroSecreto){
        alert("Voce acertou! O numero secreto é " + numeroSecreto + " com " + tentativas + " tentativa(s)");
    } else{
        // alert("Vc errou o numero, recarregue a pagina e tente novamente");
        if (chute >  numeroSecreto){
            alert("O numero secreto é menor que " + chute);
        } else{
            alert("O numero secreto é maior que " + chute);
        }
        tentativas++
    }
}

// alert("Boas vindas ao nosso site!");

// let nome = "Lua";
// let idade = 25;
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;

// let mensagemErro = alert("Erro! Preencha todos os campos");

// let nome = prompt("Qual o seu nome?");
// let idade = prompt("Qual a sua idade?");

// if (idade => 18){
//     alert("Pode tirar a habilitação!")
// }else{
//     alert("Nao pode tirar a habilitação :( ")
// }

// let diaSemana = prompt("Qual é o dia da semana hoje?");

// if ((diaSemana == "Sábado") | (diaSemana == "Domingo")){
//     prompt("Bom final de semana!!!");
// }else {
//     prompt("Boa semana!!!")
// }

// let numero = prompt("Digite um numero")

// if (numero < 0 ){
//     alert("Esse numero é negativo")
// } else{
//     alert("Esse numero é positivo")
// }

// let numero = prompt("Digite um numero")

// if (numero >= 100 ){
//     alert("Parabens, voce venceu!")
// } else{
//     alert("Tente novamente para ganhar.")
// }

// let saldoConta = 1000

// alert("O saldo da sua conta é: " +saldoConta)

// let nome = prompt("Digite o seu nome")

// alert("Boas vindas "+nome+"!")