import {useState} from "react";

export const Page1 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Counter:</p>
      <p>{counter}</p>
      <button onClick={()=>setCounter(counter+1)}>Increment</button>
    </div>
  )
}