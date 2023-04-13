import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import ScrollTop from "./components/scroll-top/ScrollTop"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollTop/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

