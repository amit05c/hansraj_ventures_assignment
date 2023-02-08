import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from "@chakra-ui/toast";
import { useNavigate } from 'react-router-dom';
import { createuser } from '../Api/Api';
const Signup = () => {
    const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [password, setPassword] = useState();
    const [address,setAddress]= useState()
    const [pic, setPic] = useState();
    const [picLoading, setPicLoading] = useState(false);
    const toast= useToast()
    const navigate= useNavigate()
    const postDetails = (pics) => {
        
        setPicLoading(true);
        if (pics === undefined) {
          toast({
            title: "Please Select an Image!",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          return;
        }
        console.log(pics);
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
          const data = new FormData();
          data.append("file", pics);
          data.append("upload_preset", "connect_app");
          data.append("cloud_name", "amitconnectapp");
          fetch("https://api.cloudinary.com/v1_1/amitconnectapp/image/upload", {
            method: "post",
            body: data,
          })
            .then((res) => res.json())
            .then((data) => {
              setPic(data.url.toString());
              console.log(data.url.toString());
              setPicLoading(false);
            })
            .catch((err) => {
              console.log(err);
              setPicLoading(false);
            });
        } else {
          toast({
            title: "Please Select an Image!",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          setPicLoading(false);
          return;
        }
      };


      const submitHandler = async () => {
        setPicLoading(true);
        if (!name || !email || !password || !confirmpassword || !address) {
          toast({
            title: "Please Fill all the Feilds",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          setPicLoading(false);
          return;
        }
        if (password !== confirmpassword) {
          toast({
            title: "Passwords Do Not Match",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          return;
        }
        console.log(name, email, password, pic);
        try {
          const { data } = await createuser(
            "user/signup",
            {
              name,
              email,
              password,
              address,
              photo:pic,
            },
    
          );
          console.log(data.data.user);
          toast({
            title: "Registration Successful",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
        //   localStorage.setItem("userInfo", JSON.stringify(data.data.user));
        //   localStorage.setItem("isAuth",JSON.stringify("true"))
          setPicLoading(false);
           navigate("/login")
        } catch (error) {
          toast({
            title: "Error Occured!",
            description: error.response.data.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          setPicLoading(false);
        }
      };
  return (
    <VStack spacing="5px" bg={"white"} w="50%" m="auto" padding={"2rem"}>
        <Text fontSize={"4xl"}>CREATE ACCOUNT</Text>
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
           onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
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

      <FormControl id="confirmpassword" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
             type={show ? "text" : "password"}
            placeholder="Confirm password"
             onChange={(e) => setConfirmpassword(e.target.value)}
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

      <FormControl id="address" isRequired>
        <FormLabel>Address</FormLabel>
        <Input
          type="text"
          placeholder="Enter Your Address"
           onChange={(e) => setAddress(e.target.value)}
        />
      </FormControl>

      <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
           onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
         onClick={submitHandler}
         isLoading={picLoading}
      >
        Sign Up
      </Button>
    </VStack>
  
  )
}

export default Signup