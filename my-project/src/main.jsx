import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {Routes, Route, HashRouter } from 'react-router-dom';
import './index.css';

import Login from './Login';
import Motorcycles from './Motorcycles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/motorcycles" element={<Motorcycles />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
