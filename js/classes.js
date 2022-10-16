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
