//used beacuse you cant assign the use effect to some variable
import { useEffect,useMemo,useState } from "react"
export default function Usememo(){
    const [ex1, setex1] = useState({value:0});
    const [ex2, setex2] = useState({value:0}); 
    const [bank, setBank] = useState({balance:0});
    useEffect(()=>{
         setex1({value:100});
    },[]);
    useEffect(()=>{
        setex2({value:100});
   },[]);
   useEffect(()=>{
      setTimeout(() => {
        setBank({balance:100});
      },5000);
   },[]);
    const cryp=useMemo(()=>{ //even thow the balance changes no
      alert("checker for code");//rerender is done on the screen
      return ex1.value+ex2.value;
   },[ex1,ex2])
   const total=cryp+bank.balance;
    return(
        <div>
             the balance is {total}
        </div>
    )
}