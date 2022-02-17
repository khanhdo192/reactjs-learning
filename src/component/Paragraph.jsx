import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Paragraph = () => {
  const context = useContext(ThemeContext);

  return (
    <div style={{ marginLeft: "20px" }} className={context.theme}>
      <h1>useContext</h1>
    </div>
  );
};

export default Paragraph;
