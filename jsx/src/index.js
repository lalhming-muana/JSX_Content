// import react and reactDOM
import React from 'react';
import  ReactDOM  from 'react-dom/client';

//div ID root kha la chhuak rawh.
const el = document.getElementById('root');

// Let React control that element
const root = ReactDOM.createRoot(el);

// create a component
function App(){
    let message = "A condition a diklo e";
    let m1 ='this is the first variable';
    let m2 = 'this is the second variable';
    if(Math.random()>0.5){
        message ="A condition a dik e";
        //variable ah hian string leh number chauh hman tur. A dang chu a diklo ang.
        //object phei chu a diklo lehzual ang
        }

    let date = new Date();
    let time = date.toLocaleTimeString();
    return(
        <>
           <h1>Hi there</h1> 
           <h1>{message}</h1>
           <h1>{time}</h1>
           <h2>this is the multiple variable code: var1: {m1} and var2:{m2}</h2>
        </>
    );
} 

// component tihlan tur
root.render(<App />)