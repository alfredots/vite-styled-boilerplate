import { BrowserRouter, Routes as ReactRouter, Route } from 'react-router-dom';

import { About } from './pages/About';
import { Home } from './pages/Home';

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
