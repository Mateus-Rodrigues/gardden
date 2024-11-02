import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.67.23.34:3306',
    timeout: 10000
});

export default api;