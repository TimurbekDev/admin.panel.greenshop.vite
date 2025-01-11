import axios from "axios";
import { BASE_URL } from "./getEnv";

export const customAxios = axios.create({
    baseURL:BASE_URL
});

customAxios.interceptors.response.use((res)=>{
    console.log(res)
    return res
},(error)=>{
    console.log(error)
})