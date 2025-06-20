import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom'; // ✅ Import this

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ✅ Use this

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', { username, password });
      const { token } = response.data;
      localStorage.setItem('token', token); // ✅ Store token
      alert('Login successful!');
      navigate('/portfolio'); // ✅ Redirect to Portfolio page
    } catch (error) {
      alert('Login failed: ' + (error.response?.data?.message || 'Server error'));
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
