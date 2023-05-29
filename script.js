let moviesData = []; // Variable to store the movie data

// Function to filter movies based on search term
function filterMovies(searchTerm) {
    const filteredMovies = moviesData.filter(movie => {
        const title = movie[0].toLowerCase(); // Assuming the title is in the first column
        return title.includes(searchTerm.toLowerCase());
    });

    if (filteredMovies.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredMovies.length);
        const randomMovie = filteredMovies[randomIndex];

        const title = randomMovie[0];
        const genre = randomMovie[1];
        const description = randomMovie[2];
        const rating = randomMovie[3];
        const poster = randomMovie[4];

        document.getElementById('title').textContent = title;
        document.getElementById('genre').textContent = genre;
        document.getElementById('description').textContent = description;
        document.getElementById('rating').textContent = rating;
        document.getElementById('poster').src = poster;
        if(title == "Avatar: The Way of Water"){
            document.getElementById('trailerButton').href = "https://www.youtube.com/watch?v=d9MyW72ELq0&ab_channel=Avatar";
        }
        if(title == "Talk to Me"){
            document.getElementById('trailerButton').href = "https://www.youtube.com/watch?v=aLAKJu9aJys&ab_channel=A24";
        }
        if(title == "Barbie"){
            document.getElementById('trailerButton').href = "https://www.youtube.com/watch?v=pBk4NYhWNMM&ab_channel=WarnerBros.Pictures";
        }
        if(title == "The Super Mario Bros. Movie"){
            document.getElementById('trailerButton').href = "https://www.youtube.com/watch?v=DUnQcJz76Ck&t=4s&ab_channel=MovieTrailersSource";
        }
        if(title == "John Wick: Chapter 4"){
            document.getElementById('trailerButton').href = "https://www.youtube.com/watch?v=qEVUtrk8_B4&ab_channel=LionsgateMovies";
        }
        if(title == "Evil Dead Rise"){
            document.getElementById('trailerButton').href = "https://www.youtube.com/watch?v=smTK_AeAPHs&ab_channel=StudiocanalUK";
        }
        if(title == "Fall"){
            document.getElementById('trailerButton').href = "https://www.youtube.com/watch?v=aa5MXOMN1lM&ab_channel=MovieTrailersSource";
        }
        if(title == "Cocaine Bear"){
            document.getElementById('trailerButton').href = "https://www.youtube.com/watch?v=DuWEEKeJLMI&ab_channel=UniversalPictures";
        }
        if(title == "Shazam! Fury of the Gods"){
            document.getElementById('trailerButton').href = "https://www.youtube.com/watch?v=AIc671o9yCI&ab_channel=WarnerBros.Pictures";
        }
        if(title == "The Batman"){
            document.getElementById('trailerButton').href = "https://www.youtube.com/watch?v=mqqft2x_Aa4&ab_channel=WarnerBros.Pictures";
        }
    } else {
        // If no matching movies found, display a message or perform an action
        alert("No movies found with the search term.");
    }
}

fetch('movies.csv')
    .then(response => response.text())
    .then(csvData => {
        const rows = csvData.split('\n');
        moviesData = rows.map(row => row.split(','));
    });

document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value;
    filterMovies(searchTerm);
});

document.getElementById('newMovieButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * moviesData.length);
    const randomMovie = moviesData[randomIndex];

    const title = randomMovie[0];
    const genre = randomMovie[1];
    const description = randomMovie[2];
    const rating = randomMovie[3];
    const poster = randomMovie[4];

    document.getElementById('title').textContent = title;
    document.getElementById('genre').textContent = genre;
    document.getElementById('description').textContent = description;
    document.getElementById('rating').textContent = rating;
    document.getElementById('poster').src = poster;
    if(title == "Avatar: The Way of Water"){
        document.getElementById('trailerButton').href = "https://www.youtube.com/watch?v=d9MyW72ELq0&ab_channel=Avatar";
    }
    if(title == "Talk to Me"){
        document.getElementById('trailerButton').href = "https://www.youtube.com/watch?v=aLAKJu9aJys&ab_channel=A24";
    }
    if(title == "Barbie"){
        document.getElementById('trailerButton').href = "https://www.youtube.com/watch?v=pBk4NYhWNMM&ab_channel=WarnerBros.Pictures";
    }
    if(title == "The Super Mario Bros. Movie"){
        document.getElementById('trailerButton').href = "https://www.youtube.com/watch?v=DUnQcJz76Ck&t=4s&ab_channel=MovieTrailersSource";
    }
    if(title == "John Wick: Chapter 4"){
        document.getElementById('trailerButton').href = "https://www.youtube.com/watch?v=qEVUtrk8_B4&ab_channel=LionsgateMovies";
    }
    if(title == "Evil Dead Rise"){
        document.getElementById('trailerButton').href = "https://www.youtube.com/watch?v=smTK_AeAPHs&ab_channel=StudiocanalUK";
    }
    if(title == "Fall"){
        document.getElementById('trailerButton').href = "https://www.youtube.com/watch?v=aa5MXOMN1lM&ab_channel=MovieTrailersSource";
    }
    if(title == "Cocaine Bear"){
        document.getElementById('trailerButton').href = "https://www.youtube.com/watch?v=DuWEEKeJLMI&ab_channel=UniversalPictures";
    }
    if(title == "Shazam! Fury of the Gods"){
        document.getElementById('trailerButton').href = "https://www.youtube.com/watch?v=AIc671o9yCI&ab_channel=WarnerBros.Pictures";
    }
    if(title == "The Batman"){
        document.getElementById('trailerButton').href = "https://www.youtube.com/watch?v=mqqft2x_Aa4&ab_channel=WarnerBros.Pictures";
    }
});
