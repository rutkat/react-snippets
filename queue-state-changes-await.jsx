/*
* Batch states updates using updater function setPending(p => p +1) and a timeout using await
*/
import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  function delay(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

  async function handleClick() {
    setPending(pending => pending + 1);
    await delay(1000); // simulating 1 second server delay
    setPending(pending => pending - 1);
    setCompleted(completed => completed + 1);
  }

  return (
    <>
      <p>Pending: {pending}</p>
      <p>Completed: {completed}</p>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}