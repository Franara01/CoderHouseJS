// El proyecto va a ser un carrito de compras de un emprendimiento
/*
let buzos = 100
let remeras = 55 
let pantalones = 200

let cantidadBuzos = parseInt (prompt("Ingrese la cantidad de buzos que desea comprar"));
let cantidadRemeras = parseInt (prompt("Ingrese la cantidad de remeras que desea"));
let cantidadPantalones = parseInt(prompt("Ingrese la cantidad de pantalones que desea"));

let totalBuzos = buzos * cantidadBuzos;
let totalRemeras = remeras * cantidadRemeras;    
let totalPantalones = pantalones * cantidadPantalones;
let precioFinal = totalBuzos + totalRemeras + totalPantalones;

function calcularPrecio () {
    precioFinal;    
}
*/
/* Por qué no puedo meter todas las variables dentro de la función? Si meto totalBuzos, totalRemeras, totalPantalones y precioFinal en la función, el resultado es undefined. 

if (precioFinal > 1000) {
    precioFinal = precioFinal / 100 * 95;
    alert ("Felicitaciones! Tenés un descuento del 5% por superar la compra de $1000! El precio final de tu compra es de $" + precioFinal);
} else {
    alert("El precio final es: $" + precioFinal);
}
*/

// En este bucle for se simula un 'sorteo' dependiendo del valor final de la compra. Si el valor es un número par, el usuario se gana una remera.
/*
for (i = 1; i < 10 ; i++) {
    if (i % 2 == 0) {
        alert("Felicitaciones! Te ganaste una remera de regalo en concepto de sorteo!")
        break;
    }
    }
*/
/*
while (cantidadBuzos > 10 && < 15 ) {
    do alert("Además, por haber comprado 10 o más prendas de un mismo producto, obtenés un beneficio de mayorista. 5% más sobre el descuento anterior!");
    precioFinal = precioFinal / 100 / 95
}
*/

//Este algoritmo imprime el valor de i, que comienza en 1 y aumenta de a 1 en 1 hasta llegar a 10. En caso de los valores pares, la consola imprime "este número es par"*/


/*
switch (cantidadBuzos || cantidadPantalones || cantidadRemeras) {
    case 10 || 11 || 12 || 13 || 14:
        alert("Además, por haber comprado 10 o más prendas de un mismo producto, obtenés un beneficio de mayorista: 5% más sobre el descuento anterior!");
        precioFinal = precioFinal / 100 * 95;
        break;
    
        case 15 || 16 || 17 || 18 || 19: {
            alert("Además, por haber comprado 15 o más prendas de un mismo producto, obtenés un beneficio de mayorista: 10% más sobre el descuento anterior!");
        precioFinal = precioFinal / 100 * 90;
        break;
        }
}
Por qué no funciona esto? 
*/


let prom;
let nota;
let notaAcum = 0;
let alumnos = parseInt(prompt ("Ingrese la cantidad de alumnos."));
/*
let nota1 = parseInt(prompt ("Ingrese la nota del alumno 1"));
let nota2 = parseInt(prompt ("Ingrese la nota del alumno 2"));
let nota3 = parseInt(prompt ("Ingrese la nota del alumno 3"));
let nota4 = parseInt(prompt ("Ingrese la nota del alumno 4"));
let nota5 = parseInt(prompt ("Ingrese la nota del alumno 5"));
let nota6 = parseInt(prompt ("Ingrese la nota del alumno 6"));
let nota7 = parseInt(prompt ("Ingrese la nota del alumno 7"));
let nota8 = parseInt(prompt ("Ingrese la nota del alumno 8"));
let nota9 = parseInt(prompt ("Ingrese la nota del alumno 9"));
let nota10 = parseInt(prompt ("Ingrese la nota del alumno 10"));
*/

for (i = 1 ; i <= alumnos ; i++) {
    nota = parseInt(prompt("Ingrese la nota del alumno"));
    notaAcum = notaAcum + nota
}


function promedio () {
    prom = notaAcum / alumnos
    alert ("El promedio de nota de los alumnos de la clase es: " + prom);
}

promedio ();

if (prom < 4) {
    alert ("La mayoría de los alumnos fueron reprobados. Deberíamos revisar el plan de estudios o los métodos de enseñanza");
} else if (prom > 7) {
    alert ("Felicitaciones, la mayoría de los alumnos promocionaron.")
} else {
    alert ("La mayoría de los alumnos alumnos son regulares para la cursada.")
}