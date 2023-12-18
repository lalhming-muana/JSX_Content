// import react and reactDOM
import React from 'react';
import  ReactDOM  from 'react-dom/client';

//div ID root kha la chhuak rawh.
const el = document.getElementById('root');

// Let React control that element
const root = ReactDOM.createRoot(el);

// create a component
function App(){

    const inputType = "number";
    const minValue = 5;
    const maxValue = 15;
    return(
        <>
           <h1>Hi there</h1> 
           <input type={inputType} min={minValue} max={maxValue}/>
           <h1>Enter the age</h1>
           <input type={"number"}
                  min={0}
                  list={[1,2,3,4,5]}
                  style={{color: 'green', border: '3px solid red'}}  />
        </>
    );
} 

// component tihlan tur
root.render(<App />)