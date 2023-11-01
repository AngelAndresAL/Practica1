document.addEventListener("DOMContentLoaded", function () {


const estudiantes = [];
const listaEstudiante = document.getElementById("listaEstudiantes");

function agregarEstudiante() {
    const nuevoEstudiante = new Map(); 
    const nombre = document.getElementById('Nombre').value
    const edad = document.getElementById('Edad').value
    const grado = document.getElementById('Grado').value
    // Solicitar al usuario que ingrese las calificaciones como una lista separada por comas
    const calificacionesInput = document.getElementById('Califaciones').value
    const calificaciones = calificacionesInput.split(',').map(Number);
    // Agregar la información del estudiante al mapa
    nuevoEstudiante.set('nombre', nombre);
    nuevoEstudiante.set('edad', edad);
    nuevoEstudiante.set('grado', grado);
    nuevoEstudiante.set('calificaciones', calificaciones);
    // Agregar el mapa del estudiante al arreglo estudiantes
    estudiantes.push(nuevoEstudiante);
    console.log('Estudiante agregado con éxito.');
}

function mostrarEstudiantes(arreglo) {
    
    const datosFormato = arreglo.map(Estudiante => `Nombre: ${Estudiante.get('nombre')}, Edad: ${Estudiante.get('edad')}, Grado: ${Estudiante.get('grado')}, Calificaciones: ${Estudiante.get('calificaciones').join(', ')}`);
    const valores = datosFormato.join('\n');

    listaEstudiante.value = valores;
}

function calcularPromedio() {
    const nombrePromedio = document.getElementById('nombrePromedio').value;
    let encontrado = false;
    let promedio = 0;

    console.log('Buscando al estudiante:', nombrePromedio);

    for (const estudiantePromedio of estudiantes) {
        const nombreEstudiante = estudiantePromedio.get('nombre'); // Access 'nombre' property using .get()
        console.log('Comparando con el estudiante:', nombreEstudiante);
        
        if (nombreEstudiante === nombrePromedio) { // Compare with the name
            const calificaciones = estudiantePromedio.get('calificaciones'); // Access 'calificaciones' property using .get()
            if (calificaciones.length > 0) {
                const sum = calificaciones.reduce((total, calif) => total + calif, 0);
                promedio = sum / calificaciones.length;
            }
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        document.getElementById('promedioEstudiantes').value = `Promedio para ${nombrePromedio}: ${promedio.toFixed(2)}`;
    } else {
        document.getElementById('promedioEstudiantes').value = 'Estudiante no encontrado';
    }
}

const boton1 = document.getElementById("botonRegistro");
const boton2= document.getElementById("boton2");
const boton3= document.getElementById("boton3");

boton1.onclick = agregarEstudiante;
boton2.onclick = function(){mostrarEstudiantes(estudiantes);};
boton3.onclick = calcularPromedio;

});
