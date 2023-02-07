import { Flex } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Flex w="100%" bg={"black"} color={"white"} justifyContent={"space-between"} padding={"1rem"} >
      <NavLink to="/">Home</NavLink>
      <Flex justifyContent={"space-around"} gap="2rem">
      <NavLink to="/create">Create Blog</NavLink>
      <NavLink to="/myblog">My Blog</NavLink>
      <NavLink to="/profile">My Profile</NavLink>
      </Flex>
    </Flex>
  )
}

export default Navbar