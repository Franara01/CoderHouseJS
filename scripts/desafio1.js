let numero = parseInt(prompt("Ingrese un número"));

if (numero > 10) {
    console.log ("El número es demasiado grande");
} else {
    for (i = 0; i< numero; i++ ) {
        console.log ("Hola");
    }
}

// En este algoritmo, primero se pide que el usuario ingrese un número. Si el número es mayor a 10, la máquina devuelve que el número es demasiado grande, y si es menor a 10, la máquina devuelve tantos "Hola" como el usuario haya puesto en el prompt que se le pidió 