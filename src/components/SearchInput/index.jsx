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
      <Input
        width="lg"
        _focusWithin={{width: 'xl'}}
        bg="black"
        placeholder="Search..."
      />
      <InputRightElement
        children={<IconButton icon="search" color="white" bg="none" />}
      />
    </InputGroup>
  );
};

export default SearchInput;
