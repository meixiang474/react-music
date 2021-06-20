import axios from "axios";

export const baseURL = "http://47.97.249.134:3000";

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log("Error: net", err);
    return Promise.reject(err);
  }
);

export { axiosInstance };
