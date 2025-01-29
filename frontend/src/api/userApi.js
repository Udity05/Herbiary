
import axiosInstance from './axios';

const userApi = {
  signup: (data) => axiosInstance.post('/signup', data),
  login: (data) => axiosInstance.post('/login', data),
};

export default userApi;
