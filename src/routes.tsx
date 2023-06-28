import React from 'react';
import { BrowserRouter, Routes as ReactRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRouter>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </ReactRouter>
    </BrowserRouter>
  );
};
