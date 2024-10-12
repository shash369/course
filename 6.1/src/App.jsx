import { useState } from "react"
function App() {
  const[name,changeName]=useState("shashwat")
  
  // function handleChange(){
  
  // }

  return (
    <div>
       <Header title={`hello i am ${name}`} des={"hello this this is data"}/>
          <button onClick={()=>{
              changeName(Math.random()*10)
          }}>click me to change the data</button>
          <p>hello</p>

          <HeaderWithButton></HeaderWithButton>
    </div>
  )
}

function Header(props){
  return(
    <div>
         <p>{props.title}</p>
         <p>{props.des}</p>
    </div>
  )
}

function HeaderWithButton(){
  const[data,changeData]=useState(15);

  return(
    <>  
       <p>value of data is {data}</p>

        <button onClick={()=>{
          changeData(data+10)
        }}>click to increse the value</button>
    </>
  )
}
export default App
