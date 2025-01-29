
import axiosInstance from './axios';

const gardenApi = {
  getPlants: () => axiosInstance.get('/plants'),
  getPlantDetails: (id) => axiosInstance.get(`/plants/${id}`),
};

export default gardenApi;
