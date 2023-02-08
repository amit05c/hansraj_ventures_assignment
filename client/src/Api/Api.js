import axios from "axios"
import { baseUrl } from "../BaseUrl/baseUrl"
export const getData= (endpoint)=>{
   return axios(`${baseUrl}/${endpoint}`)
}

export const createuser=(endpoint,data)=>{
   const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
   return axios.post(`${baseUrl}/${endpoint}`,data,config)
}

export const login= (endpoint,data)=>{
   const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
   return axios.post(`${baseUrl}/${endpoint}`,data,config)
}


export const createBlog=(endpoint,data,token)=>{
   const config = {
      headers: {
         Authorization: `Bearer ${token}`,
      },
    };
   return axios.post(`${baseUrl}/${endpoint}`,data,config)
}