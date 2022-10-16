let favoritos = JSON.parse(localStorage.getItem('favoritos')) || []; // Trae los datos desde el LocalStorage y si no existe crea un ARRAY vacío
const botonCerrar = document.querySelector('.boton-cerrar'); // Botón para cerrar Modal Favoritos.
window.addEventListener('load', (event) => {
    cargarFavoritos(favoritos);
});

function agregarFavoritos(event) {
    const filaCancion = event.target.parentNode.parentNode;
    const nombreCancion = filaCancion.children[1].children[1].children[0].innerHTML;
    const isLiked = filaCancion.classList.contains('liked'); 
    
    if (!isLiked) {
 
        filaCancion.classList.add('liked');
        event.target.attributes.src.value = 'iconosweb/corazon.png';

        const nuevaCancion = new Cancion(
            favoritos.length + 1, // ID Cancion
            event.path[2].children[1].children[0].attributes.src.value, //Imagen Cancion
            event.path[2].children[1].children[1].children[0].innerHTML, //Titulo Cancion
            event.path[2].children[1].children[1].children[1].innerHTML, //Nombre Artista
            event.path[2].children[2].innerHTML, //Album Cancion
            event.path[2].children[3].innerHTML, //Fecha Agregado
            event.path[2].children[4].children[1].innerHTML
        ); // Duracion

        favoritos.push(nuevaCancion);

        agregarLocalStorage('favoritos', favoritos);
        
        actualizarFavoritos();
        
        Toastify({
            text: "Se agregó a favoritos",
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
        
    } else {
        
        filaCancion.classList.remove('liked');
        event.target.attributes.src.value = 'iconosweb/corazon (1).png';
        favoritos = favoritos.filter(el=>el.nombre != nombreCancion);
        
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


function actualizarFavoritos() {

    let html = '';
    favoritos.forEach(cancion => {
        html += `
            <div class= "tabla-datos-fila fila-favoritos${cancion.id}">
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
                    <img src="iconosweb/corazon.png" class="datos-like liked" id="like_${cancion.id}" onclick="eliminarCancion()"></img>
                    <div class="datos-duracion">${cancion.duracion}</div>
                </div>
            </div>`;
    })
    document.querySelector('.playlist-favoritos').innerHTML = html;
}

