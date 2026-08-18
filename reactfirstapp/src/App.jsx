import React from 'react'

const App = () => {
    let count = 0;
    function incremenet(){
        count++
    }
    function decrement(){
        count--
    }
    function clickMe(){
        alert('Welcome to react Event Handling');
    }
  return (
    <div>
        <button onClick={clickMe}> click Me</button>
        <button onClick = {incremenet}> Click for Increment</button>
        <h1>{count}</h1>
        <button onclick = {decrement}> Click for Decrement</button>
    </div>
  );
};

export default App