import {useEffect, useState} from "react";
import {cleanup} from "@testing-library/react";

export const Page5 = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter(counter => counter+1);
      console.log(counter);
    }, 500);

  }, [counter])

  return (
    <h3>{counter}</h3>
  )
}