import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './normalize.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Content />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
