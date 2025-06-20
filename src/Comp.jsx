import React, { useReducer } from "react";

const initialState = { count: 0, input: "" };
const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + 1 };
    case "input_text":
      return { ...state, input: action.payload };
    default:
      return state;
  }
};

const Comp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <h1>{state.count}</h1>
      <h1>{state.input}</h1>
      <input
        onChange={(e) =>
          dispatch({ type: "input_text", payload: e.target.value })
        }
      />
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
    </div>
  );
};

export default Comp;
