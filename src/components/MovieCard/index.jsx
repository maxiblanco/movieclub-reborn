import React from 'react';
// Chakra UI
import {Box, Image, Stack, Text} from '@chakra-ui/core';

const MovieCard = ({id, title, posterPath}) => (
  <Box>
    <Stack>
      <Image src={`https://image.tmdb.org/t/p/w500${posterPath}`} />
      <Text>{title}</Text>
    </Stack>
  </Box>
);

export default MovieCard;
