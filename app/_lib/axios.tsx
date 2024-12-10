import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.RAPID_API_URL,
  timeout: 1000,
  headers: {
    "x-rapidapi-host": process.env.RAPID_API_HOST,
    "x-rapidapi-key": process.env.RAPID_API_KEY,
  },
});

export default axiosInstance;
