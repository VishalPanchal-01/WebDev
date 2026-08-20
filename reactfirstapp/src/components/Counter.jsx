import React, { useState } from 'react'

const Counter = () => {
    const [nameObj, setName] = useState({id:1,name:"Vishal"});
    const changeName = (newName) =>{
        setName({...nameObj,name:newName}); 
    }
    
  return (
    <div>
        <h1>Name : {nameObj.name}</h1>
        <button onClick={()=>changeName("Kiet mca")}>Change Name</button>
        
    </div>
  );
};

export default Counter; 