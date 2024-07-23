import React, { useState } from 'react';
import '../css/moviesearch.css';


const apiKey = 'ee546696';
const baseUrl = `http://www.omdbapi.com/?apikey=${apiKey}`;

function MovieSearch() {
  // state variable to hold the search quuery
  const [query, setQuery] = useState('');
  
  // state variable to hold the list of movies returned from the search
  const [movies, setMovies] = useState([]);
  
  // state variable to hold details of the selected movie
  const [selectedMovie, setSelectedMovie] = useState(null);

  // function to search movies based on query
  const searchMovies = async (e) => {
    e.preventDefault(); 

    // OMDb API URL with search query
    const url = `${baseUrl}&s=${query}`;

    try {
      const res = await fetch(url); // fetch movie data 
      const data = await res.json(); // convert to JSON
      setMovies(data.Search); // update the 'movies' state with the fetched data
      setSelectedMovie(null); // reset selected movie on new search
    } catch (err) {
      console.error(err);
    }
  };

  // function to fetch details of a selected movie
  const fetchMovieDetails = async (id) => {
   
    const url = `${baseUrl}&i=${id}`;

    try {
      const res = await fetch(url); 
      const data = await res.json(); 
      setSelectedMovie(data); // update the 'selectedMovie' state with the fetched data
    } catch (err) {
      console.error(err); // handle any errors that occur during the fetch
    }
  };

  return (
    <div className="movie-search">
      <h1>Movie Search</h1>
      <form onSubmit={searchMovies}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // update the 'query' state with the input value
          placeholder="Search for a movie"
        />
        <button type="submit">Search</button>
      </form>
      
      <div className="movies">
        {movies && movies.map(movie => (
          <div key={movie.imdbID} className="movie">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <button onClick={() => fetchMovieDetails(movie.imdbID)}>View Details</button>
          </div>
        ))}
      </div>
      
      {/* display the selected movie details */}
      {selectedMovie && (
        <div className="movie-detail">
          <h2>{selectedMovie.Title}</h2>
          <p><strong>Year:</strong> {selectedMovie.Year}</p>
          <p><strong>Genre:</strong> {selectedMovie.Genre}</p>
          <p><strong>Director:</strong> {selectedMovie.Director}</p>
          <p><strong>Plot:</strong> {selectedMovie.Plot}</p>
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
        </div>
      )}
    </div>
  );
}

export default MovieSearch;
