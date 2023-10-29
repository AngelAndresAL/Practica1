const entradaTarea = document.getElementById("tarea");
const botonTarea = document.getElementById("agregarTarea");
const botonETarea = document.createElement("button");
const listaTarea = document.getElementById("listaTareas");

botonETarea.textContent = "Eliminar";

function agregarElemento() {
    const textoTarea = entradaTarea.value;
    if (textoTarea.trim() != "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = textoTarea;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function() {
            listaTarea.removeChild(nuevaTarea);
        });

        nuevaTarea.appendChild(botonEliminar);

        nuevaTarea.addEventListener("click", function() {
            nuevaTarea.classList.toggle("completada");
        });

        listaTarea.appendChild(nuevaTarea);
        entradaTarea.value = ""; // Limpiar el campo de entrada
    }
}

botonTarea.addEventListener("click", agregarElemento);