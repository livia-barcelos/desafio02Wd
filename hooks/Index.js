import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Se você quiser adicionar estilos globais (opcional)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
