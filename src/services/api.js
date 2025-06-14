import axios from 'axios';

// Create an Axios instance with a base URL pointing to your Spring Boot backend
const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Ensure backend runs on this URL
});

// Automatically attach JWT token to every request, if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// ✅ API to fetch portfolio overview
export const getPortfolioOverview = () => {
  return api.get('/portfolio/overview');
};

// You can similarly add more APIs here:
export const buyStock = (data) => {
  return api.post('/portfolio/buy', data);
};

export const sellStock = (data) => {
  return api.post('/portfolio/sell', data);
};

export const getTransactionHistory = () => {
  return api.get('/transactions');
};

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  

export default api;
