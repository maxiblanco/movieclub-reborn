import React, { useEffect, useContext, useState } from 'react';
import { MovieContext } from '/context/movieContext';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
// Chakra UI
import {
  IconButton,
  InputGroup,
  Input,
  InputRightElement,
} from '@chakra-ui/core';

const inputAnimation = {
  focused: {
    scaleX: 1.2,
  },
  notFocused: {
    scaleX: 1,
  },
};

const SearchInput = () => {
  const history = useHistory();
  const [isFocused, setFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { setQuery, searchMovies } = useContext(MovieContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchQuery);
    searchMovies(searchQuery);
    setSearchQuery('');
    history.push('/search');
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    console.log(e.target.value);
  };

  return (
    <motion.div
      variants={inputAnimation}
      animate={isFocused ? 'focused' : 'notFocused'}
    >
      <InputGroup>
        <form action="submit" onSubmit={handleSubmit}>
          <Input
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            width="lg"
            bg="black"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleChange}
            type="text"
          />
          <InputRightElement
            children={
              <IconButton type="submit" icon="search" color="white" bg="none" />
            }
          />
        </form>
      </InputGroup>
    </motion.div>
  );
};

export default SearchInput;
