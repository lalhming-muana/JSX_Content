// import react and reactDOM
import React from 'react';
import  ReactDOM  from 'react-dom/client';

//div ID root kha la chhuak rawh.
const el = document.getElementById('root');

// Let React control that element
const root = ReactDOM.createRoot(el);

// create a component
function App(){
    let message = "bye there";
    if(Math.random()>0.5){
        message ="a condition a dik e";
        //variable ah hian string leh number chauh hman tur. A dang chu a diklo ang.
        //object phei chu a diklo lehzual ang
    }
    return(
        <>
           <h1>Hi there</h1> 
           <h1>{message}</h1>
        </>
    );
} 

// component tihlan tur
root.render(<App />)