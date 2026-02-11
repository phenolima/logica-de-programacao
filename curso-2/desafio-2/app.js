// 1
function olaMundo () {
    console.log('Olá mundo!');
}
olaMundo();

// 2
function exibeNome(nome){   
    console.log(`Olá, ${nome}!`);
}
exibeNome('Pedro');

// 3
function dobraValor(numero) {
    return numero * 2;
}
let result3 = dobraValor(5)
console.log(result3)

// 4
function calculaMedia(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
let media = calculaMedia(5, 5, 5);
console.log(media)

// 5
function exibeMaior(n1, n2) {
    return n1 > n2 ? n1 : n2;
}
let numeroMaior= exibeMaior(51, 7);
console.log(numeroMaior)

// 6
function multiplicaPorEleMesmo(number) {
    return number * number;
}
let result6 = multiplicaPorEleMesmo(9);
console.log(result6);