// MovieGrid.js

/*import React from 'react';
import './MovieGrid.css';

const MovieGrid = ({ movies }) => {
  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <div key={movie.title} className="movie-item">
          <img src={movie.url} alt={movie.title} />
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
*/
import React from "react";
import "./MovieGrid.css";

const MovieGrid = ({ movies }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <div className="movie" key={index}>
          <img src={movie.url} alt={movie.title} />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>Director: {movie.director}</p>
            <p>IMDB: {movie.imdb}</p>
            <p>Year: {movie.year}</p>
            <p>Genres: {movie.genres.join(", ")}</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
