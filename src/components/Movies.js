import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
      {movies.map(movie=>{
        return(
          <div key={movie.title}>
            <React.Fragment>
            <h2>{movie.title}</h2>
            <h3>{movie.time}</h3>
            <ul>
              {movie.genres.map(genre=>{
                return(
                  <li key={genre}>{genre}</li>
                )
              })}
            </ul>
            </React.Fragment>
          </div>
        )
        }
        )}
  </div>
  );
};

export default Movies;
