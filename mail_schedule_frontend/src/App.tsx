import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './routes';
import { AppContext } from './contexts/index';
export default function App() {
  return (
    <AppContext>
      <ToastContainer autoClose={3000} />
      <AppRoutes />
    </AppContext>
  );
}
