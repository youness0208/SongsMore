import axios from "axios";

export const deezerApi = axios.create({
  baseURL: "http://localhost:3001",
});