// Select DOM elements
const movieInput = document.getElementById('movie-input');
const addMovieBtn = document.getElementById('add-movie');
const displayListBtn = document.getElementById('display-list');
const resetListBtn = document.getElementById('reset-list');
const movieList = document.getElementById('movie-list');

// Initialize movie array
let movies = [];

// Add movie to array and clear input field
function addMovie() {
  const movieTitle = movieInput.value;
  movies.push(movieTitle);
  movieInput.value = '';
}

// Display movie list in separate window
function displayList() {
  const listWindow = window.open('', 'Movie List', 'width=400,height=400');
  listWindow.document.write('<h1>Movie List:</h1>');
  listWindow.document.write('<ul>');
  for (let i = 0; i < movies.length; i++) {
    listWindow.document.write(`<li>${movies[i]}</li>`);
  }
  listWindow.document.write('</ul>');
}

// Reset movie list and clear display
function resetList() {
  movies = [];
  movieList.value = '';
}

// Add event listeners
addMovieBtn.addEventListener('click', addMovie);
displayListBtn.addEventListener('click', displayList);
resetListBtn.addEventListener('click', resetList);

