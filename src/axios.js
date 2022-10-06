import Axios from 'axios';

const apiUrl = process.env.REACT_APP_ENVIRONMENT == "PRODUCTION" ? process.env.REACT_APP_PRODUCTION_BACKEND_URL : process.env.REACT_APP_DEVELOPMENT_BACKEND_URL;

Axios.defaults.baseURL = `${apiUrl}/api/v1`;

Axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        config.headers.common['Access-Control-Allow-Origin'] = '*'; 
        config.headers.common['Accept'] = 'application/json';
        config.headers.common['Content-Type'] = "multipart/form-data";
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

Axios.interceptors.response.use((response) => {
    return response;
    },
    function (error) {
        if (error.response.status === 401) {
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('userToken')
            localStorage.removeItem('userType')
            window.location.reload();
        }  
    return Promise.reject(error)
})