import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Login from './Login';
import Motorcycles from './Motorcycles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/motorcycles" element={<Motorcycles />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
