
import { useNavigate } from "react-router-dom";


export default function Changer(){
    const navigate=useNavigate();
    return (
      <div>
           <Button1 pros={'/'} paceholder="home" /> 

           <Button1 pros={'/about'} paceholder="about"/>

           <button onClick={()=>{
            navigate('/dashboard');
           }}>
             got to dashboard page
           </button>
      </div>
    )
}

function Button1({pros,paceholder="page"}){
    const navigate=useNavigate();
    return(
        <button onClick={()=>{
            navigate(`${pros}`);
        }}>{`${paceholder}`}</button>
    )
}