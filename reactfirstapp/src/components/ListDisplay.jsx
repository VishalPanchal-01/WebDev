const Info =()=>{
  return <h1>This is my Arrow function.</h1>
};
 
function ListDisplay(){
  let name = "KIET MCA";
  let listInfo = {
    id :1,
    name : "vishal",
    class : "Web Dev",
  }
  let arr = [
    {id:1 , name :"java",scope:50},
    {id:2 ,name:"python",scope:40},
    {id:3,name:"javascript",scope:30},
    {id:4,name:"kotlin",scope:20}
  ]

  let arr2 = [
    {id:1,name:'Vishal',scope:50},
    {id:2 ,name:'Sarthak',scope:50},
    {id:3 , name:'Sumit',scope:50},
    {id:4 , name: 'Ujjwal',scope:50}
  ]

  return (
    <div>
      <h1>Welcome to React JS</h1>
      <h1>Id:{listInfo.id}</h1>
      <h1>Name:{listInfo.name}</h1>
      <h1>Class:{listInfo.class}</h1>
      <h1>in {name}</h1>
      <h1>welcome to list of languages: </h1>
      {
        arr.map((langObj)=> {
          return <li key ={langObj.id}>{langObj.id}. Name:{langObj.name}=Scope:{langObj.scope}</li>
        })
      }
      <br />
      {
        arr2.map((arrInfo)=>{
          return <li key ={arrInfo.id}>{arrInfo.id}. Name: {arrInfo.name} = Scope : {arrInfo.scope}</li>
        })
      }
    </div>
  )
};

// export default App;

export {App,Info};