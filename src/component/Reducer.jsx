import React, { useReducer } from "react";

// dung useReducer() khi phai xu ly nhieu state

const initState = 0;
const ACTION_UP = "up";
const ACTION_DOWN = "down";

const reducer = (state, action) => {
  switch (action) {
    case ACTION_UP:
      return state + 1;
    case ACTION_DOWN:
      return state - 1;
    default:
      throw new Error();
  }
};
// dispatch mo ta action

const Reducer = () => {
  const [number, dispatch] = useReducer(reducer, initState);
  return (
    <div style={{ paddingLeft: "20px" }}>
      <h1>useReducer</h1>
      <h1>{number}</h1>
      <button
        onClick={() => {
          dispatch(ACTION_UP);
        }}
        style={{ width: "80px" }}
      >
        Up
      </button>
      <button
        onClick={() => {
          dispatch(ACTION_DOWN);
        }}
        style={{ width: "80px" }}
      >
        Down
      </button>
    </div>
  );
};

export default Reducer;
