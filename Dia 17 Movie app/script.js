//API info => https://developers.themoviedb.org/3/getting-started/introduction

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f83b118bbc4a7854338385824c4920cc&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=f83b118bbc4a7854338385824c4920cc&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');



//get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const response = await fetch(url);
    const data = await response.json();
    
    showMovies(data.results);
    
}

function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `
        main.appendChild(movieEl)
    });
}; 

function getClassByRate(vote) {
    if(vote >= 8) {
      return 'green';
    } else if (vote>=5) {
      return 'orange';
    } else {
      return 'red';
    }
  };
 
//search movie
form.addEventListener('submit', e => {
    e.preventDefault();
   
    const searchTerm = search.value;

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);

        search.value = '';
    }else{
        //relode page
        window.location.reload();
    }
});