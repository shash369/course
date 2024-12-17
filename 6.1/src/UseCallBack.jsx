import { useState } from "react"
export default function UseCallBack(){
  const [count,setCount]=useState(0);
    return (
        <div>
           <button onClick={()=>{
            setCount(count+1);
           }}> click me {count}</button>
        </div>
    )
}