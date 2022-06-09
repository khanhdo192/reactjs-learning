import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './component/ThemeContext';

// fake cmommnet
// function emitComment(id) {
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`lesson-${id}`, {
//         detail: `${id}`
//       })
//     )
//   }, 2000)
// }
// emitComment(1)
// emitComment(2)
// emitComment(3)

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
