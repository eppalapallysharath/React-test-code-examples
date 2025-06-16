import React, { useRef, useState } from "react";

const Example1 = () => {
  const [count, setCount] = useState("");
  //   const ref = useRef("");

  const handleChange = (e) => {
    const value = e.target.value;
    for (const v of value) {
      if (!(v >= "A" && v <= "Z")) {
        // alert("not alphabet");
        console.log(" not alphabets");
      }
    }
  };
  const handleClick = () => {
    console.log(count);
    setCount("");
    // console.log(ref.current.value);
  };
  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        // value={count}
      />
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Example1;
