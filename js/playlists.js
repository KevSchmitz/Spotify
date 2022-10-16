const tablaContenedor = document.querySelector('.tabla-contenedor');
let crearListaReproduccion = document.createElement('div')
crearListaReproduccion.id = 'nuevaPlaylist';
tablaContenedor.append(crearListaReproduccion);

let playlists = [
    new Playlist(1, 'Coding Mode', songs),
];

let canciones = [];

// Se traen las canciones por medio de un JSON local
fetch('canciones.json')
    .then(res => res.json())
    .then(json => {
        let html = '';
        playlists.forEach(playlist => {
            json.forEach(cancion => {
                html += `
                <div class="tabla-datos-fila fila${cancion.id}" ondblclick="reproducirSeleccion(${playlist.id}-1, ${cancion.id}-1)">
                <div class="datos-numero" style="text-align: center;">${cancion.id}</div>
                <div class="datos-titulo">
                  <img src="img/${cancion.imagen}.jpg" class="titulo-imagen"></img>
                  <div class="titulo-cancion">
                    <div class="datos-nombre">${cancion.nombre}</div>
                    <div class="datos-artista">${cancion.artista}</div>
                  </div>
                </div>
                <div class="datos-album">${cancion.album}</div>
                <div class="datos-date">${cancion.date}</div>
                <div class="duracion-like">
                  <img src="iconosweb/corazon (1).png" class="datos-like" id="like_${cancion.id}" onclick="agregarFavoritos(event)"></img>
                  <div class="datos-duracion">${cancion.duracion}</div>
                </div>
                </div>
              `
            })
            
        })
        document.querySelector('#nuevaPlaylist').innerHTML = html;
    })
    .catch(error => console.log(error))
// Termina el FETCH.


function guardarPlaylist() {
    const formulario = document.querySelector('#formulario');
    let nuevaPlaylist = new Playlist(
        playlists.length + 1,
        formulario.nombre.value,
        canciones,
    );

    if (formulario.nombre.value !='') {
        playlists.push(nuevaPlaylist);
    
        actualizarPlaylists();
    
        formulario.nombre.value = '';
    
        cerrarModal(playlistModal);
    
        Toastify({
            text: "Se creó lista de reproducción",
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    } else {
        Toastify({
            text: "La playlist necesita un nombre",
            className: "info",
            style: {
                background: "linear-gradient(to right, #C20000, #FF6600)",
            }
        }).showToast();
    }

}

const listaReproduccion = document.querySelector('.lista-reproduccion');


function actualizarPlaylists() {
    listaReproduccion.innerHTML = '';

    playlists.forEach(playlist => {
        const playlistHTML = document.createElement('div');
        playlistHTML.innerHTML = `<a href="#" oncontextmenu="eliminarPlaylist(event)">${playlist.nombre}</a>`;
        listaReproduccion.append(playlistHTML);
    })
}


let tituloPlaylist = document.querySelector('.playlist-titulo');
tituloPlaylist.innerHTML = playlists[0].nombre;

let datosPlaylist = document.querySelector('.playlist-datos');
datosPlaylist.innerHTML = `- 200 likes - ${playlists[0].canciones.length} songs, 1 hr 30 min`;

