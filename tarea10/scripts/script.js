function cargarDatos() {
    // Crear una instancia del objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configurar la solicitud AJAX
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // Configurar la función de devolución de llamada para manejar la respuesta
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Éxito en la solicitud
            var response = JSON.parse(xhr.responseText);
            mostrarDatos(response);
        } else {
            // Error en la solicitud
            console.error('Error al cargar datos:', xhr.status, xhr.statusText);
        }
    };

    // Configurar la función de devolución de llamada para manejar errores de red
    xhr.onerror = function () {
        console.error('Error de red al intentar realizar la solicitud.');
    };

    // Enviar la solicitud
    xhr.send();
}

function mostrarDatos(data) {
    // Mostrar los datos en el elemento con id "content"
    var contentElement = document.getElementById('contenido');
    contentElement.innerHTML = `
        <h2>Datos Cargados:</h2>
        <p>ID: ${data.id}</p>
        <p>Título: ${data.title}</p>
        <p>Completado: ${data.completed ? 'Sí' : 'No'}</p>
    `;
}