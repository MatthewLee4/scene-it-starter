//WAITS FOR PAGE TO LOAD BEFORE DOING WHAT'S BELOW
document.addEventListener('DOMContentLoaded',function() { 
    //GETITNG WATCHLIST FROM LOCALSTORAGE

  let watchlistJSON = localStorage.getItem('watchlist');

    let watchlistMovies = JSON.parse(watchlistJSON);

      //FUNCTION FOR GENERATING MOVIE CARDS
      function renderMovies (movieArray) {
          movieHTML = movieArray.map(function(currentMovie){
  
            //RENDER MOVIE CARD WITH VARIABLES
              return `
              <div class="movie">
              <div class="card" style="width: 18rem;">
                  <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">${currentMovie.Title}</h5>
                    <p class="card-text">${currentMovie.Year}</p>
                    <a href="#" onclick="saveToWatchlist('${currentMovie.imdbID}')" class="btn btn-primary">Add!</a>
                  </div>
                </div>
              </div>
              `})
          return movieHTML.join('');
      }
      //LISTEN FOR EVENT, SHOW MOVIES
      document.querySelector('.movies-container').innerHTML = renderMovies(watchlistMovies); 
  
  });
  
function clearMovies(){
  localStorage.clear();
  document.querySelector('.movies-container').innerHTML = ""; 
}

