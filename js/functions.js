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

const agregarElemento = (arreglo, elemento) => arreglo.push(elemento);

