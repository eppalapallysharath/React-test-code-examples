import React, { useEffect, useRef } from "react";

const FormComponent = () => {
  const countRef = useRef();
  //   const handleClick = () => {
  //     countRef.current.focus();
  //   };
  //   console.log(countRef);
  useEffect(() => {
    countRef.current.focus();
    countRef.current.style.backgroundColor = "red";
  }, []);
  return (
    <div>
      {/* <h1>Hello h1> */}
      <h1 ref={countRef}> hi</h1>
      {/* <input ref={countRef} /> */}
      <div></div>
      {/* <button onClick={handleClick}>click me</button> */}
    </div>
  );
};

export default FormComponent;
