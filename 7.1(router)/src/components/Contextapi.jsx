import { useState } from 'react'

function Contextapi() {
    const[count,setCount]=useState(0);
  return (
   <>
       <div>Contextapi</div>
       <Count count={count} setCount={setCount} />
   </>
  )
}

function Count({count,setCount}){
    return(
        <div>
             <CountRender count={count}></CountRender>
             <Buttons count={count} setCount={setCount} />
        </div>
    )
}

function CountRender({count,setCount}){
    return(
        <>
           value of current count is {count}
        </>
    )
}
function Buttons({count,setCount}){
    return(<>
      <button onClick={()=>{
        {
            setCount(count+1)
          }
      }}>
           increase counter
      </button>

      <button onClick={()=>{
        {
            setCount(count-1)
          }
      }}>
           decrease counter
      </button>
    </>)
}

export default Contextapi