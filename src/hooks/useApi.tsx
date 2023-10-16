import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // URL API
  withCredentials: true,
});

export const useApi = () => ({
  validate: async () => {
    const response = await api.post('/validate');

    if (response.data.user) {
      return response.data;
    } else {
      console.log('Token inválido');
    }
  },

  login: async (email: string, password: string) => {
    const response = await api.post('/admin/login', { email, password });
    return response.data;
  },

  logout: async () => { 
    const response = await api.post('/logout');
    return response.data;
  },

});