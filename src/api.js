import axios from 'axios';
import Cookies from 'js-cookie';

export const headerWithToken = axios.create({
    baseURL: `${import.meta.env.VITE_URL}/api/v1`,
});

headerWithToken.interceptors.request.use((config) => {
    config.headers['x-auth-token'] = Cookies.get('token');
    config.headers['ngrok-skip-browser-warning'] = true;
    return config;
});
