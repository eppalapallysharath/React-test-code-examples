import React, { useState } from "react";

const Example2 = () => {
  const [count, setCount] = useState(0);

  const resetCount = () => {
    console.log("Resetting count");
    setCount(0);
  };

  console.log("Component rendered");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default Example2;
