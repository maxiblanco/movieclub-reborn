import React, {useState} from 'react';
import {motion} from 'framer-motion';
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
  const [isFocused, setFocused] = useState(false);

  return (
    <motion.div
      variants={inputAnimation}
      animate={isFocused ? 'focused' : 'notFocused'}
    >
      <InputGroup>
        <Input
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          width="lg"
          bg="black"
          placeholder="Search..."
        />
        <InputRightElement
          children={<IconButton icon="search" color="white" bg="none" />}
        />
      </InputGroup>
    </motion.div>
  );
};

export default SearchInput;
