import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://burger-builder-613c1.firebaseio.com/",
});

export default axiosInstance;
