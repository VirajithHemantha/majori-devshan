import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import AppSinhala from './AppSinhala.tsx';
import './index.css';

const path = window.location.pathname;
const isSinhala = path.toLowerCase().startsWith('/sinhala');

createRoot(document.getElementById('root')!).render(
  isSinhala ? <AppSinhala /> : <App />,
);
