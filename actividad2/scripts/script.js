document.addEventListener("DOMContentLoaded", function () {

const contenedorRompecabezas = document.getElementById('contenedor-rompecabezas');
const casillas = [];
let casillaVacia;
let contadorMovimientos = 0;
let intervaloTemporizador;
let segundos = 0;

const contadorMovimientosElemento = document.getElementById('contador-movimientos');
const temporizador = document.getElementById('temporizador');
const botonIniciar = document.getElementById('boton-iniciar');

function crearCasilla(numero) {
    const casilla = document.createElement('div');
    casilla.className = 'casilla';
    casilla.textContent = numero;
    casilla.addEventListener('click', () => moverCasilla(casilla));
    return casilla;
}

function moverCasilla(casilla) {
    if (puedeMoverse(casilla)) {
        contadorMovimientos++;
        contadorMovimientosElemento.textContent = `Movimientos: ${contadorMovimientos}`;

        const xVacia = casillaVacia.dataset.x;
        const yVacia = casillaVacia.dataset.y;

        const xCasilla = casilla.dataset.x;
        const yCasilla = casilla.dataset.y;

        casillaVacia.textContent = casilla.textContent;
        casillaVacia.classList.remove('casilla-vacia');

        casilla.textContent = '';
        casilla.className = 'casilla casilla-vacia';

        casillaVacia = casilla;

        casilla.dataset.x = xVacia;
        casilla.dataset.y = yVacia;
        casillaVacia.dataset.x = xCasilla;
        casillaVacia.dataset.y = yCasilla;
    }

    if (esResuelto()) {
        clearInterval(intervaloTemporizador);
        alert(`¡Felicidades! Resolviste el rompecabezas en ${contadorMovimientos} movimientos y ${segundos} segundos.`);
        botonIniciar.disabled = false;
    }
}

function puedeMoverse(casilla) {
    const xCasilla = parseInt(casilla.dataset.x);
    const yCasilla = parseInt(casilla.dataset.y);
    const xVacia = parseInt(casillaVacia.dataset.x);
    const yVacia = parseInt(casillaVacia.dataset.y);

    return (
        (Math.abs(xCasilla - xVacia) === 1 && yCasilla === yVacia) ||
        (Math.abs(yCasilla - yVacia) === 1 && xCasilla === xVacia)
    );
}

function esResuelto() {
    for (let i = 0; i < casillas.length; i++) {
        if (casillas[i].textContent !== '' && parseInt(casillas[i].textContent) !== i + 1) {
            return false;
        }
    }
    return true;
}

function mezclarCasillas() {
    const numeros = Array.from({ length: 15 }, (_, i) => i + 1);
    for (let i = 0; i < casillas.length; i++) {
        const indiceAleatorio = Math.floor(Math.random() * numeros.length);
        casillas[i].textContent = numeros[indiceAleatorio];
        numeros.splice(indiceAleatorio, 1);
    }
}

function inicializar() {
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            if (y === 3 && x === 3) {
                const casilla = crearCasilla('');
                casilla.dataset.x = x;
                casilla.dataset.y = y;
                casillaVacia = casilla;
                casillas.push(casilla);
                contenedorRompecabezas.appendChild(casilla);
            } else {
                const casilla = crearCasilla('');
                casilla.dataset.x = x;
                casilla.dataset.y = y;
                casillas.push(casilla);
                contenedorRompecabezas.appendChild(casilla);
            }
        }
    }

    mezclarCasillas();
}

function iniciarJuego() {
    inicializar();
    contadorMovimientos = 0;
    contadorMovimientosElemento.textContent = 'Movimientos: 0';
    segundos = 0;
    temporizador.textContent = 'Tiempo: 0 segundos';
    botonIniciar.disabled = true;

    // Iniciar el temporizador
    intervaloTemporizador = setInterval(() => {
        segundos++;
        temporizador.textContent = `Tiempo: ${segundos} segundos`;
    }, 1000);
}

botonIniciar.addEventListener('click', iniciarJuego);

});