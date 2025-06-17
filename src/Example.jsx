import React, { useMemo, useState } from "react";

const Example = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [count, setCount] = useState(0);

  const sum = useMemo(() => {
    console.log("sum calculate");
    return a + b;
  }, [a, b]);

  const handleInc = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setA(Number(e.target.value))}
        value={a}
      />
      <input
        type="number"
        onChange={(e) => setB(Number(e.target.value))}
        value={b}
      />
      <h1> sum {sum}</h1>

      <button onClick={handleInc}>increment</button>
      <h1>count value {count}</h1>
    </div>
  );
};

export default Example;
