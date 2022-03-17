import { useState } from 'react';
import './App.css';
import Clock from './components/Clock';

function App() {
  
  const [state, setState] = useState({
    Days: 10,
    Hours:10,
    Minutes:10,
    Seconds:10
  })



  return (
    <div className="App">
      <Clock timer={state}/>
    </div>
  );
}

export default App;
