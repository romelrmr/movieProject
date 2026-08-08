API: "https://www.omdbapi.com/?i=tt3896198&apikey=7f9d3fad&s=Harry%20Potter"


async function main() {
    const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=7f9d3fad&s=Harry%20Potter");
    const moviesData = await movies.json();
    const movieListEl = document.querySelector('.movieList');
    
    movieListEl.innerHTML = moviesData.Search.map((user) => movieHTML(user)).join("");
}

function movieHTML(user) {
    return `<div class="movieList">
    <div class="movie-list__container">
        <p><img src="${user.Poster}"</p>
        <p>${user.Title}</p>
        <p>${user.Year}</p>       
    </div>
</div>`;
}

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
    const title = searchInput.value.trim();

    console.log("Searching for:", title);

    if(title !== "") {
        searchMovies(title);
    }
});

async function searchMovies(title) {
    const movies = await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=7f9d3fad&s=${(title)}`
    );
    const moviesData = await movies.json();
    console.log(moviesData);
    const movieListEl = document.querySelector(".movieList");
    if (moviesData.Search) {
        movieListEl.innerHTML = moviesData.Search
            .map((movie) => movieHTML(movie))
            .join("");
    }   else {
        movieListEl.innerHTML = "<p>No movies found</p>";
    }
}