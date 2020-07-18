import React, { useContext, useEffect } from 'react';
import { MovieContext } from '/context/movieContext';
// Chakra UI
import { Box, Image, Heading } from '@chakra-ui/core';
// Components
import Home from '/components/Home';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeView = () => {
  const { movies, loading, lang, getMovies } = useContext(MovieContext);

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box bg="black" color="gray.50">
      <Box
        width={['100%', null, '90%']}
        height="100vh"
        mx="auto"
        position="relative"
        bgImage=" url(https://image.tmdb.org/t/p/original/xXBnM6uSTk6qqCf0SRZKXcga9Ba.jpg)"
        boxShadow="inset 0px 0px 10rem 8rem rgba(0,0,0,0.9), inset 0px 0px 9rem 6rem rgba(0,0,0,0.6), inset 0px 0px 6rem 4rem rgba(0,0,0,0.4), inset 0px 0px 6rem 5rem rgba(0,0,0,0.9)"
        backgroundSize="cover"
        backgroundPosition="center"
        zIndex={0}
      >
        <Box pt={4}>
          <Navbar />
        </Box>

      </Box>

      <Box
        maxW="90%"
        mx="auto"
        position="relative"
        zIndex={1}
        mt="-5rem"
        mb="2rem"
      >

        <Home movies={movies} loading={loading} />
      </Box>
      <Footer />
    </Box>
  );
};

export default HomeView;
