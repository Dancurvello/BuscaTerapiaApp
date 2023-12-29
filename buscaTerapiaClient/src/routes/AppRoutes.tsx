// Routes.tsx
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/login/LoginPage';
import HomePage from '../pages/home/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
