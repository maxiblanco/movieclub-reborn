import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from '/context/movieContext';
// Chakra UI
import { Box, Image, Heading, Flex } from '@chakra-ui/core';
// Components
import Home from '/components/Home';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeView = () => {
  const { loading, results } = useContext(MovieContext);
  const [featured, setFeatured] = useState(null);

  return (
    <Box bg="black" color="gray.50">
      <Box pt={4}>
        <Navbar />
      </Box>
      <Box
        maxW="90%"
        mx="auto"
        position="relative"
        zIndex={1}
        mt="2rem"
        mb="2rem"
      >
        <Home movies={results} loading={loading} />
      </Box>
      <Footer />
    </Box>
  );
};

export default HomeView;
