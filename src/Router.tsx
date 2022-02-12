import * as React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Top from './Features/Top';
import Page1 from './Features/Page1';
import Page2 from './Features/Page2';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        {/* Not Found */}
        <Route element={() => <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;