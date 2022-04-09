// El proyecto va a ser un carrito de compras de un emprendimiento

let buzos = 100
let remeras = 50 
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

/* Por qué no puedo meter todas las variables dentro de la función? Si meto totalBuzos, totalRemeras, totalPantalones y precioFinal en la función, el resultado es undefined. */

if (precioFinal > 1000) {
    precioFinal = precioFinal / 100 * 95;
    alert ("Felicitaciones! Tenés un descuento del 5% por superar la compra de $1000! El precio final de tu compra es de $" + precioFinal);
} else {
    alert("El precio final es: $" + precioFinal);
}

//En este caso, no uso ningún algoritmo de ciclo o iteración porque eso induciría a un loop infinito, ya que ninguna condición del programa va a cambiar. Utilizar forzadamente un algoritmo de ciclo o de iteración sería desperdiciar código y no seguir el patron KISS. Sin embargo, dejo un algoritmo de iteración de prueba: 
/*Ejemplo: 
for (i = 1; i < 10 ; i++) {
    if (i % 2 == 0) {
        console.log ("Este número es par")
    } else {
        console.log(i);
        }    
    }
    

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