import axios from 'axios';
export default function axiosConfig(token) {
  const instance = axios.create({
    baseURL: 'http://178.18.250.76:85/api/'
  });
  (function () {
    if (token) {
      instance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } else {
      delete instance.defaults.headers.common['Authorization'];
    }
  })();
  return instance;
}
