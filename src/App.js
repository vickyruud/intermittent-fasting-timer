import { useEffect, useState } from 'react';
import './App.css';
import Clock from './components/Clock';

function App() {
  
  const [state, setState] = useState({
    hours:10,
    minutes:10,
    seconds: 10,
    eatingWindow:false,
    
  })




  const startTimer = () => {

    const interval = setInterval(() => {
      const today = new Date()
      if (today.getHours() >= 10 && today.getHours() <= 18) {
      }
      const hours = 24 - today.getHours()
      const minutes = 60 - today.getHours();
      const seconds = 60 - today.getSeconds();

     
        //update timer 
        setState({
          ...state,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        })
      
    })

  }

  useEffect(() => {
    startTimer();
  })

  return (
    <div className="App">
      <Clock timer={state}/>
    </div>
  );
}

export default App;
