const cancionContenedor = document.querySelector('.cancion-contenedor');
const nombreCancion = cancionContenedor.querySelector('.cancion-nombre a');
const artistaCancion = cancionContenedor.querySelector('.cancion-artista a');
const imagenCancion = cancionContenedor.querySelector('.cancion-album img');
const audioPrincipal = cancionContenedor.querySelector('#audio-principal');

const reproductor = document.querySelector('reproductor');
const botonPlayPause = document.querySelector('.play-pause img');
const botonAtras = document.querySelector('#atras');
const botonSiguiente = document.querySelector('#siguiente');


let indiceArreglo = 1;

window.addEventListener('load', () => {
  cargarCancion(indiceArreglo);
})

function cargarCancion(numeroIndice) {
  nombreCancion.textContent = canciones[`${numeroIndice}`].nombre;
  artistaCancion.textContent = canciones[`${numeroIndice}`].artista;
  imagenCancion.src = `img/${canciones[numeroIndice].imagen}.jpg`;
  audioPrincipal.src = `songs/${canciones[numeroIndice].src}.mp3`;
}

function reproducirCancion() {
  cancionContenedor.classList.add('pausado');
  botonPlayPause.src = 'iconosweb/reproductor/pausa.png'
  audioPrincipal.play();
}
function pausarCancion() {
  cancionContenedor.classList.remove('pausado');
  botonPlayPause.src = 'iconosweb/reproductor/jugar.png'
  audioPrincipal.pause();
}
function atrasCancion() {

  indiceArreglo--;
  indiceArreglo < 0 ? indiceArreglo = canciones.length - 1 : indiceArreglo = indiceArreglo;
  cargarCancion(indiceArreglo);
  reproducirCancion();
  console.log(indiceArreglo);

}
function adelantarCancion() {

  indiceArreglo++;
  indiceArreglo > canciones.length - 1 ? indiceArreglo = 0 : indiceArreglo = indiceArreglo;
  cargarCancion(indiceArreglo);
  reproducirCancion();
  console.log(indiceArreglo);
}


botonPlayPause.addEventListener('click', () => {
  const estaPausadoCancion = cancionContenedor.classList.contains('pausado');
  // Si estaPausadoCancion es true activa función pausarCancion, sino activa función reproducirCancion.
  estaPausadoCancion ? pausarCancion() : reproducirCancion();
});

botonAtras.addEventListener('click', () => {
  atrasCancion()
});
botonSiguiente.addEventListener('click', () => {
  adelantarCancion();
});


console.log(cancionContenedor);
console.log(nombreCancion);
console.log(artistaCancion);
console.log(imagenCancion);
console.log(audioPrincipal);
console.log(botonPlayPause);
console.log(botonAtras);
console.log(botonSiguiente);
console.log(canciones.length);
console.log(indiceArreglo);


