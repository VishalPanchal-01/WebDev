import React, { useState } from 'react'

const ArrayHandling = () => {
    const [numbers, setNumbers] = useState([1,2,3,4,5]);
    const changeNumber = () =>{
        setNumbers(numbers.map((value)=>value+2)); 
    }
    
  return (
    <div>
        <h1>List of numbers :</h1>
        {
            numbers.map((value , index) => <span key={index}>{value}      </span>)
        
        }
        <br />
            <button onClick ={changeNumber}>change number</button>
        
    </div>
  );
};

export default ArrayHandling; 