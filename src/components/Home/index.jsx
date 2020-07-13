import React, {useContext, useEffect} from 'react';
import {MovieContext} from '/context/movieContext';
const Home = () => {
  const {movies, loading, lang, getMovies} = useContext(MovieContext);

  useEffect(() => {
    getMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <div className="App">
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
