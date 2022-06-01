let prom;
let nota;
let notaAcum = 0;
let alumnos = parseInt(prompt ("Ingrese la cantidad de alumnos."));

function notasFinales(){
    for (i = 1 ; i <= alumnos ; i++) {
        nota = parseInt(prompt("Ingrese la nota final del alumno"));
        notaAcum += nota
    }
}

notasFinales();

function promedio () {
    prom = notaAcum / alumnos
    let contenedor = document.createElement("div");
    contenedor.innerHTML = "El promedio de nota de los alumnos de la clase es: " + prom
    document.body.appendChild(contenedor);
    
}

promedio ();

if (prom < 4) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = "La mayoría de los alumnos fueron reprobados. Deberíamos revisar el plan de estudios o los métodos de enseñanza";
    document.body.appendChild(contenedor);
} else if (prom > 7) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = "Felicitaciones, la mayoría de los alumnos promocionaron.";
    document.body.appendChild(contenedor);
} else {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = "La mayoría de los alumnos alumnos son regulares para la cursada.";
    document.body.appendChild(contenedor);
}






class Alumno {
    constructor (nombre, apellido, notaP1, notaP2) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.notaP1 = notaP1;
        this.notaP2 = notaP2;
    }

    aprobacionAlumno (nombre, apellido, notaP1, notaP2) {
        if ( ((notaP1 + notaP2) / 2 >= 7)  && (notaP1 && notaP2 >= 4) ) {
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

function ingresarDatosAlumnos(){
    
    for (i=0; i<alumnos; i++) {
    let nombre = prompt("Ingrese el nombre del alumno");
    let apellido = prompt("Ingrese el apellido del alumno");
    let notaP1 = parseInt(prompt("Ingrese la nota del primer parcial"));
    let notaP2 = parseInt(prompt("Ingrese la nota del segundo parcial"));
    
    let alumno1 = new Alumno(nombre, apellido, notaP1, notaP2);
    cursoAlumnos.push(alumno1);

    let contenedor = document.createElement("div");
        contenedor.innerHTML = `<h4 class="reset"> Alumno: ${alumno1.nombre} ${alumno1.apellido} </h4>
                                <ul class="reset"> 
                                    <li> Nota primer parcial: ${alumno1.notaP1} </li>
                                    <li> Nota segundo parcial: ${alumno1.notaP2} </li>
                                    <li> ${alumno1.aprobacionAlumno(nombre, apellido, notaP1, notaP2)} </li>
                                </ul>`;
        document.body.appendChild(contenedor);   
    }
}
ingresarDatosAlumnos();
/*
localStorage.clear();
        const guardarLocal = (key, value) => { localStorage.setItem(key, value)};
        guardarLocal("Alumnos", JSON.stringify(cursoAlumnos.nombre));
*/

let contenedor2 = document.createElement('div');
    contenedor2.innerHTML = `<h4>Los alumnos anotados en este curso que rindieron ambos parciales son: </h4>`
    document.body.appendChild(contenedor2);

localStorage.clear();
localStorage.setItem('Alumno', JSON.stringify(cursoAlumnos));

for (let i in cursoAlumnos) {
    console.log(cursoAlumnos[i].nombre);
}
let alumno;
alumno = JSON.parse(localStorage.getItem('alumno'));

for (let i in cursoAlumnos) {

    let contenedor = document.createElement('div');
    contenedor.innerHTML =  ` <ul>
                                <li> ${cursoAlumnos[i].nombre} ${cursoAlumnos[i].apellido}
                            </ul>       `
    document.body.appendChild(contenedor);
} 

        /*
        for (const alumno of cursoAlumnos) {
            guardarLocal("Alumno:", JSON.stringify(alumno));
            //console.log(alumno)
        }
        */



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

Toastify({
    text: "Un nuevo input ha sido ingresado y creado con éxito!",
    duration: 5000,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    close: true,
    style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
}).showToast();

let contenedor = document.createElement("div");
contenedor.innerHTML = `<h4 class="reset"> Los alumnos anteriores que tomaron este curso fueron: </h4>`
document.body.appendChild(contenedor);  


fetch("https://swapi.dev/api/people/")
    .then ((response) => {  
        return response.json();
    }).then ((alumnos) => {
        
        alumnos.results.forEach ( (alumno) => {
            let lista = document.createElement("ul");
            lista.innerHTML = `<li> ${alumno.name} </li>`;                   
            document.body.appendChild(lista);  
        })
    })
    