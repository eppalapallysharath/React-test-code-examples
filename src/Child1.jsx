import React from "react";
import useFetch from "./useFecth";

const Child1 = () => {
  console.log(
    "child",
    useFetch("https://jsonplaceholder.typicode.com/users/1")
  );
  return <div>Child1</div>;
};

export default Child1;
