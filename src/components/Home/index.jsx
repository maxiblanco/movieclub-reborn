import React from 'react';
// Chakra UI
import { Flex, Box, Grid, Heading, Text, Skeleton } from '@chakra-ui/core';
// Components
import MovieCard from '../MovieCard';

const Home = ({ movies, loading }) => {
  return (
    <Grid
      templateColumns={[
        'repeat(auto-fill, minmax(150px, 1fr) )',
        'repeat(auto-fill, minmax(200px, 1fr) )',
        'repeat(auto-fill, minmax(220px, 1fr) )',
      ]}
      gap="2rem"
      mx="2rem"
    >
      <Flex
        direction="column"
        justify="center"
        align="start"
        gridArea="1 / 1 / span 1 / span 2"
      >
        <Heading textTransform="uppercase" size="xl">
          New & Upcoming <br /> Movies
        </Heading>
        <Text pt={6} fontWeight="bold">
          Emotional, exciting and unexpected.
        </Text>
      </Flex>
      {movies.map(({ id, title, poster_path: posterPath }) => (
        <Skeleton isLoaded={!loading} key={id}>
          <MovieCard key={id} title={title} posterPath={posterPath} />
        </Skeleton>
      ))}
    </Grid>
  );
};

export default Home;
