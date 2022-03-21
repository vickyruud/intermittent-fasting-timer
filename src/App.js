import { useEffect, useState } from 'react';
import './App.css';
import Clock from './components/Clock';

function App() {
  
  const [state, setState] = useState({
    hours:0,
    minutes:0,
    seconds: 0,
    
  })

  const[eatingWindow, setEatingWindow] = useState(false)

  const handleEatingWindow = () => {
    if (state.hours >= 10 && state.hours <= 18) {
      setEatingWindow(true);
    } else {
      setEatingWindow(false);
    }
  }




  const startTimer = () => {

    const interval = setInterval(() => {
      const today = new Date()
      const hours = 23 - today.getHours()
      const minutes = 59 - today.getMinutes();
      const seconds = 60 - today.getSeconds();

      if (!today) {
        //stop timer
        clearInterval(interval.current)
      } else {
         //update timer 
      setState({
        ...state,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });
      handleEatingWindow();

      }
     
       
      
    })

  }

  useEffect(() => {
    startTimer();
  })

  return (
    <div className="App">
      <Clock eatingWindow={eatingWindow} timer={state} />
      <Clock eatingWindow={eatingWindow} timer={state} />
    </div>
  );
}

export default App;
