import React, { useEffect, useContext } from 'react';
import { MovieContext } from '/context/movieContext';
// Charkra UI
import {
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  AspectRatioBox,
  Divider,
} from '@chakra-ui/core';

const FeaturedHero = ({ featured: { id, title, overview } }) => {
  const { loading, singleMovieTrailer, getMovieTrailer } = useContext(
    MovieContext
  );

  useEffect(() => {
    getMovieTrailer(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleMovieTrailer, getMovieTrailer]);

  return (
    <Stack direction="column" maxWidth="70ch">
      <Heading textTransform="uppercase" fontWeight={400} fontSize="6xl" mb={4}>
        {title}
      </Heading>
      <Text display="block" fontSize="1.2rem">
        {overview}
      </Text>
      <Divider py={4} borderWidth="4px" />
      <AspectRatioBox ratio={16 / 9}>
        <Box
          as="iframe"
          title="naruto"
          modestbranding={1}
          constrols={0}
          src={`https://www.youtube.com/embed/${singleMovieTrailer.key}`}
          allowFullScreen
        />
      </AspectRatioBox>
    </Stack>
  );
};

export default FeaturedHero;
