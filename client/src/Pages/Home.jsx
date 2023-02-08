import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { getData } from "../Api/Api";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);
  let isAuth= JSON.parse(localStorage.getItem("isAuth"))
  const navigate= useNavigate()
  useEffect(() => {
    getData("blog")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(data)

  const handleLogout =()=>{
    localStorage.removeItem("userInfo")
    localStorage.removeItem("isAuth")
    navigate("/")
  }
  return (
    <Box>
      <Flex color={"white"} justifyContent={"flex-end"} gap={"1rem"}>
      {isAuth ? <Button onClick={handleLogout} marginRight="1rem" colorScheme='red'>Logout</Button> : <Button colorScheme='blue'onClick={()=>navigate("/login")}>Login</Button>  } 
       {!isAuth && <Button colorScheme='green' onClick={()=>navigate("/signup")}>Create</Button> }
      </Flex>
      <Box bg="white" w="30%" m="auto">
        <Input placeholder="search prduct" />
      </Box>
   
      <Box>
        {/* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */}
        {data.map(el=>(
          <Box key={el._id} color={"white"}  w="80%" m="auto">
            <Image  boxSize={"50px"} src={el.userId.photo} borderRadius={"50%"}/>
            <Text>{el.userId.name}</Text>

            <Box boxShadow={"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"} border={"3px solid white"} mb={"2rem"} padding={"2rem"}>
            <Text>{el.title}</Text>
            <Image w='80vw' h={"20vh"} src={el.photo}/>

            <Text>{el.content}</Text>
            </Box>
            
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
