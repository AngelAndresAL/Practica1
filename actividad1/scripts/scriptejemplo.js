const estudiantes = []; // Arreglo para almacenar la información de los estudiantes
function agregarEstudiante() {
    const nuevoEstudiante = new Map(); // Crear un nuevo mapa para el estudiante
    // Solicitar al usuario que ingrese la información del estudiante
    const nombre = prompt("Ingrese el nombre del estudiante:");
    const edad = parseInt(prompt("Ingrese la edad del estudiante:"));
    const grado = prompt("Ingrese el grado del estudiante:");
    // Solicitar al usuario que ingrese las calificaciones como una lista separada por comas
    const calificacionesInput = prompt("Ingrese las calificaciones del estudiante (separadas por comas):");
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
// Ejemplo de uso:
agregarEstudiante(); // Llama a la función para agregar un estudiante
console.log(estudiantes); // Muestra el arreglo de estudiantes