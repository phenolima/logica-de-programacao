// 1
function calculaImc(altura, peso) {
    return peso / (altura * altura);
}
imc = calculaImc(1.77, 80);
console.log(`O IMC é ${parseInt(imc)}`);


// 2
function calculaFatorial(num){
    if (num == 0 || num == 1){
        return 1;
    }
    let fatorial = 1
    for (i=2; i <= num; i++){
        fatorial = fatorial * i;
    }
    return fatorial;
}
fatorialResult = calculaFatorial(4)
console.log(`Resultado é ${fatorialResult}`);

//3 
function conveterParaReal(valor) {
    return valor * 4.80;
}
let valorEmDolar = 60;
let valorEmReal = conveterParaReal(valorEmDolar);
console.log(`$${valorEmDolar} --> R$${valorEmReal}`);

//4
function calculaAreaPerimetroRetangulo(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`Área do retangulo: ${area} m²`);
    console.log(`Perimetro do retangulo: ${perimetro} m`);
}
let alturaRetangulo = 10;
let larguraRetangulo = 10;
calculaAreaPerimetroRetangulo(alturaRetangulo, larguraRetangulo);

//5
function calculaAreaPerimetroCirculo(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;

    console.log(`Área do círculo: ${area.toFixed(2)} m²`);
    console.log(`Perimetro do círculo: ${perimetro.toFixed(2)} m`);
}
let raioCirculo = 10;
calculaAreaPerimetroCirculo(raioCirculo);

function exibirTabuada(numero) {
    for (i = 1; i <= 10; i++){
        let resultado = numero * i;
        console.log(`${numero} X ${i} = ${resultado}`);
    }
}
exibirTabuada(9);