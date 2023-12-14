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
    useColorModeValue,
 } from "@chakra-ui/react";
import loginImage from '../assets/login-image.png';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../Redux/users/user.actions";


export default function LoginPage() {
    const nav = useNavigate()
    const {auth, token, loading, error} = useSelector((state)=>state.userReducer)
    console.log(auth, token)
    useEffect(() => {
       if(auth){
          nav("/notes")
       }
    }, [auth, nav]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleLogin =()=>{
      dispatch(getUser({ email, password }))  
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
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
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
                <Checkbox>Remember me</Checkbox>
                <Link color={'teal.400'}>Forgot password?</Link>
              </Stack>
              <Button
              onClick={handleLogin}
                bg={'teal.400'}
                color={'white'}
                _hover={{
                  bg: 'teal.500',
                }}>
                Sign in
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