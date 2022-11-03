import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardPage } from '../pages/DashboardPage';
import { WriteNowPage } from '../pages/WriteNowPage';
import { ContatosPage } from '../pages/ContatosPage';
import { EmailsPage } from '../pages/EmailsPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/contatos" element={<ContatosPage />} />
        <Route path="/emails" element={<EmailsPage />} />
        <Route path="/write" element={<WriteNowPage />} />
      </Routes>
    </BrowserRouter>
  );
}
