const playlists = [
    new Playlist('House of Pleasure', songs)
];

let tituloPlaylist = document.querySelector('.playlist-titulo');
tituloPlaylist.innerHTML = playlists[0].nombre;
console.log(tituloPlaylist);

let datosPlaylist = document.querySelector('.playlist-datos');
datosPlaylist.innerHTML = `- 200 likes - ${playlists[0].canciones.length} songs, 1 hr 30 min`;

// playlists[0].canciones.push(songs[2]);
console.log(playlists[0].canciones);