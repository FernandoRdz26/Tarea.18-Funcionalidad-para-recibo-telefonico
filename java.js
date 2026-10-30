/*
alert('Esto se llama desde un archivo');

console.log('Nuevamente andamos por aqui');

document.write('<h2>Esto se va a descontrolar</h2>')
*/

/* la variable nombre esta guardando valores: string o cadena */
var nombre = "Fernando García";
/* la variable edad debe de guardar un number */
var edad = 17; //Entero o Integer

var estatura = 1.70; //Decimal o Float

/* la variable mayoriaDeEdad guarda el valor boolean */
var mayoriaDeEdad;

console.log(nombre);
console.log(edad);
console.log(estatura);
console.log(mayoriaDeEdad);

alert(nombre);
nombre = prompt("Escribe el nombre nuevo:");
alert("mi nombre es: " + nombre + ", y mi edad es de: " + edad + "años.");

edad = prompt("Escribe una edad:");
estatura = prompt("Escribe tu estatura:");

if (edad >=18) { 
    mayoriaDeEdad = true;
    alert("Tu eres mayor de edad")
 }

if (nombre == "Pedro") { 
        alert("Hola Pedro, ¿Como estas?");
}

if (estatura < 1.50) {
    alert ("Eres un niño/a")
}