/* REPRODUCTOR */

function cargarCancion(playlistIndice, cancionIndice) {
  nombreCancion.textContent = playlists[playlistIndice].canciones[cancionIndice].nombre;
  artistaCancion.textContent = playlists[playlistIndice].canciones[cancionIndice].artista;
  imagenCancion.src = `img/${playlists[playlistIndice].canciones[cancionIndice].imagen}.jpg`;
  audioPrincipal.src = `songs/${playlists[playlistIndice].canciones[cancionIndice].src}.mp3`;
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

function atrasCancion(playlistIndice, cancionIndice) {
  indiceCancion--;
  indiceCancion < 0 ? indiceCancion = songs.length - 1 : indiceCancion = indiceCancion;
  cancionIndice = indiceCancion
  cargarCancion(playlistIndice, cancionIndice);
  reproducirCancion();
}

function adelantarCancion(playlistIndice, cancionIndice) {
  indiceCancion++;
  indiceCancion > songs.length - 1 ? indiceCancion = 0 : indiceCancion = indiceCancion;
  cancionIndice = indiceCancion
  cargarCancion(playlistIndice, cancionIndice);
  reproducirCancion();
}

function reproducirSeleccion(playlistIndice, cancionIndice) {
  indicePlaylist = playlistIndice;
  indiceCancion = cancionIndice;
  cargarCancion(playlistIndice, cancionIndice);
  reproducirCancion();
}

/* MODALS */

// Playlist.

const playlistModal = document.querySelector('.modal-fondo');
const favoritosModal = document.querySelector('.playlist-modal-fondo');

function cerrarModal(modal) {
  modal.classList.add('hidden');
}

function mostrarModal(modal) {
  modal.classList.remove('hidden');
}

function eliminarCancion() {
  const filaFavoritos = event.target.parentNode.parentNode;
  const numeroFila = filaFavoritos.firstElementChild.innerHTML;
 console.dir(numeroFila)

  if (event.target.classList.contains('liked')) {
    favoritos = favoritos.filter(cancion => cancion.id != numeroFila)
    actualizarFavoritos();
    agregarLocalStorage('favoritos', favoritos);
    Toastify({
      text: "Se eliminó de favoritos",
      className: "info",
      style: {
          background: "linear-gradient(to right, #C20000, #FF6600)",
      }
  }).showToast();
  } 
}

/* LOCALSTORAGE */

// Almacenar en localStorage.
function agregarLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Llamar de localStorage.

function traerLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// Cargar Favoritos provenientes del localStorage al cargar la página.
function cargarFavoritos(favoritos) {
  favoritos;
  actualizarFavoritos();
}

function eliminarPlaylist(event) {
  event.preventDefault();
  playlists = playlists.filter(playlist => playlist.nombre != event.target.innerHTML);
  actualizarPlaylists();
}
