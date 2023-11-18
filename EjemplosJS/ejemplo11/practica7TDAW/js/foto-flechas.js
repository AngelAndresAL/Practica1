function createImage(src){
    const image = document.createElement('img');
    image.src = src;
    return image;
}

function onThumbnailclick(event){
    const image = createImage(event.currentTarget.src);
    currentImageIndex = PHOTO_LIST.indexOf(event.currentTarget.src);
    document.body.classList.add('no-scroll');
    modalView.style.top = window.pageYOffset + 'px';
    modalView.appendChild(image);
    modalView.classList.remove('hidden');

    // Agrega la escucha de eventos de teclado para navegar entre las imágenes
    window.addEventListener('keydown', onKeyDown);
}   

function onModalClick(){
    document.body.classList.remove('no-scroll');
    modalView.classList.add('hidden');
    modalView.innerHTML = '';

    // Elimina la escucha de eventos de teclado al cerrar el modal
    window.removeEventListener('keydown', onKeyDown);
}

function onKeyDown(event) {
    // Verifica si la tecla presionada es la flecha izquierda
    if (event.key === 'ArrowLeft') {
        showPreviousImage();
    }
    // Verifica si la tecla presionada es la flecha derecha
    else if (event.key === 'ArrowRight') {
        showNextImage();
    }
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + PHOTO_LIST.length) % PHOTO_LIST.length;
    updateModalImage();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % PHOTO_LIST.length;
    updateModalImage();
}

function updateModalImage() {
    const newImage = createImage(PHOTO_LIST[currentImageIndex]);
    modalView.innerHTML = '';
    modalView.appendChild(newImage);
}

const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);

const albumView = document.querySelector('#album-view');
let currentImageIndex = 0;

for (let i = 0; i < PHOTO_LIST.length; i++) {
    const photoSrc = PHOTO_LIST[i];
    const image = createImage(photoSrc);
    image.addEventListener('click', onThumbnailclick);
    albumView.appendChild(image);
}
