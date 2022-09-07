const canciones = [
  new Cancion('1', 'Titi me preguntó', 'Bad Bunny', 'Verano sin ti', 'verano sin ti', '4:50', 'Bad Bunny - Tití Me Preguntó (Official Video) - Un Verano Sin Ti'),

  new Cancion('2', 'Yo no soy celoso', 'Bad Bunny', 'Verano sin ti', 'verano sin ti', '3:50', 'Bad Bunny - Yo No Soy Celoso (360° Visualizer) - Un Verano Sin Ti'),

  new Cancion('3', 'Yonaguni', 'Bad Bunny', 'Yonaguni', 'yonaguni', '3:28', 'Bad Bunny - Yonaguni (Video Oficial)'),

  new Cancion('4', 'Me porto bonito', 'Bad Bunny', 'Verano sin ti', 'verano sin ti', '3:11', 'Bad Bunny (ft. Chencho Corleone) - Me Porto Bonito (Official Video) - Un Verano Sin Ti'),

  new Cancion('5', 'Ojitos lindos', 'Bad Bunny', 'Verano sin ti', 'verano sin ti', '4:118', 'Bad Bunny, Bomba Estéreo - Ojitos Lindos (Letra-Lyrics)')
];

const playlists = [
  new Playlist(1, `${canciones[1].imagen}`, `${canciones[1].nombre}`, `${canciones[1].artista}`, `${canciones[1].album}`, 'Sep 05, 2022', `${canciones[1].duracion}`),

  new Playlist(2, `${canciones[2].imagen}`, `${canciones[2].nombre}`, `${canciones[2].artista}`, `${canciones[2].album}`, 'Sep 05, 2022', `${canciones[2].duracion}`),

  new Playlist(3, `${canciones[3].imagen}`, `${canciones[3].nombre}`, `${canciones[3].artista}`, `${canciones[3].album}`, 'Sep 05, 2022', `${canciones[3].duracion}`)
]

