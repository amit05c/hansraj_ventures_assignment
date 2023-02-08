import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from "@chakra-ui/toast";
import { useNavigate } from 'react-router-dom';
import { login } from '../Api/Api';
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const toast= useToast()
    const navigate= useNavigate()
    const submitHandler = async () => {
    
        if (!email || !password) {
          toast({
            title: "Please Fill all the Feilds",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
        
          return;
        }
        
        console.log(email, password);
        try {
          const { data } = await login(
            "user/login",
            {
            
              email,
              password
            },
    
          );
          console.log(data.data.user);
          toast({
            title: "Login Successful",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          let userInfo={
            user: data.data.user,
            token: data.data.token
          }
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      localStorage.setItem("isAuth",JSON.stringify("true"))
           navigate("/")
        } catch (error) {
          toast({
            title: "Error Occured!",
            description: error.response.data.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
    
        }
      };

  return (
    <VStack spacing="5px" bg={"white"} w="50%" m="auto" padding={"2rem"} marginTop={"2rem"}>
       <Text fontSize={"4xl"}>LOGIN</Text>
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          placeholder="Enter Your Email Address"
           onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
             type={show ? "text" : "password"}
             placeholder="Enter Password"
             onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm"
            onClick={handleClick}
             >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

         
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
          onClick={submitHandler}
        //  isLoading={picLoading}
      >
        LOGIN
      </Button>
    </VStack>
  
  )
}

export default Login