import { Box, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { getData } from '../Api/Api'

const MyBlog = () => {
  let user= JSON.parse(localStorage.getItem("userInfo"))
  let userId= user.user._id
  // console.log(userId)
  const [data,setData]= useState()
  useEffect(()=>{
    getData(`blog?userId=${userId}`).then(res=>setData(res.data.data))
  },[])
  return (
    <Box>
      {/* box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px; */}
      {data?.map(el=>(
        <Box key={el._id}  w="80%" m="auto" mb="1rem" boxShadow={"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}>
         <Box key={el._id} color={"white"} marginBottom={"2rem"}>
            <Text>{el.title}</Text>
            <Image w='80vw' h={"20vh"} src="https://www.shutterstock.com/image-photo/assortment-various-barbecue-vegan-food-260nw-1738904081.jpg"/>

            <Text>{el.content}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default MyBlog