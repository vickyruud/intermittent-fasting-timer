import { useState } from 'react';
import './App.css';
import Clock from './components/Clock';

function App() {
  
  const [state, setState] = useState({
    days: 10,
    hours:10,
    minutes:10,
    seconds:10
  })



  return (
    <div className="App">
      <Clock timer={state}/>
    </div>
  );
}

export default App;
