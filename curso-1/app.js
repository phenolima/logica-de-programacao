alert("Boas vindas ao jogo do numero secreto!");
// let numeroSecreto = 5;
let numeroMax = 10000
let numeroSecreto = parseInt(Math.random() * numeroMax + 1)
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt(`Escolha um numero de 1 a ${numeroMax}`);

    if (chute == numeroSecreto){
        break;
        // alert("Voce acertou! O numero secreto é " + numeroSecreto + " com " + tentativas + " tentativa(s)");
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

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // Isso é um operador ternario
alert("Voce acertou! O numero secreto é " + numeroSecreto + " com " + tentativas + " " + palavraTentativa);


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

// let contador = 1;

// while (contador <= 10){
//     console.log(contador);
//     contador++;
// }


// let contador = 10;

// while (contador >= 0){
//     console.log(contador);
//     contador--;
// }


// let numMaximo = prompt("Digite o numero maximo do contador")
// let contador = 0

// while (contador <= numMaximo ){
//     console.log("Contagem progressiva " + contador);
//     contador++;
// }


// console.log("Boas vindas!!!");
// let nome = "Pedro Henrique";
// console.log("Olá, "+ nome);
// alert("Olá, "+ nome);

// let linguagemProgramacao = prompt("Qual a linguagem de programacao vc masis gosta?");
// console.log("A linguagem de programacao preferida do " + nome + " é " +linguagemProgramacao);

// let valor1 = 50;
// let valor2 = 40;

// resultadoSoma = (valor1 + valor2);
// resultadoSub = (valor1 - valor2);

// console.log(`O resultado da soma de ${valor1} e ${valor2} é ${resultadoSoma}`);
// console.log(`O resultado da subtracao de ${valor1} e ${valor2} é ${resultadoSub}`);


// let idade = prompt("Qual a sua idade?");

// if (idade >= 18){
//     alert("Vc ja é maior de idade");
// }else{
//     alert("vc ainda é menor de idade");
// }

// let numero = prompt("digite um numero");

// if (numero > 0) {
//     console.log("O numero digotado é positivo")
// }else if (numero == 0){
//     console.log("O numero digitado é zero")
// }else{
//     console.log("O numero digirado é negativo")
// }

// let numero = 1;
// while (numero <= 10){
//     console.log(numero);
//     numero++;
// }

// let nota = prompt("Digite a sua nota");
// let resultado = nota >= 7 ? "Aprovado" : "reprovado";
// console.log(`Vc foi ${resultado}`)

// let numero = parseInt(Math.random())
// let numero = Math.random()
// console.log(`O numero aleatorio é: ${numero}`)


// let numero = parseInt(Math.random() * 1000 + 1)
// console.log(`O numero aleatorio é: ${numero}`)