import React, { useState } from 'react'

const CountNumber = () => {
    const [count, setCount] = useState(0);
    function incremenet(){
        setCount((prev) => prev + 1); 
    }
    function decrement(){
        setCount((prev) => prev - 1);
    }
    function clickMe(){
        alert('Welcome to react Event Handling');
    }
  return (
    <div>
        <button onClick={clickMe}> click Me</button>
        <button onClick = {incremenet}> Click for Increment</button>
        <h1>{count}</h1>
        <button onClick = {decrement}> Click for Decrement</button>
    </div>
  );
};

export default App