import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from "@chakra-ui/toast";
import { useNavigate } from 'react-router-dom';
import { createBlog } from '../Api/Api';
const CreateBlog = () => {
  const [title,setTitle] = useState();
  const [resturant,setResturant] = useState();
  const [content,setContent] = useState();
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

  const submitHandler= async()=>{
    if(!title || !resturant || !content || !address || !pic ){
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return
    }
    
    try {
      let user= JSON.parse(localStorage.getItem("userInfo"))
      let token= user.token
      // console.log(token)
      const { data } = await createBlog(
        "blog/create",
        {
        
          title,
          resturant,
          content,
          address,
          photo:pic
        },
       token
      );
      console.log(data.data.blog);
      toast({
        title: "Blog Created",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      
   
       navigate("/")
    } catch (error) {
      console.log(error)
      toast({
        title: "Error Occured!",
        description: error.response,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

    }

  }

  return (
    <VStack spacing="5px" bg={"white"} w="50%" m="auto" padding={"2rem"}>
      <Text fontSize={"4xl"}>CREATE BLOG</Text>
      <FormControl id="title" isRequired>
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          placeholder="Enter Blog title"
           onChange={(e) => setTitle(e.target.value)}
        />
      </FormControl>

      <FormControl id="resturant" isRequired>
        <FormLabel>Resturant Name</FormLabel>
        <InputGroup size="md">
          <Input
             
             placeholder="Enter Password"
             onChange={(e) => setResturant(e.target.value)}
          />
          
        </InputGroup>
      </FormControl>


      <FormControl id="content" isRequired>
        <FormLabel>Content</FormLabel>
        <InputGroup size="md">
          <Input
             
             placeholder="write some content"
             onChange={(e) => setContent(e.target.value)}
          />
          
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
        Create
      </Button>
    </VStack>
  
  )
}

export default CreateBlog