import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from 'next/router'

const axiosInstance = axios.create({
    baseURL: 'https://dev.api.portoapp.id'
})

axiosInstance.interceptors.request.use(
    config => {
        const token = Cookies.get("access_token");
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        // config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        Promise.reject(error)
    });

axiosInstance.interceptors.response.use((response) => {
    return response
}, function (error) {
    const originalRequest = error.config;
    const router = useRouter()
    if (error.response.status === 401 && originalRequest.url ===
        'https://dev.api.portoapp.id/api/internal/auth/refresh') {
        router.push('/login');
        return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {

        originalRequest._retry = true;
        const refreshToken = Cookies.get("refresh_token");
        return axios.post('/api/internal/auth/refresh',
            {
                "refresh_token": refreshToken
            })
            .then(res => {
                if (res.status === 201) {
                    Cookies.set("access_token", res.data.accessToken);
                    Cookies.set("refresh_token", res.data.refreshToken)
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + Cookies.get("access_token");
                    return axios(originalRequest);
                }
            })
    }
    return Promise.reject(error);
});

export default axiosInstance;