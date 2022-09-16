let playlists = [new Playlist('Coding Mode', songs)];

function guardarPlaylist() {
    const formulario = document.querySelector('#formulario');
    let canciones = [];
    const nuevaPlaylist = new Playlist(
        formulario.nombre.value,
        canciones,
    );
    playlists.push(nuevaPlaylist);
    console.log(playlists);
    actualizarPlaylists();
    formulario.nombre.value = '';
    cerrarModal();
}

const listaReproduccion = document.querySelector('.lista-reproduccion');

function actualizarPlaylists() {
    listaReproduccion.innerHTML = '';
    playlists.forEach(playlist => {
        const playlistHTML = document.createElement('div');
        playlistHTML.innerHTML = `<a href="#">${playlist.nombre}</a>`;
        listaReproduccion.append(playlistHTML);
    })
}

let tituloPlaylist = document.querySelector('.playlist-titulo');
tituloPlaylist.innerHTML = playlists[0].nombre;

let datosPlaylist = document.querySelector('.playlist-datos');
datosPlaylist.innerHTML = `- 200 likes - ${playlists[0].canciones.length} songs, 1 hr 30 min`;
