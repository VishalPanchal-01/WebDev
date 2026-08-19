import React, { useState } from 'react'

const Counter = () => {
    const [name, setName] = useState("Vishal");
    const changeName = (newName) =>{
        setName(newName); 
    }
    
  return (
    <div>
        <h1>Name : {name}</h1>
        <button onClick={()=>changeName("Kiet mca")}>Change Name</button>
    </div>
  );
};

export default Counter;