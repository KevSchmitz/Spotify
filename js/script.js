const cancionContenedor = document.querySelector('.cancion-contenedor');
let nombreCancion = cancionContenedor.querySelector('.cancion-nombre a');
let artistaCancion = cancionContenedor.querySelector('.cancion-artista a');
let imagenCancion = cancionContenedor.querySelector('.cancion-album img');

const indiceArreglo = 2
nombreCancion.textContent = canciones[`${indiceArreglo}`].nombre;
artistaCancion.textContent = canciones[`${indiceArreglo}`].artista;
imagenCancion.src = 'img/' + canciones[`${indiceArreglo}`].imagen + '.jpg';


console.log(cancionContenedor);
console.log(nombreCancion);
console.log(artistaCancion);
console.log(imagenCancion);