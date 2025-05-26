/*
* Batch states updates using updater function setNumber(n => n +1)
* The update function calculates the next state based on the previous one
*/
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        // setNumber(n + 1); <-- Works but cannot be queued
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
}
