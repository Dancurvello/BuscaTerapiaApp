// Routes.tsx
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import HomePage from "../pages/home/HomePage";
import RegisterPage from "../pages/register/RegisterPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AppRoutes;
