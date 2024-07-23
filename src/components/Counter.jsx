import React, { useState } from 'react';
import '../css/counter.css'; 

function Counter() {
  // set state to value 0
  const [count, setCount] = useState(0);

  // function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      {/* Display the current count */}
      <h1>Counter: {count}</h1>
      {/* Button to increment the count */}
      <button className="btn increment" onClick={increment}>Increment</button>
      {/* Button to decrement the count */}
      <button className="btn decrement" onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;

