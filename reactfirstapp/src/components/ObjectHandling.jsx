import React, { useState } from 'react'

const ObjectHandling = () => {
    const [numbers, setNumbers] = useState([
        {id:1,age:24},
        {id:2,age:25},
        {id:3,age:28},
        {id:4,age:34},
    ]);
    const PlusTwo = () =>{
        setNumbers((prev)=>prev.map((row)=>({...row,age:row.age+2}))); 
    }
    
  return (
    <div>
        <h1>List of numbers :</h1>
        {
            numbers.map((value , index) => <span key={index}>{value}</span>)
        
        }
        <br />
            <button onClick ={PlusTwo}>change number</button>
        
    </div>
  );
};

export default ObjectHandling; 