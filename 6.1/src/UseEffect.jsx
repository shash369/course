import { useEffect, useState } from "react"

export default function Hooks(){
  const [todos,setTodo]=useState([]);
  const [counter,setCount]=useState(1);

   useEffect(()=>{
    fetch('https://dummyjson.com/todos/random')
    .then(res => res.json())
    .then(data=>setTodo([data]));
   },[counter])

    return (
    <>
    {todos.map(e=>

        <TodoP key={e.id} val={e} />    
    )}

    <button onClick={()=>{
        setCount(counter+1);
    }}>
        click to add todo
    </button>
    </>)
}

function TodoP({val}){
    return(
        <>
        <h4>
            {val.id}
        </h4>
          <p>
           {val.todo}
          </p>
          <p>
          <p>{val.completed ? "Completed" : "Not Completed"}</p>
          </p>
        </>
    )
}