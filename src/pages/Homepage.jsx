import { Box, Image as ChakraImage, Heading, Text } from "@chakra-ui/react";
import { NavBar } from "../components/HomePage/Navbar";
import welcomeImage from "../assets/welcome-image.jpg";


export default function Homepage() {

    return (
      <Box p="8" textAlign="center">
        <ChakraImage src={welcomeImage} alt="Welcome Image" boxSize="100%" />
        <Heading as="h1" fontSize="32px" mb="8">
            Welcome to Kosile!
        </Heading>
        <Text>
            Organize your thoughts and increase productivity.
        </Text>
        Kosile is a note taking application that allows you to make plans and organize. 
      </Box>
    );

}