import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://datacenter.api.staging.evisit.ng/api/v1/',
    headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("userEmail")}`
    },
});

instance.interceptors.request.use(
    async config => {
      config.headers = { 
        'Authorization': `Bearer ${sessionStorage.getItem("userEmail")}`,
      }
      return config;
    },
    error => {
      Promise.reject(error)
  });

export default instance;