import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/css/font-awesome-5.9.0.css";
import "./assets/css/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/dist/js/bootstrap.bundle';
import "./assets/css/all-css-libraries.css";
// import "./assets/css/e_slick.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './assets/sass/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

