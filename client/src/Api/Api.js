import axios from "axios"
import { baseUrl } from "../BaseUrl/baseUrl"
export const getData= ()=>{
   return axios(`${baseUrl}/blog`)
}