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


// Barra de progreso del tiempo de la canción.
audioPrincipal.addEventListener('timeupdate', (e) => { // A medida que avanza el tiempo actualiza la salida
  const tiempo = barraTiempo.querySelector('.tiempo');
  const barraTiempoActual = e.target.currentTime;
  const duracion = e.target.duration;
  let barraProgreso = (barraTiempoActual / duracion) * 100;
  tiempo.style.width = `${barraProgreso}%`

  // Para cargar el tiempo actual de la canción.
  const tiempoActual = barraTiempo.querySelector('.tiempo-actual');
  let minActual = Math.floor(audioPrincipal.currentTime / 60);
  let secActual = Math.floor(audioPrincipal.currentTime % 60);
  if (secActual < 10) {
    secActual = `0${secActual}`;
  }
  tiempoActual.textContent = `${minActual}:${secActual}`;

  // Para cargar la duración de la canción.
  audioPrincipal.addEventListener('loadeddata', () => {
    const tiempoFaltante = barraTiempo.querySelector('.tiempo-faltante');
    let minDuracion = Math.floor(audioPrincipal.duration / 60);
    let secDuracion = Math.floor(audioPrincipal.duration % 60);
    if (secDuracion < 10) {
      secDuracion = `0${secDuracion}`;
    }
    tiempoFaltante.textContent = `${minDuracion}:${secDuracion}`;
  })
})

// Para reproducir la canción en el tiempo donde se hizo click en la barra de progreso.
barraProgreso.addEventListener('click', (e) => {
  let anchoBarra = barraProgreso.clientWidth; // Para obtener el ancho de la barra
  let offSetXClick = e.offsetX; // Qué zona de la barra estoy tocando
  let duracionCancion = audioPrincipal.duration; // Tiempo total de la canción 
  audioPrincipal.currentTime = (offSetXClick / anchoBarra) * duracionCancion;
})

let indiceArreglo = 0;

window.addEventListener('load', () => {
  cargarCancion(indiceArreglo);
})

botonPlayPause.addEventListener('click', () => {
  const estaPausadoCancion = cancionContenedor.classList.contains('pausado');
  // Si estaPausadoCancion es true activa función pausarCancion, sino activa función reproducirCancion.
  estaPausadoCancion ? pausarCancion() : reproducirCancion();
});

// Para ir hacia la canción anterior.
botonAtras.addEventListener('click', () => {
  atrasCancion()
});

// Para adelantar la canción.
botonSiguiente.addEventListener('click', () => {
  adelantarCancion();
});

// Para poner modo repetir canción.
const botonRepetir = document.querySelector('#repetir');
let tomarTexto = botonRepetir.textContent; // Tomar el texto del icono.
tomarTexto = botonRepetir.textContent = 'repetir'; // Colocando el texto repetir.
console.log(tomarTexto);
botonRepetir.addEventListener('click', () => {
  switch (tomarTexto) {
    case 'repetir': // Si el texto del icono es repetir cambiar a repetir_una
      tomarTexto = 'repetir_una'; // Si el texto es repetir_una
      botonRepetir.src = 'iconosweb/reproductor/repita-una-vez.png';
      document.querySelector('.control-icons:nth-child(5)').classList.add('opacidad');
      console.log(tomarTexto);
      break;
    case 'repetir_una': // Si el texto del icono es repetir_una cambiar a repetir.
      tomarTexto = 'repetir'; // Si el texto es repetir_una
      botonRepetir.src = 'iconosweb/reproductor/repetir.png';
      document.querySelector('.control-icons:nth-child(5)').classList.remove('opacidad');
      console.log(tomarTexto);
      break;
  }
})


audioPrincipal.addEventListener('ended', () => {
  switch (tomarTexto) {
    case 'repetir':
      adelantarCancion(); // Para saltar la canción cuando termina.

      break;
    case 'repetir_una':
      audioPrincipal.duration = 0;
      cargarCancion(indiceArreglo);
      reproducirCancion();
      break;
  }
})


// Para poner modo aleatorio.
const botonAleatorio = document.querySelector('.control-icons:nth-child(1)');
let tomarTexto2 = document.querySelector('#shuffle').textContent = 'apagado';

botonAleatorio.addEventListener('click', () => {
  switch (tomarTexto2) {
    case 'apagado':
      botonAleatorio.classList.add('opacidad');
      tomarTexto2 = document.querySelector('#shuffle').textContent = 'encendido';
      console.log('Cambiando a encendido');
      break;

    case 'encendido':
      botonAleatorio.classList.remove('opacidad');
      tomarTexto2 = document.querySelector('#shuffle').textContent = 'apagado';
      break;
  }
})

audioPrincipal.addEventListener('ended', () => {
  if (tomarTexto2 == 'encendido') {
    console.log('está encendido el shuffle');
    let indiceShuffle = Math.floor(Math.random() * canciones.length);
    cargarCancion(indiceShuffle);
    reproducirCancion();
  }
})


// Volumen
const barraVolumen = document.querySelector('.vol-barra-progreso');
const volumenActual = barraVolumen.querySelector('.volumen-actual');

barraVolumen.addEventListener('mousedown', (e) => {
  let offSetXClick = e.offsetX; // Determina el ancho del volumen actual según donde se de el click.
  const anchoBarraVolumen = barraVolumen.clientWidth; // Determina el ancho total del volumen.
  audioPrincipal.volume = offSetXClick / anchoBarraVolumen;
  let barraVolumenActual = (offSetXClick / anchoBarraVolumen) * 100;
  volumenActual.style.width = `${barraVolumenActual}%`;
})

// Inyectando canciones a playlist.
const tablaContenedor = document.querySelector('.tabla-contenedor');

for (let i = 0; i < playlists.length; i++) {

  let fila = document.createElement('div');
  fila.classList.add('tabla-datos-fila');
  tablaContenedor.append(fila);

  let numero = document.createElement('div');
  numero.classList.add('datos-numero');
  numero.textContent = playlists[i].numero;
  fila.append(numero);

  let titulo = document.createElement('div');
  titulo.classList.add('datos-titulo');
  fila.append(titulo);

  let imagenTitulo = document.createElement('img');
  imagenTitulo.classList.add('titulo-imagen');
  titulo.append(imagenTitulo);
  imagenTitulo.src = `img/${playlists[i].imagen}.jpg`

  let cancionTitulo = document.createElement('div');
  cancionTitulo.classList.add('titulo-cancion');
  titulo.append(cancionTitulo);

  let nombreTitulo = document.createElement('div');
  nombreTitulo.classList.add('titulo-nombre');
  cancionTitulo.append(nombreTitulo);
  nombreTitulo.textContent = playlists[i].nombre;

  let artistaTitulo = document.createElement('div');
  artistaTitulo.classList.add('titulo-artista');
  cancionTitulo.append(artistaTitulo);
  artistaTitulo.textContent = playlists[i].artista;

  let album = document.createElement('div');
  album.classList.add('datos-album');
  album.textContent = playlists[i].album;
  fila.append(album);

  let date = document.createElement('div');
  date.classList.add('datos-date');
  date.textContent = playlists[i].date;
  fila.append(date);

  let duracion = document.createElement('div');
  duracion.classList.add('datos-duracion');
  duracion.textContent = playlists[i].duracion;
  fila.append(duracion);
}







