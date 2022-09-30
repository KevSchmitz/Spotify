// CLASES

class Song {
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

class Cancion {
  constructor(id, imagen, nombre, artista, album, date, duracion) {
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.artista = artista;
    this.album = album;
    this.date = date;
    this.duracion = duracion;
  }
}

class Playlist {
  constructor(id, nombre, canciones) {
    this.id = id;
    this.nombre = nombre;
    this.canciones = canciones;
  }
}

//FUNCIONES REPRODUCTOR

function cargarCancion(numeroIndice) {
  nombreCancion.textContent = songs[`${numeroIndice}`].nombre;
  artistaCancion.textContent = songs[`${numeroIndice}`].artista;
  imagenCancion.src = `img/${songs[numeroIndice].imagen}.jpg`;
  audioPrincipal.src = `songs/${songs[numeroIndice].src}.mp3`;
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
  indiceArreglo < 0 ? indiceArreglo = songs.length - 1 : indiceArreglo = indiceArreglo;
  cargarCancion(indiceArreglo);
  reproducirCancion();
}

function adelantarCancion() {
  indiceArreglo++;
  indiceArreglo > songs.length - 1 ? indiceArreglo = 0 : indiceArreglo = indiceArreglo;
  cargarCancion(indiceArreglo);
  reproducirCancion();
}

function reproducirSeleccion(indiceArreglo) {
  cargarCancion(indiceArreglo);
  reproducirCancion();
}

//PLAYLISTS

const modal = document.querySelector('.modal-fondo');

function cerrarModal() {
  modal.classList.add('hidden');
}

function mostrarModal() {
  modal.classList.remove('hidden');
}

//FAVORITOS

const favoritosModal = document.querySelector('.playlist-modal-fondo');

function cerrarModalFavorito() {
  favoritosModal.classList.add('hidden');
}
function mostrarModalFavorito() {
  favoritosModal.classList.remove('hidden');
}