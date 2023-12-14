import { Box, 
    Flex, 
    Text, 
    Image as ChakraImage, 
    VStack,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Button,
    Heading,
    Stack,
    Link,
    useColorModeValue
 } from "@chakra-ui/react";
import loginImage from '../assets/login-image.png';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/config";


export default function SignUpPage() {
    const nav = useNavigate()
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const handleSignUp = async()=>{
        let data = await axios.post(BASE_URL+"/user/register", {
            name, email, password
        })
        let { message, token, status } = data.data;
        if(status === 1){
            alert(message)
            nav("/login")
        } else {
            alert(message)
        }
    
        }

  return (
      <Flex padding={4} w="100%" alignItems="center">
        {/* Image Section */}
        <VStack w={"50%"} spacing="4" alignItems="flex-start">
        <ChakraImage
          wi={"50%"}
          src={loginImage}
          alt="Login Image"
          boxSize="600px"
          mb="4"
        ></ChakraImage>
        <Text fontSize="sm" mt="2" color="gray.500">
          <a href="https://lovepik.com/images/png-password.html">
            Password Png vectors by Lovepik.com
          </a>
        </Text>
        </VStack>

        {/* Form Section */}
        <VStack w={"50%"} spacing="4">
        <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign up for an account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'teal.400'}>features</Link> 
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <FormControl id="name">
              <FormLabel>Username</FormLabel>
              <Input value={name} onChange={(e)=>setName(e.target.value)} type="text" />

            </FormControl> 
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
            </FormControl> 
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
              </Stack>
              <Button
              onClick={handleSignUp}
                bg={'teal.400'}
                color={'white'}
                _hover={{
                  bg: 'teal.500',
                }}>
                Sign Up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
        </VStack>
      </Flex>
  )
            }