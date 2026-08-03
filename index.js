API: "https://www.omdbapi.com/?i=tt3896198&apikey=7f9d3fad&s=Harry"


async function main() {
    const users = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=7f9d3fad&s=Harry");
    const usersData = await users.json();
    console.log(
        usersData.map(
            (user) => `<section class="movieList">
        <div class="movie-list__container">
            <h3>Movie</h3>
                <p>Title</p>
                <p>Year></p>
                <p>imdbID</p>
                <p>Type</p>
                <p>Poster</p>
        </div>
    </section>`)
    );
}

main();
