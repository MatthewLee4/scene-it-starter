//WAITS FOR PAGE TO LOAD BEFORE DOING WHAT'S BELOW
document.addEventListener('DOMContentLoaded',function() { 
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
                  <button href="#" class="btn btn-primary add"  onclick="saveToWatchlist('${currentMovie.imdbID}')">Add!</button>
                </div>
              </div>
            </div>
            `});
        return movieHTML.join('');
    }
    //LISTEN FOR EVENT, SHOW MOVIES
    document.querySelector('#search-form').addEventListener('submit', function(event){
      document.querySelector('.movies-container').innerHTML = renderMovies(movieData); 
      event.preventDefault();
      });

  //FUNCTION FOR SAVING CARDS TO WATCHLIST
  saveToWatchlist = (imdbID) => {                
    let movie = movieData.find((currentMovie) => {            
      return currentMovie.imdbID == imdbID;        
    });        
    //PULLING DOWN WATCHLIST FORM LOCAL STORAGE
    let watchlistJSON = localStorage.getItem('watchlist'); 
    //PARSING THE WATCHLIST WITH JSON       
    let watchlist = JSON.parse(watchlistJSON);        
    if (!watchlist) watchlist = [];   
    //PUSHING MOVIE INTO THE WATCHLIST    
    watchlist.push(movie);       
     //TURNING WATCHLIST BACK INTO JSON
    watchlistJSON = JSON.stringify(watchlist); 
    //SAVING JSONIFIED WATCHLIST BACK INTO LOCAL STORAGE       
    localStorage.setItem('watchlist', watchlistJSON);     
    };
});
