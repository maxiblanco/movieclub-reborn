import React from 'react';
// Chakra UI
import {Flex, PseudoBox, Box, Heading, Text, IconButton} from '@chakra-ui/core';
import {FaFacebookF, FaTwitter, FaYoutube} from 'react-icons/fa';
// Components
import SearchInput from '../SearchInput';

const Navbar = () => {
  return (
    <Flex textTransform="uppercase" align="center" justify="space-between">
      <Heading>Movieclub</Heading>
      <Flex width="300px" justify="space-between">
        <PseudoBox>
          <Text>Movies</Text>
          {/* TODO: Switch all to Links to their view */}
        </PseudoBox>
        <PseudoBox>
          <Text>Series</Text>
        </PseudoBox>
        <PseudoBox>
          <Text>Animation</Text>
        </PseudoBox>
      </Flex>
      <SearchInput />
      <Box>
        <IconButton icon={FaFacebookF} />
        <IconButton icon={FaTwitter} />
        <IconButton icon={FaYoutube} />
      </Box>
    </Flex>
  );
};

export default Navbar;
