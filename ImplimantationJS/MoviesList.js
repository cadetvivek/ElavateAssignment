let data = [
    {
      "movieName": "The Shawshank Redemption",
      "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      "rating": 4.8,
      "bestScenes": [
        {
          "title": "Andy Dufresne escapes from prison",
          "duration": "15 mins"
        },
        {
          "title": "Brooks was here",
          "duration": "10 mins"
        }
      ]
    },
    {
      "movieName": "The Godfather",
      "actors": ["Marlon Brando", "Al Pacino", "James Caan"],
      "rating": 4.9,
      "bestScenes": [
        {
          "title": "Horse head in bed",
          "duration": "5 mins"
        },
        {
          "title": "Cannoli scene",
          "duration": "3 mins"
        }
      ]
    },
    {
      "movieName": "The Dark Knight",
      "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      "rating": 4.8,
      "bestScenes": [
        {
          "title": "Opening bank robbery",
          "duration": "12 mins"
        },
        {
          "title": "Why So Serious interrogation",
          "duration": "8 mins"
        }
      ]
    },
    {
      "movieName": "The Lord of the Rings: The Return of the King",
      "actors": ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
      "rating": 4.9,
      "bestScenes": [
        {
          "title": "Ride of the Rohirrim",
          "duration": "10 mins"
        },
        {
          "title": "Frodo destroys the One Ring",
          "duration": "7 mins"
        }
      ]
    }
  ]
  
  
  

 //1. Find Best Scene Duration per Movie
let longestScenes = data.map(movie => {
  let longest = movie.bestScenes.reduce((max, scene) => {
    return parseInt(scene.duration) > parseInt(max.duration) ? scene : max;
  });
  return {
    movieName: movie.movieName,
    longestSceneDuration: parseInt(longest.duration)
  };
});

console.log(longestScenes);

//Total Duration of Best Scenes

let totalDuration = data.reduce((total, movie) => {
  return total + movie.bestScenes.reduce((sum, scene) => {
    return sum + parseInt(scene.duration);
  }, 0);
}, 0);

console.log("Total Best Scenes Duration:", totalDuration + " mins");

//Find All Unique Actors
let allActors = data.flatMap(movie => movie.actors);
let uniqueActors = [...new Set(allActors)];

console.log("Unique Actors:", uniqueActors);

//Average Rating with 

let averageRating = data.reduce((sum, movie) => sum + movie.rating, 0) / data.length;
console.log("Average Rating:", averageRating.toFixed(2));


// Modify Movie List to Include Release Year and Genre
data[0].releaseYear = 2025;
data[0].genre = "Drama"


// Filter by rating
function filterMoviesByRating(movies, rating) {
  return movies.filter(movie => movie.rating === rating);
}

console.log(filterMoviesByRating(data, 4.9));

//Sort Movie List

let sortedByRating = [...data].sort((a, b) => b.rating - a.rating);
console.log(sortedByRating.map(m => m.movieName));

//Sort by Movie Name Alphabetically
let sortedByName = [...data].sort((a, b) => a.movieName.localeCompare(b.movieName));
console.log(sortedByName.map(m => m.movieName));


