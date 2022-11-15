import AppRoutes from './routes';
import { AppContext } from './contexts/index';
export default function App() {
  return (
    <AppContext>
      <AppRoutes />
    </AppContext>
  );
}
