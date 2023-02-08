import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import CreateBlog from './CreateBlog'
import MyBlog from './MyBlog'
import MyProfile from './MyProfile'
import Login from './Login'
import Signup from './Signup'
import ReqAuth from '../ReqAuth/ReqAuth'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<ReqAuth><CreateBlog/></ReqAuth> }/>
        <Route path='/myblog' element={ <ReqAuth><MyBlog/></ReqAuth>  }/>
        <Route path='/profile' element={<ReqAuth><MyProfile/></ReqAuth>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}

export default AllRoutes