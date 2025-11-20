import axios from "axios";


const axiosInstance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' 
        ? `${process.env.VITE_API_URL}/api` 
        : 'http://localhost:5000/api',
    withCredentials: true
})

export default axiosInstance
