let playlists = [new Playlist(1, 'Coding Mode', songs)];
let canciones = [];

function guardarPlaylist() {
    const formulario = document.querySelector('#formulario');
    const nuevaPlaylist = new Playlist(
        playlists.length + 1,
        formulario.nombre.value,
        canciones,
    );

    playlists.push(nuevaPlaylist);

    actualizarPlaylists();

    console.log(playlists);

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
        console.log(playlist);
    })
}


let tituloPlaylist = document.querySelector('.playlist-titulo');
tituloPlaylist.innerHTML = playlists[0].nombre;

let datosPlaylist = document.querySelector('.playlist-datos');
datosPlaylist.innerHTML = `- 200 likes - ${playlists[0].canciones.length} songs, 1 hr 30 min`;
