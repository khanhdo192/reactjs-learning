import React, { useState, useCallback } from "react";
import UseContent from "./UseContent";

// memo() -> Higher Order Component (HOC)
// xu ly component de tranh re-render ko can thiet
// props ko thay doi thi memo ko re-render

// useCallback() - chu y reference types, memo()

function Memo(props) {
  const [count, setCount] = useState(0);

  // deps thay doi thi return ve tham chieu moi,
  // ko thi van o tham chieu cu
  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ paddingLeft: "20px" }}>
      <UseContent onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  );
}

export default Memo;
