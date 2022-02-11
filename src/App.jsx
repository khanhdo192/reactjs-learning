import { useState, useContext } from 'react'
import Count from './component/Count';
import Header from './component/Header';
import Memo from './component/Memo';
import Product from './component/Product';
import Reducer from './component/Reducer';
import Content from './component/Content'
import Jobs from './component/Jobs';
import Todo from './component/Todo';
import Theme from './component/Theme';
import './App.css';
import { ThemeContext } from './component/ThemeContext';

function App() {
  const [show, setShow] = useState(false)
  const context = useContext(ThemeContext)

  return (
    <div className="App" style={{paddingBottom: '50px'}}>
      <Header />
      <Jobs />
      <Product />
      <button style={{marginLeft: '20px', marginTop: '20px'}} onClick={() => setShow(!show)}>useEffect</button>
      {show && <Content />}
      <Count />
      <Memo />
      <Reducer />
      <Todo />
      <Theme />
      <button style={{marginLeft: '20px'}} onClick={context.toggleTheme}>Mode</button>
    </div>
  );
}

export default App;
