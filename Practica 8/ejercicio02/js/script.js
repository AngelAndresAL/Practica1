var generosLista = {
    1: 'Barroco',
    2: 'Manierismo',
    3: 'Neo-Clasicismo',
    4: 'Realismo',
    5: 'Romanticismo'
};


function filtroTabla() {
    var selectedGenre = document.getElementById('filtro').value;
    var tablaObras = document.getElementById('tablaObras');
    var filas = tablaObras.getElementsByTagName('tr');

    for (var i = 1; i < filas.length; i++) {
        var celdaGenero = filas[i].getElementsByTagName('td')[5];
        var genero = celdaGenero.textContent || celdaGenero.innerText;

        var selectedGenreValue = parseInt(selectedGenre, 10);

        if (selectedGenre === '0' || generosLista[selectedGenreValue] === genero) {
            filas[i].style.display = '';
        } else {
            filas[i].style.display = 'none';
        }
    }
    return false;
}

var imagenesMiniatura = document.querySelectorAll('.miniatura');

imagenesMiniatura.forEach(function (imagen) {
    imagen.addEventListener('mouseover', function () {
        var imagenGrande = document.createElement('img');

        imagenGrande.src = imagen.src;
        imagenGrande.alt = imagen.alt;
        imagenGrande.classList.add('imagenGrande');

        var rect = imagen.getBoundingClientRect();

        imagenGrande.style.position = 'absolute';
        imagenGrande.style.top = rect.top - 25 + 'px';
        imagenGrande.style.left = rect.right + 10 + 'px';
        document.body.appendChild(imagenGrande);
    });

    imagen.addEventListener('mouseout', function () {
        document.body.removeChild(document.querySelector('.imagenGrande'));
    });
});

function mostrarModal(botonEditar) {

    var modal = document.getElementById('modal');
    modal.style.display = 'grid';

    var modal = document.getElementById('modal');
    var modalImagen = document.getElementById('modal-imagen');
    var modalTitulo = document.getElementById('modal-titulo');
    var modalArtista = document.getElementById('modal-artista');
    var modalAno = document.getElementById('modal-ano');
    var modalGenero = document.getElementById('modal-genero');

    var fila = botonEditar.closest('tr');
    var imagenSrc = fila.querySelector('img').src;
    var titulo = fila.querySelector('em').textContent;
    var artista = fila.querySelectorAll('td')[3].textContent;
    var ano = fila.querySelectorAll('td')[4].textContent;
    var genero = fila.querySelectorAll('td')[5].textContent;

    modal.style.display = 'block';
    modalImagen.src = imagenSrc;
    modalTitulo.value = titulo;
    modalArtista.value = artista;
    modalAno.value = ano;
    modalGenero.value = genero;

    var fila = botonEditar.closest('tr');
    fila.classList.add('fila-seleccionada');
}

function cerrarModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}