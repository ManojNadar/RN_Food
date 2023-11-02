import axios from "axios";

let api = axios.create({
  baseURL: "http://192.168.0.107:8000",
});

export default api;
