import React from 'react';
// Chakra UI
import {Box, Flex, Text, Heading, IconButton, Icon} from '@chakra-ui/core';
import {FaFacebookF, FaTwitter, FaYoutube, FaHeart} from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" width="100%" height="30vh" px={6} pb={6}>
      <Flex
        direction="column"
        align="center"
        bg="#ccc"
        h="100%"
        w="100%"
        justify="center"
      >
        <Flex width="100%" direction="row" justify="space-evenly">
          <Flex color="black" direction="column" py={3} align="start">
            <Heading mb={2} textTransform="uppercase" size="sm">
              Categories
            </Heading>
            <Text>Movies</Text>
            <Text>Series</Text>
            <Text>Animation</Text>
          </Flex>
          <Flex color="black" wrap="no-wrap">
            <IconButton bg="none" icon={FaFacebookF} />
            <IconButton bg="none" icon={FaTwitter} />
            <IconButton bg="none" icon={FaYoutube} />
          </Flex>
        </Flex>
        <Box width="100%" mt="auto" mb={2}>
          <Text textAlign="center" fontSize="sm" color="black">
            Made by Maximiliano Blanco with Chakra UI, The MovieDB API,
            Framer-Motion and <Box as={FaHeart} display="inline" />
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
