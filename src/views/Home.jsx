import React, {useContext, useEffect} from 'react';
import {MovieContext} from '/context/movieContext';
// Chakra UI
import {Box, Image} from '@chakra-ui/core';
// Components
import Home from '/components/Home';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeView = () => {
  const {movies, loading, lang, getMovies} = useContext(MovieContext);

  useEffect(() => {
    getMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <Box bg="black" color="gray.50">
      <Box
        width={['100%', null, '90%']}
        height="100vh"
        mx="auto"
        position="relative"
        bgImage="url(https://image.tmdb.org/t/p/original/xXBnM6uSTk6qqCf0SRZKXcga9Ba.jpg)"
        bgSize="150%"
        zIndex={0}
        boxShadow="0px 0px 400px #000 inset"
      >
        <Box pt={4}>
          <Navbar />
        </Box>

        {/*         <Image
          src="https://image.tmdb.org/t/p/original/xXBnM6uSTk6qqCf0SRZKXcga9Ba.jpg" 
           src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
          width="100%"
          border="none"
          position="absolute"
          top="0"
          left="0"
          zIndex="-1"
        /> */}
      </Box>

      {/* TODO: Fix grid to overlay image */}
      <Box maxW="90%" mx="auto" position="relative" zIndex={1} mt="-5rem">
        <Home movies={movies} loading={loading} />
      </Box>
      <Footer />
    </Box>
  );
};

export default HomeView;
