function createImage(src){
    const image = document.createElement('img'); /*lo que se hace es que se va creando el documento de las imagenes*/
    image.src = src; /*crea la ruta de la imagen*/
    return image; /*regresa la imagen con la ruta*/
}

function onThumbnailclick(event){
    const image = createImage(event.currentTarget.src);
    document.body.classList.add('no-scroll');
    modalView.computedStyleMap.top = window.pageXOffset + 'px';
    modalView.appendChild(image);
    modalView.classList.remove('hidden');
}

function onModalClick(){
    document.body.classList.remove('no-scroll');
    modalView.classList.add('hidden');
    modalView.innerHTML='';
}

const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);

const albumView = document.querySelector('#album-view');
for (let i = 0; i < PHOTO_LIST.length; i++) { /*Itera en el numero de imageenes en el PHOTOLIST DE foto-lista.js*/
    const photoSrc = PHOTO_LIST[i]; 
    const image = createImage(photoSrc); /*Crea una imagen para poder ingresarle ahí una imagen*/ 
    image.addEventListener('click', onThumbnailclick); /*Se agrega un listener que responde a un clic del usuario */
    albumView.appendChild(image); /*se agrega el elemento de html al album view*/
}