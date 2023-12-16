// import react and reactDOM
import React from 'react';
import  ReactDOM  from 'react-dom/client';

//div ID root kha la chhuak rawh.
const el = document.getElementById('root');

// Let React control that element
const root = ReactDOM.createRoot(el);

// create a component
function App(){
    return <h1>I dam maw</h1>
} 

// component tihlan tur
root.render(<App />)