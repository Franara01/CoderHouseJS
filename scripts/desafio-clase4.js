//El simulador está calculando el promedio de notas de los alumnos de una clase. 

let prom;
let nota;
let notaAcum = 0;
let alumnos = parseInt(prompt ("Ingrese la cantidad de alumnos."));


for (i = 1 ; i <= alumnos ; i++) {
    nota = parseInt(prompt("Ingrese la nota final del alumno"));
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

class Alumno {
    constructor (nombre, apellido, notaP1, notaP2) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.notaP1 = notaP1;
        this.notaP2 = notaP2;
    }

    promedio(notaP1, notaP2) {
        return "El promedio del alumno es: " + (notaP1 + notaP2) / 2;
    }

    nombreYApellido (nombre, apellido) {
        return "El alumno se llama " + nombre + " " + apellido;
    }

    aprobacionAlumno (nombre, apellido, notaP1, notaP2) {
        if ( ((notaP1 + notaP2) / 2 > 7)  && (notaP1 && notaP2 >= 4) ) {
            return "El alumno " + nombre + " " + apellido + " está promocionado";
        } 
        else if 
        ( ((notaP1 + notaP2) / 2 < 7 )  && (notaP1 >= 4 && notaP2 >= 4) ) {
            return "El alumno " + nombre + " " + apellido + " va a final";
        }
        else if 
        ((notaP1 >= 4 && notaP2 < 4) || (notaP1 < 4 && notaP2 >= 4)){
            return "El alumno " + nombre + " " + apellido + " va a recuperatorio";
        } else if
        (notaP1 < 4 && notaP2 < 4) {
            return "El alumno " + nombre + " " + apellido + " recursa";
        }
    }
}

let cursoAlumnos = []

for (i=0; i<alumnos; i++) {
let nombre = prompt("Ingrese el nombre del alumno");
let apellido = prompt("Ingrese el apellido del alumno");
let notaP1 = parseInt(prompt("Ingrese la nota del primer parcial"));
let notaP2 = parseInt(prompt("Ingrese la nota del segundo parcial"));

let alumno1 = new Alumno(nombre, apellido, notaP1, notaP2);
cursoAlumnos.push(alumno1);

let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Nombre: ${alumno1.nombre} ${alumno1.apellido} </h3>
                            <ul> 
                                <li> Nota primer parcial: ${alumno1.notaP1} </li>
                                <li> Nota segundo parcial: ${alumno1.notaP2} </li>
                                <li> ${alumno1.aprobacionAlumno(nombre, apellido, notaP1, notaP2)} </li>
                            </ul>`;
    document.body.appendChild(contenedor);

}

//console.log(alumno1.nombre);
//console.log(alumno1.promedio(notaP1, notaP2));
//console.log(alumno1.nombreYApellido(nombre, apellido));
//console.log(alumno1.aprobacionAlumno(nombre, apellido, notaP1, notaP2));

console.log(cursoAlumnos);
//console.log(cursoAlumnos[0]);


for (i = 0; i < cursoAlumnos.length; i++) {
    console.log(cursoAlumnos[i]);
}

/* ES LO MISMO
for (const alumno of cursoAlumnos) {
    console.log(alumno.promedio); // Ejecuta el promedio de cada alumno
} */

const buscarAlumno = cursoAlumnos.find((alumno) => alumno.nombre === "Francisco" && alumno.apellido === "Ara"); // Método de búsqueda: busca un alumno por nombre y apellido.
console.log(buscarAlumno);

const promocionados = cursoAlumnos.filter ((alumno) => alumno.notaP1 >= 7 && alumno.notaP2 >=7); // Método de filtrado: crea un nuevo array con los alumnos promocionados
console.log(promocionados);

