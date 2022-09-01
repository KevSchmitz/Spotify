const cancionContenedor = document.querySelector('.cancion-contenedor');
const nombreCancion = cancionContenedor.querySelector('.cancion-nombre a');
const artistaCancion = cancionContenedor.querySelector('.cancion-artista a');
const imagenCancion = cancionContenedor.querySelector('.cancion-album img');
const audioPrincipal = cancionContenedor.querySelector('#audio-principal');

const reproductor = document.querySelector('.reproductor');
const botonPlayPause = reproductor.querySelector('.play-pause img');
const botonAtras = reproductor.querySelector('#atras');
const botonSiguiente = reproductor.querySelector('#siguiente');

const barraTiempo = document.querySelector('.barra-tiempo');
const barraProgreso = document.querySelector('.barra-progreso');


// Progreso de del tiempo de la canción

audioPrincipal.addEventListener('timeupdate', (e) => { // A medida que avanza el tiempo actualiza la salida
  const tiempo = barraTiempo.querySelector('.tiempo');
  const barraTiempoActual = e.target.currentTime;
  const duracion = e.target.duration;
  let barraProgreso = (barraTiempoActual / duracion) * 100;
  tiempo.style.width = `${barraProgreso}%`

  const tiempoActual = barraTiempo.querySelector('.tiempo-actual');
  let minActual = Math.floor(audioPrincipal.currentTime / 60);
  let secActual = Math.floor(audioPrincipal.currentTime % 60);

  if (secActual < 10) {
    secActual = `0${secActual}`;
  }
  tiempoActual.textContent = `${minActual}:${secActual}`;

  audioPrincipal.addEventListener('loadeddata', () => { // Carga los datos primero para poder leerlos evita el NAN:NAN
    const tiempoFaltante = barraTiempo.querySelector('.tiempo-faltante');
    let minDuracion = Math.floor(audioPrincipal.duration / 60);
    let secDuracion = Math.floor(audioPrincipal.duration % 60);
    if (secDuracion < 10) {
      secDuracion = `0${secDuracion}`;
    }
    tiempoFaltante.textContent = `${minDuracion}:${secDuracion}`;
  })

})

barraProgreso.addEventListener('click', (e) => {
  console.log(e);
  let anchoBarra = barraProgreso.clientWidth; // Para obtener el ancho de la barra
  console.log(anchoBarra);
  let offSetXClick = e.offsetX; // Qué zona de la barra estoy tocando
  console.log(offSetXClick);
  let duracionCancion = audioPrincipal.duration;
  console.log(duracionCancion);
  audioPrincipal.currentTime = (offSetXClick / anchoBarra) * duracionCancion;
})

let indiceArreglo = 1;

window.addEventListener('load', () => {
  cargarCancion(indiceArreglo);
})

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