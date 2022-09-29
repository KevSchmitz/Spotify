const tablaContenedor = document.querySelector('.tabla-contenedor');
let crearListaReproduccion = document.createElement('div')
crearListaReproduccion.id = 'nuevaPlaylist';
tablaContenedor.append(crearListaReproduccion);
console.dir(crearListaReproduccion);

// Se traen las canciones por medio de un JSON local
fetch('canciones.json')
    .then(res => res.json())
    .then(json => {
        console.log(json);
        let html = '';
        json.forEach(elemento => {
            html += `
            <div class="tabla-datos-fila fila${elemento.id}">
            <div class="datos-numero">${elemento.id}</div>
            <div class="datos-titulo">
              <img src="img/${elemento.imagen}.jpg" class="titulo-imagen"></img>
              <div class="titulo-cancion">
                <div class="datos-nombre">${elemento.nombre}</div>
                <div class="datos-artista">${elemento.artista}</div>
              </div>
            </div>
            <div class="datos-album">${elemento.album}</div>
            <div class="datos-date">${elemento.date}</div>
            <div class="duracion-like">
              <img src="iconosweb/corazon.png" class="datos-like" id="like_${elemento.id}" onclick="agregarFavoritos(event)"></img>
              <div class="datos-duracion">${elemento.duracion}</div>
            </div>
            </div>
          `
        })
        document.querySelector('#nuevaPlaylist').innerHTML = html;
    })
    .catch(error => console.log(error))

let playlists = [new Playlist(1, 'Coding Mode', songs),
new Playlist(2, 'House of Pleasure', crearListaReproduccion)];
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

    Toastify({
        text: "Se creó lista de reproducción",
        className: "info",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();

}

const listaReproduccion = document.querySelector('.lista-reproduccion');


function actualizarPlaylists() {
    listaReproduccion.innerHTML = '';

    playlists.forEach(playlist => {
        const playlistHTML = document.createElement('div');
        playlistHTML.innerHTML = `<a href="#">${playlist.nombre}</a>`;
        listaReproduccion.append(playlistHTML);
        // console.log(playlist);
    })
}


let tituloPlaylist = document.querySelector('.playlist-titulo');
tituloPlaylist.innerHTML = playlists[0].nombre;

let datosPlaylist = document.querySelector('.playlist-datos');
datosPlaylist.innerHTML = `- 200 likes - ${playlists[0].canciones.length} songs, 1 hr 30 min`;
