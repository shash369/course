export default function Wrapper(){
    return(
        <>
          <FnWrapper>
             <h3>
                Wrapper
             </h3>
             <p>
                is used to create a outer box of simmiler type 
             </p>
          </FnWrapper>

          <FnWrapper>
             <h3>
                components
             </h3>
             <p>
                that may have diff inner value but<br />
                same oute type
             </p>
             <p>
                the commponens will maintain the same width but <br></br>
                they can have component of diff height
                
             </p>
          </FnWrapper>
          
        </>
    )
}

function FnWrapper({children}){
    return (
    <div style={{  padding:"20px" ,border:"1px solid white"}}>
      <p>
        {children}
      </p>

    </div>)
}

// function Text(){
//     return(
//         <>
//           <p>
//             hello from me
//           </p>
//         </>
//     )
// }