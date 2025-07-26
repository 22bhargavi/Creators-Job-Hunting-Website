// src/routes.tsx
import { Routes, Route } from "react-router-dom";
import Job from "./Pages/Job";
import Explore from "./Pages/Explore";
import App from "./App";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/jobs" element={<Job />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
};

export default AppRoutes;
