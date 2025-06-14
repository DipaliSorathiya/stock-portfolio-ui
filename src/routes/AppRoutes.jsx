import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import PortfolioOverviewPage from '../pages/PortfolioOverviewPage';  // adjust path as needed


export default function AppRoutes() {
  return (
    <Routes>
      {/* 🔁 Redirect root "/" to "/login" */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* ✅ Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/portfolio" element={<PortfolioOverviewPage />} />
    </Routes>
  );
}
