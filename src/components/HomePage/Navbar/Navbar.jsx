import React from 'react';
import { Flex, 
  Box, 
  Text, 
  Button, 
  IconButton, 
  Image, 
  Menu, 
  MenuButton, 
  MenuList, 
  MenuItem, 
  MenuDivider, 
  useColorMode 
} from '@chakra-ui/react';
import { SunIcon, MoonIcon, ChevronDownIcon } from '@chakra-ui/icons';

export default function NavBar () {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1.5rem"
      bg="teal.500"
      color="white"
    >
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          Kosile 
        </Text>
      </Flex>

      <Box>

        <Button variant="ghost" color="white" mr="4">
          My Notes
        </Button>

        <Button variant="ghost" color="white" mr="4">
          Sign Up  
        </Button>

        <Button variant="ghost" color="white">
          Login
        </Button>
      </Box>

      <Menu>
        <MenuButton
          as={Button}
          variant="link"
          border="2px solid white"
          padding="2"
          color="black"
          cursor="pointer"
          rightIcon={<ChevronDownIcon />}
        >
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </MenuList>
      </Menu>

      <IconButton
        ml="4"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant="ghost"
        color="white"
        aria-label="Toggle Dark Mode"
      />
    </Flex>
  );
};
