//exercicio 3
function validarConsole(){
    console.log ("Olá mundo");
}
validarConsole();



//exercicio 4
let nome = prompt("Digite o seu nome")
function validarConsole(nomef){
console.log (`Olá ${nomef}`)
}
validarConsole(nome);



//exercicio 5
let numero = parseInt(prompt("Digite um número"));

function dobroNumero(parNumero){
  return parNumero*2
}
let dobro = dobroNumero (numero)
alert (`o dobro do número é ${numero}`)



//exercicio 6 
let numero1 = prompt("Digite um número");
let numero2 = prompt ("Digite um segundo número");
let numero3 = prompt ("Digite um terceiro número");
let media 
 
function CalcularMedia (n1, n2, n3){
  return (n1+n2+n3)/3
}
media = CalcularMedia (n1, n2, n3);
alert (`A média entre os números é :${media.tofixed(2)}`);



//exercicio 7
let número = parseInt(prompt("Digite um número"));
let número2 =parseInt(prompt("Digite um segundo número"));
 
function maiorNumero(parN1, parN2){
   if (parN1 > parN2){
    return parN1;
   }
   else {
    return parN2;
   }
}

maior= maiorNumero(numero1, numero2); 
alert (`O maior número é: ${maior}`)



//exercicio 8
let Número = parseFloat(prompt("Digite um número"));
let Multiplicação ;
function calcularMultiplicação(parNumero) {
  return parNumero*parNumero
}
Multiplicação= calcularMultiplicação(Número);
alert (`O resultado da multiplicação é ${Multiplicação}`);
