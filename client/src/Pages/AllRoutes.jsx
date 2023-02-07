import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import CreateBlog from './CreateBlog'
import MyBlog from './MyBlog'
import MyProfile from './MyProfile'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreateBlog/>}/>
        <Route path='/myblog' element={<MyBlog/>}/>
        <Route path='/profile' element={<MyProfile/>}/>
    </Routes>
  )
}

export default AllRoutes