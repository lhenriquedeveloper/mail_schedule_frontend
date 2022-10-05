import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardPage } from '../pages/DashboardPage';
import { WriteNowPage } from '../pages/WriteNowPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/write" element={<WriteNowPage />} />
      </Routes>
    </BrowserRouter>
  );
}
