/*In React, using key props when rendering lists is crucial for several reasons:
Performance Optimization: 
 */
import { useState } from "react"
const todo=[
  {
    id:1,
    title:"hello",
    descrption:"hello world"
  },
  {
    id:2,
    title:"jai",
    descrption:"jai hind"
  },
  { 
    id:3,
    title:"vande",
    descrption:"vande bharat"
  },]
export default function Keys(){
  const [todos,setTodo]=useState(todo);
  const todoHandeler=()=>{
   const newTodo={
    id:todos.length+1,
    title:Math.random(),
    descrption:Math.random()
   }
   setTodo([...todos,newTodo]);
  }
    return(
    <>
      {todos.map(e=> <TodoFun key={e.id} val={e} /> )}

        <button onClick={todoHandeler}>click me to add todo</button> 
    </>
 )
}
function TodoFun({val}){
  return(
    <div>
      <h4> {val.id}::{val.title}</h4>
      <p>{val.descrption}</p>
    </div>
  )
}
