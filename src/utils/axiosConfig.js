import axios from 'axios';

export default function axiosConfig(token) {
  const instance = axios.create({
    baseURL: 'https://localhost:44377/api/'
  });
  (function () {
    if (token) {
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      delete instance.defaults.headers.common.Authorization;
    }
  })();
  return instance;
}
