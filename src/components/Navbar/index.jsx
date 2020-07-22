import React from 'react';
import { Link } from 'react-router-dom';
// Chakra UI
import {
  Flex,
  PseudoBox,
  Box,
  Heading,
  Text,
  IconButton,
  Image,
} from '@chakra-ui/core';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
// Components
import SearchInput from '../SearchInput';
// Assets
import MovieLogo from '../../assets/MovieclubLogo.png';

const Navbar = () => {
  return (
    <Flex
      position="relative"
      zIndex={1}
      align="center"
      justify="space-between"
      direction={['column', 'column', 'row']}
    >
      <Heading textTransform="uppercase" my="auto">
        <Link to="/">
          <Image src={MovieLogo} display="inline" width="50px" />
          Movieclub
        </Link>
      </Heading>
      <Flex width="300px" align="center" justify="space-between">
        <PseudoBox
          as="button"
          borderBottom="solid 0.2rem rgba(0,0,0,0)"
          _hover={{ borderBottom: 'solid 0.2rem' }}
        >
          <Text textTransform="uppercase">Movies</Text>
          {/* TODO: Switch all to Links of their view */}
        </PseudoBox>
        <PseudoBox
          as="button"
          borderBottom="solid 0.2rem rgba(0,0,0,0)"
          _hover={{ borderBottom: 'solid 0.2rem' }}
        >
          <Text textTransform="uppercase">Series</Text>
        </PseudoBox>
        <PseudoBox
          as="button"
          borderBottom="solid 0.2rem rgba(0,0,0,0)"
          _hover={{ borderBottom: 'solid 0.2rem' }}
        >
          <Text textTransform="uppercase">Animation</Text>
        </PseudoBox>
      </Flex>

      <SearchInput />

      <Flex wrap="no-wrap">
        <IconButton color="white" bg="none" icon={FaFacebookF} />
        <IconButton color="white" bg="none" icon={FaTwitter} />
        <IconButton color="white" bg="none" icon={FaYoutube} />
      </Flex>
    </Flex>
  );
};

export default Navbar;
