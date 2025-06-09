import axios from 'axios';

// Create an Axios instance with a base URL pointing to your Spring Boot backend
const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Make sure your backend is running at this address
});

// Automatically attach JWT token to every request, if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Retrieve token from browser storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Add Authorization header
  }
  return config;
}, (error) => {
  return Promise.reject(error); // Handle request errors
});

export default api;
