import React from 'react';
// Chakra UI
import {
  IconButton,
  InputGroup,
  Input,
  InputRightElement,
} from '@chakra-ui/core';

const SearchInput = () => {
  return (
    <InputGroup>
      <Input placeholder="Search..." />
      <InputRightElement children={<IconButton icon="search" />} />
    </InputGroup>
  );
};

export default SearchInput;
