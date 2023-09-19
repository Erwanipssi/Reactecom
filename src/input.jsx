import { useState } from "react"

function Value() {

    const [value,setValue] = useState("") 

    function change(param) {
        
        setValue(param)
    }
      
   

  return (
        
        <div className="input"> 
       
        <input type="text"
         onChange={ (e) => change (e.target.value)}
          />
        <p>{value}</p>
         </div>
    ); }

    export default Value; 