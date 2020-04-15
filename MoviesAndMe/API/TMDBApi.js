const API_TOKEN='fcea18a27f4fc497a4b130e0327bce6b';

export function getFilmsFromApiWithSearchedText(text,page){
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text+'&page='+page
  //'https://api.themoviedb.org/3/search/movie?api_key=fcea18a27f4fc497a4b130e0327bce6b&language=fr&query=harry
 return fetch(url)
   .then((response) => response.json())
   .catch((error) => console.error(error))
}

export function getImageFromApi(name){
  return ('https://image.tmdb.org/t/p/w300'+name)
}
// Récupération du détail d'un film
export function getFilmDetailFromApi (id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
