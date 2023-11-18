const element = document.querySelector('img');
element.src = "img/gift-icon.png";

function abrirRegalo() {
    const image = event.currentTarget;
    image.src = "img/giphy.gif";
    image.removeEventListener('click', abrirRegalo);
}
const image = document.querySelector('img');
image.addEventListener('click', abrirRegalo);