import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Success from './Success.jsx';
import './scss/main.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/guap-tp-form" element={<App />} />
        <Route path="/guap-tp-form/success" element={<Success />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>,
)
