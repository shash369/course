import { useState } from "react"

export default function Try(){
    const [valueA,ChangeA]=useState(0);
    const [valueB,ChangeB]=useState(0);
    function handle(val){
        ChangeA(parseFloat(val.target.value) || 0);  
    }
    function handle2(val){
        ChangeB(parseFloat(val.target.value) || 0);
    }
    let total = valueA + valueB;
    return (<>
      enter the value of the a<input type="number" onChange={handle}/>
      enter the value of the ab<input type="number" onChange={handle2}/>

      <h4>total is {total}</h4>
    </>)
}