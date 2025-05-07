import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "https://goal-server-hd36.onrender.com/goals",
});