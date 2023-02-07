import { Box, Flex, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getData } from '../Api/Api'

const Home = () => {
const [data,setData]= useState([])
  useEffect(()=>{
    getData().then(res=>setData(res.data.data)).catch(err=>console.log(err))
  },[])
  return (
    <Box>
      <Flex color={"white"} justifyContent={"flex-end"} >
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Create</NavLink>
      </Flex>
      <Box bg="white" w="30%" m="auto">
      <Input placeholder='search prduct' />
      </Box>
       
       <Box>

       </Box>
    </Box>
  )
}

export default Home