import axios from "axios";

const api = axios.create({
  baseURL: "https://task-manager-backend-three-amber.vercel.app/",
  withCredentials: true, 
});

export default api;
