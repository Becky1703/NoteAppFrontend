import React from 'react';
import {
  Flex,
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
  useColorMode,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import { SunIcon, MoonIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../../Redux/users/user.types';

/**
 * NavBar Component:
 * This component is used to display the navigation bar at the top of the page.
 * It contains the name of the app, sign in button, signup button and a color mode toggle button.
 * It uses the Chakra UI library to style the components.
 */
export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode(); 
  const nav = useNavigate() 
  const dispatch = useDispatch() 
  const { auth, token, loading, error } = useSelector((state) => state.userReducer)

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
        <Text fontSize="xl" fontWeight="bold" cursor={"pointer"} onClick={() => {
          nav("/")
        }}>
          Kosile
        </Text>
      </Flex>

      <Flex alignItems={'center'}>
        <Stack alignItems={"center"} direction={'row'} spacing={7}></Stack>
        <Button display={auth==true?"block":"none"} variant="ghost" color="white" mr="4" onClick={() => {
          nav("/notes")
        }}>
          My Notes
        </Button>

        <Button display={auth==true?"none":"block"} variant="ghost" color="white" mr="4" onClick={() => {
          nav("/register")
        }}>
          Sign Up
        </Button>

        <Button display={auth==true?"none":"block"} variant="ghost" color="white" mr="4" onClick={() => {
          nav("/login")
        }}>
          Login
        </Button>


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
          <MenuList bg={useColorModeValue("teal", "teal.800")} color={useColorModeValue("black", "white")} >
            <MenuItem>Settings</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem onClick={() => {
              dispatch({ type: LOGOUT })
            }}>Logout</MenuItem>
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
  </Flex >
  );
};
