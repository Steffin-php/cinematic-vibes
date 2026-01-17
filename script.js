const API_KEY = 'YOUR_TMDB_API_KEY'; // Get one for free at themoviedb.org
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const movieGrid = document.getElementById('movieGrid');

// 1. Fetch Trending Movies
async function getMovies() {
    try {
        const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
        const data = await res.json();
        displayMovies(data.results);
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

// 2. Display Movies in Grid
function displayMovies(movies) {
    movieGrid.innerHTML = '';
    movies.forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie-card');
        movieEl.innerHTML = `
            <img src="${IMG_URL + movie.poster_path}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span>⭐ ${movie.vote_average}</span>
            </div>
        `;
        movieGrid.appendChild(movieEl);
    });
}

getMovies();
