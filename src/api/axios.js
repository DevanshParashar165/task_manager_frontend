import axios from "axios";

const api = axios.create({
  baseURL: "https://task-manager-backend-three-amber.vercel.app/api/v1",
  withCredentials: true, 
});

export default api;
