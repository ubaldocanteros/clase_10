/* ejercitacion clase 11 */ 

/* Tarea 1 - Agregue una variable mas para concatenar su valor a frasecompleta */ 

let nombre = "Programación " + "Fácil" ;
let saludo =  "Les doy la bienvenida a";
let final = " no se lo pierdan";

let fraseCompleta = saludo + " " + nombre + final; 

console.log(fraseCompleta);

/* Tarea 2 - Probando linea de codigo */ 

let frase = "JavaScript " + "es un lenguaje " + "esencial para crear" + " sitios web poderosos.";
console.log(frase);

/* Tarea 3 - Concatenando numeros con texto */ 

let numeroString1 = "10" + " Messi." + " ";
let numeroString2 = "20" + " Di Maria." + " ";
let numeroString3 = "30" + " Maradona.";
let concatenaNumeros = numeroString1 + numeroString2 + numeroString3;
console.log(concatenaNumeros);

/* Tarea - 4 */

let age = prompt("Cuál es tu edad:?");
console.warn(age);

let name = prompt("Cuál es tu nombre:?");
console.warn(name);


/* Tarea 5 - */

let edad = parseInt(prompt("Introduce tu edad"));
let genero = prompt("Cual es tu genero");



if(genero == "hombre"){
    if(edad>=18){
        alert("Puedes entrar, eres mayor de edad.");
    }else{
        alert("No puedes entrar, eres menor de edad.");
    }  
    
}else{
    if(genero == "mujer"){
    }
    if(edad>=20){
        alert("Puedes entrar, eres mayor de edad.");
    }else{
        alert("No puedes entrar, eres menor de edad.")
    }
}
