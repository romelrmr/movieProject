API: "https://www.omdbapi.com/?i=tt3896198&apikey=7f9d3fad&s=Harry%20Potter"


async function main() {
    const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=7f9d3fad&s=Harry%20Potter");
    const moviesData = await movies.json();
    const movieListEl = document.querySelector('.movieList');
    
    movieListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(user)).join("");
}

let movies = [];

function movieHTML(movie) {
    return `
    <div class="movie-list__container">
        <img src="${movie.Poster}"</p>
        <p>${movie.Title}</p>
        <p>${movie.Year}</p>       
    </div>`
    ;
}

function displayMovies(movieArray) {
    const movieListEl = document.querySelector(".movieList");
    if (movieArray.length > 0) {
        movieListEl.innerHTML = movieArray
        .map(movie => movieHTML(movie))
        .join("");
    } else {movieListEl.innerHTML = "<p>No movies found</p>";
        }
    }

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
    const title = searchInput.value.trim();

    if(title !== "") {
        searchMovies(title);
    }
});


async function searchMovies(title) {
    const response = await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=7f9d3fad&s=${(title)}`
    );
    const moviesData = await response.json();

    if (moviesData.Search) {
        movies = moviesData.Search;
        
        displayMovies(movies);
    } else {
        movies = [];
        displayMovies(movies);
    }
}

const sortMovies = document.getElementById("sortMovies");
sortMovies.addEventListener("change", () => {
    console.log("Selected:", sortMovies.value);

    if (sortMovies.value === "titleAZ") {
        
        const sortedMovies = [...movies];
            sortedMovies.sort((a, b) => {
            return a.Title.localeCompare(b.Title);
        });
        console.log("Sorted:", sortedMovies.map(movie => movie.Title)
        );

        displayMovies(sortedMovies);
        }
        else {
            displayMovies(movies);
        }
    });