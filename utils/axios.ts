import axios from 'axios';

axios.defaults.headers.common['Authorization'] = ('Bearer ' +
  process.env.NEXT_PUBLIC_TOKEN) as string;
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL as string,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    )
);

export default axiosInstance;
