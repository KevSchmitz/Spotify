let favoritos = [];

function agregarFavoritos(event) {
    const nuevaCancion = new Cancion(favoritos.length + 1,
        event.path[2].children[1].children[0].attributes.src.value,
        event.path[2].children[1].children[1].children[0].innerHTML,
        event.path[2].children[1].children[1].children[1].innerHTML,
        event.path[2].childNodes[4].innerHTML,
        event.path[2].children[3].innerHTML,
        event.path[2].children[4].children[1].innerHTML);


    favoritos.push(nuevaCancion);

    favoritosStorage();

    actualizarFavoritos();

    Toastify({
        text: "Se agregó a favoritos",
        className: "info",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
}

function actualizarFavoritos() {

    let html = '';
    favoritos.forEach(cancion => {
        html += `
            <div class="tabla-datos-fila fila-favoritos${cancion.id} ondblclick="cargarCancion(${cancion.id}-1)">
                <div class="datos-numero">${cancion.id}</div>
                <div class="datos-titulo">
                    <img src="${cancion.imagen}" class="titulo-imagen"></img>
                    <div class="titulo-cancion">
                        <div class="datos-nombre">${cancion.nombre}</div>
                        <div class="datos-artista">${cancion.artista}</div>
                    </div>
                </div>
                <div class="datos-album">${cancion.album}</div>
                <div class="datos-date">${cancion.date}</div>
                <div class="duracion-like">
                    <img src="iconosweb/corazon.png" class="datos-like" id="like_${cancion.id}" onclick="agregarFavoritos(event)"></img>
                    <div class="datos-duracion">${cancion.duracion}</div>
                </div>
            </div>`;

    })
    document.querySelector('.playlist-favoritos').innerHTML = html;
}

// ALMACENAR FAVORITOS EN STORAGE
function favoritosStorage() {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

// REPRODUCIR SELECCION
