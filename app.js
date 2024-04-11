//exercicio2
let titulo = document.querySelector(`h1`)
titulo.innerHTML = "Hora do desafio!"
 
//exercicio3
function validarConsole(){
    console.log ("O botão foi clicado!");
}

//exercicio4
function validarAlert(){
    alert(" Eu amo JS");
}

//exercicio5
let cidade
function  validarPrompt(){
     cidade = prompt("Diga uma cidade do Brasil");
     alert (`Estive nesta ${cidade} e lembrei de você`);
}

//exercicio6
let numero1
let numero2
let numero
let soma
function validarSoma(){
    while(numero!=0){
    numero1= parseInt(prompt("digite 1 número"));
    numero2= parseInt(prompt( "Digite um 2 número"));
     break;
    }
soma=numero1+numero2
    alert (`A soma do ${numero1} e ${numero2} é ${soma}`);
}