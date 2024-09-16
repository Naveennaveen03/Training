import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 25) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={decrement} disabled={count === 0}>
        Decrement
      </button>
      <button onClick={increment} disabled={count === 25}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
