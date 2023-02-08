import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const MyProfile = () => {
  let user= JSON.parse(localStorage.getItem("userInfo"))
  // console.log(user.user)
  return (
    <Box>
      <Box border="1px solid white" padding={"3rem"}>
            <Image boxSize={"200px"}  m="auto" src={user.user.photo}/>
      <Text color="white" textAlign={"center"}>{user.user.name}</Text>
      <Text color="white" textAlign={"center"}>{user.user.email}</Text>
          
            <Text></Text>
      </Box>
    </Box>
  )
}

export default MyProfile