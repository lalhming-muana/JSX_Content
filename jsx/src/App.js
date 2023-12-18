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
                  style={{color: 'green', border: '3px solid red'}}
                  alt={"message"}  />;
                 
            <div>
            <textarea autoFocus={true}/>;
            </div>
        </>
    )
}

export default App;