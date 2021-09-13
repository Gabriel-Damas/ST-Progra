/*
let icaro = 12;
let naruto = 10;
console.log(5*naruto + icaro)

let icaro = true;
let samara = false;
let gabriel = icaro || samara;

console.log(gabriel);

let beatriz = !gabriel;
console.log(beatriz);

let icaro = 'samara';
let gabriel = 'beatriz';
let rafael = icaro || gabriel;
console.log('Será =' ,rafael);

let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

let icaro = 19;

if (icaro > 6 && icaro < 12){
console.log('Bom dia')
}
else if (icaro > 13 && icaro < 17){
console.log('Boa Tarde')
}
else {
console.log('Vá dormir')
}

let icaro;
icaro = 'sakura';

switch (icaro){
case 'naruto':
console.log('Usuario Naruto');
break;

case 'sasuke':
console.log('Usuario Sasuke');
break;

case 'sakura':
console.log('Usuario Sakura');
break;
}

let icaro = 'icaro'
let gabriel = 'samara'
let kaique = icaro || gabriel
console.log(kaique)

for(let i=0; i < 5; i++){
if(i & 2 !== 0){
console.log('icaro = ' ,i);
}
}

let i = 5

while(i >= 1){
if ( i % 2 !== 0 ) {
console.log(i)
}
i--;
}

let i = 0;
do{
console.log('Vai ser =', i)
i++;
} while (i <= 10)

const i = {
nome= "icaro",
idade= 16
};

for (let chave in i){
console.log(chave,i['nome']);
}

const cores = ['Branco', 'Verde' ,'Vermelho']

for (let indice in cores){
console.log(indice, cores [indice])
}

for ( cor of cores){
console.log(cor);
}

const icaro = FizzBuzz (15)
console.log(icaro);

function FizzBuzz (samara){
if (typeof samara !== "number")
    
return "f1";

if ( (samara % 3 ===0) && ( samara % 5 === 0))
return "f4";

if (samara % 3 === 0)
return "f2";

if (samara % 5 === 0)
return "f3";

return samara;
}

let icaro = 10;

if (icaro > 6 && icaro < 12){
console.log('0 ponto')
}
else if (icaro > 13 && icaro < 17){
console.log('1 ponto')
}
else {
console.log('2 ponto')
}

icaroesamara(10);
function icaroesamara(limite){
for (let i = 0; i <= limite; i++){
if ( i % 2 === 0)
console.log(i,"Par");
else
console.log(i,"Impar");
}
}

const icaro = {
familia : "vivo",
anime : "boku no hero",
animal : "gato",
comida : "lasanha",
sexo : "menino",
desenho : "As aventuras de tintim"
}
exibir(icaro);
function exibir(obj){
for (prop in obj)
if(typeof prop === "string")
console.log(prop,obj[prop])
}

somar(10);
function somar(limite){
let multiplosde3 = 0;
let multiplosde5 = 0;
for(i =0;1 <= limite;i++){
 if ( i % 3 ===0)
 multiplosde3 += i;
 if(i % 5 ==0)
 multiplosde5 += i;
}
console.log(multiplosde3 + multiplosde5);
}

const icaro= [70,70,80];

console.log(mediadoaluno(icaro));

function mediadoaluno(notas){
const media = calcularmedia(notas);
for(let nota of notas);

if (media <59) return "f";
if (media <69) return "d";
if (media <79) return "c";
if (media <89) return "b";
return "A"
}

function calcularmedia(icaro){
let soma = 0
for (let valor of icaro){
soma += valor;
}
return soma/(icaro.length)
}

icaro (100);

function icaro(linhas) {
    let padrao ="";
    for(let linha = 1; linha <= linhas; linha++){
    padrao += '*';
    console.log(padrao);
    }
}

mostrarAsteriscos (200);

function mostrarAsteriscos(linhas) {
        let padrao = "";
        for(let linha = 1; linha <= linhas; linha++) {
                padrao += "*";
                console.log(padrao);
        }
}

icaro (15);

function icaro(limite){
    for (let numero = 2; numero <= limite; numero++){
        let ehprimo = true;
        for (let divisor = 2; divisor < numero; divisor++){
            if(numero % divisor ===0){
                ehprimo = false;
                break;
            }
        }
        if (ehprimo) console.log(numero);
    }
}

let icaro = 'Ana';
let sicaro = 'isabella';
let licaro = 'Carla';
let picaro = 'Maria';
let yicaro = 'Nicoly'
let ticaro = '16'

const samara = {
    icaro : 'Amor',
    tamanho : {
        bonita : 8,
        feia : 10,
    },
    ticaro : 16,
    ligar: function(){
        console.log('O Amor está no ar . . . .')
    }
}
samara.ticaro = 'Icaro';
console.log(samara.ticaro);
samara.ligar();

*/





