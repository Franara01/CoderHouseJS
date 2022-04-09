/////////// DESAFÍO 1 ////////////////////

let numero = parseInt(prompt("Ingrese un número"));

if (numero > 10) {
    console.log ("El número es demasiado grande");
} else {
    for (i = 0; i< numero; i++ ) {
        console.log ("Hola");
    }
}

// En este algoritmo, primero se pide que el usuario ingrese un número. Si el número es mayor a 10, la máquina devuelve que el número es demasiado grande, y si es menor a 10, la máquina devuelve tantos "Hola" como el usuario haya puesto en el prompt que se le pidió 


/* Hacer que el usuario ingrese dos números y se multipliquen mediante sumas sucesivas */
let numero1 = parseInt (prompt("Ingrese un número"));
let numero2 = parseInt (prompt("Ingrese otro número"));
let resultado = 0;

while (numero1 > 0) {
    resultado += numero2;
    numero1 = numero1 - 1 ;
}

alert(resultado);