import React, { useState } from "react"


export default function Memo(){
    const [name ,changeName]=useState("shashwat");
  return(
    <div>
        <p>hello</p>
        <button onClick={()=>{
            changeName(Math.random());
        }}>click to change</button>

        <Header title={name} />
        
    </div>
  ) 
}

const Header=React.memo(function Header(props){
   return(
    <p>
    my name is {props.title}
    </p>
   )
})