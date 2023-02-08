import React from 'react'
import { Navigate } from 'react-router-dom'
// import {history} from "react-router-dom"
const ReqAuth = ({children}) => {
    let isAuth= JSON.parse(localStorage.getItem("isAuth"))
    if(isAuth){
        return children
    }else {
   return <Navigate to="/login"/>
    }
 
}

export default ReqAuth