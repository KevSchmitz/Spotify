class Cancion {
  constructor(id, nombre, artista, album, imagen, duracion, src) {
    this.id = id;
    this.nombre = nombre;
    this.artista = artista;
    this.album = album;
    this.imagen = imagen;
    this.duracion = duracion;
    this.src = src;
  }
}

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
}

function adelantarCancion() {

  indiceArreglo++;
  indiceArreglo > canciones.length - 1 ? indiceArreglo = 0 : indiceArreglo = indiceArreglo;
  cargarCancion(indiceArreglo);
  reproducirCancion();
}
