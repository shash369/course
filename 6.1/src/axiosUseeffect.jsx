import axios from "axios"
import { useEffect,useState } from "react"
export default function AxiosUseefect(){
    let data=[
        {   id:1,
            name:"abcd" },
        {   id:2,
            name:"abcde"},
        {   id:3,
            name:"abcd"},
    ]
    function handler(){
        let newTodo={
            id:todo.length+1,
            name:"xyz"
        }
        settodo([...todo,newTodo])
    }
    const[todo,settodo]=useState(data);
    useEffect(() => {
        axios.get('https://randomuser.me/api/')
            .then(response => {
                settodo(response.data.results);
            })
            .catch(error => {
                console.error("Error fetching data", error);
            });
    },[]); 
    return (
        <>
         {todo.map(e=> <Todo key={e.id} val={e} />)}
         <button onClick={handler}>add todo</button>
        </>
    )
}
function Todo({val}){
    return(
        <>
          <h1> {val.id}</h1>
          <div>{val.name}</div>
        </>
    )
}