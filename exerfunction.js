//exercicio 2
let peso = parseFloat(prompt ("Digite seu peso:"))
let Altura = parseFloat(prompt ("Digite sua altura"))
let imc 


function imcPesoAltura (parPeso, parAltura){
     return parPeso/(parAltura*parAltura)
    }
imc= imcPesoAltura (peso, Altura);
alert (`O seu imc é ${imc}`)


//exercicio 3
let num = prompt('digite um numero');
function fat(num1){
    if(num == 1 || 0){
        alert ('O fatorial desse numero é 1')
    }else{
        numero = 1
        for(let i = num1; i>1 ; i-- ){
            numero *= i;
        }
    return numero
    }  

}
let fatorial = fat(num);
alert (`A fatorial desse numero é ${fatorial}`);


//exercicio 4
let valorEmDolar = parseFloat(prompt ("Digite um valor em doláres"))
 function valorDolarpReal(valorEmDolar){
  return valorEmDolar*4.80
 }
let valorEmReal = valorDolarpReal();
alert (`O valor para doláres é de: ${valorEmReal}`)


//exercicio 5
let altura = prompt ("Digite a altura da sala")
let largura = prompt ("Digite a largura da sala")
 
function area (parAlt, parLarg) {
  return parAlt * parLarg
}
function perimetro (paraAlt, paraLarg){
  return (paraAlt*2)+(paraLarg*2)
}
let AreaSala = area (altura, largura)
 alert (`A área da sala é de: ${AreaSala}`)
let PerimetroSala = perimetro (altura,largura)
alert (`O perímetro da sala é de: ${PerimetroSala}`)

 

//exercicio 6
let raio = parseFloat(prompt ("Digite o raio da sala"));
 
function area (parRaio) {
  return (parRaio*parRaio) * 3.14;
}
function perimetro (parRaio){
  return  ((2*3.14)*parRaio);
}
let areaSala = area (raio);
let perimetroSala = perimetro (raio);
alert (`O perímetro da sala é de: ${perimetroSala} e a área é de ${areaSala}`);


//exercicio 7
let nnumero = prompt ("Digite um número")

function calculaTabuada (parNumero) {
  for (let i = 0; i <= 10; i++) {
    console.log(` ${parNumero} x ${1} = ${parNumero * i}`)
}
}
calculaTabuada (nnumero);
