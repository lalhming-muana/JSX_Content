// import react and reactDOM
import React from 'react';
import ReactDOM  from 'react-dom/client';
import App from './App';

//div ID root kha la chhuak rawh.
const el = document.getElementById('root');

// Let React control that element
const root = ReactDOM.createRoot(el);

// component tihlan tur
root.render(<App />)