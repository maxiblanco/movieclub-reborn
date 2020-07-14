import React, {useContext, useEffect} from 'react';
import {MovieContext} from '/context/movieContext';
// Chakra UI
import {Box, SimpleGrid} from '@chakra-ui/core';
// Components
import MovieCard from '../MovieCard';
import Navbar from '../Navbar';

const Home = () => {
  const {movies, loading, lang, getMovies} = useContext(MovieContext);

  useEffect(() => {
    getMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <Box mx="auto" maxW="90%">
      <Navbar />
      <SimpleGrid minChildWidth="250px" spacing="40px">
        {movies.map(({id, title, poster_path: posterPath}) => (
          <MovieCard key={id} title={title} posterPath={posterPath} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
