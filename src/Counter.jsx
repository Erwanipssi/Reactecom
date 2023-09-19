import { useState } from "react"

function Counter() {
const [count, setCount] = useState(0)


function increment () {

    setCount(curr => curr + 1)
    setCount(curr => curr + 1)

}

function decrement() {
    setCount (curr => curr -1)
    setCount (curr => curr -1)
}

    return (
        
        <div className="counter"> 
        <button onClick={ () => increment ()} > +</button>
        <button onClick={ () => decrement ()} >- </button>
         <p>count: {count} </p>
         </div>
    );

}

export default Counter; 