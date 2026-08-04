API: "https://www.omdbapi.com/?i=tt3896198&apikey=7f9d3fad&s=Harry%20Potter"


async function main() {
    const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=7f9d3fad&s=Harry%20Potter");
    const moviesData = await movies.json();
    const movieListEl = document.querySelector('.movieList');
    console.log(moviesData);
    
    movieListEl.innerHTML = moviesData.Search.map((user) => movieHTML(user)).join("");
}

main();

function movieHTML(user) {
    return `<div class="movieList">
    <div class="movie-list__container">
        <p><img src="${user.Poster}"</p>
        <p>${user.Title}</p>
        <p>${user.Year}</p>       
    </div>
</div>`;
}
