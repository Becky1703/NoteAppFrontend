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
import { useNavigate } from 'react-router-dom';

export default function NavBar () {
  const { colorMode, toggleColorMode } = useColorMode();
  const nav = useNavigate()

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
        <Text fontSize="xl" fontWeight="bold" cursor={"pointer"}  onClick={() => {
          nav("/")
        }}>
          Kosile 
        </Text>
      </Flex>

      <Box>

        <Button variant="ghost" color="white" mr="4" onClick={() => {
          nav("/notes")
        }}>
          My Notes
        </Button>

        <Button variant="ghost" color="white" mr="4" onClick={() => {
          nav("/register")
        }}>
          Sign Up  
        </Button>

        <Button variant="ghost" color="white" mr="4" onClick={() => {
          nav("/login")
        }}>
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
