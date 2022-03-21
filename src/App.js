import { useEffect, useState } from 'react';
import './App.css';
import Clock from './components/Clock';

function App() {
  
  const [state, setState] = useState({
    hours:0,
    minutes:0,
    seconds: 0,
    startEating: 0,
    startFasting:0
    
  })

  const[eatingWindow, setEatingWindow] = useState(false)

  const handleEatingWindow = () => {
    if (state.hours >= 0 && state.hours <= 8) {
      setEatingWindow(true);
    } else {
      setEatingWindow(false);
    }
  }




  const startTimer = () => {

    const interval = setInterval(() => {
      const today = new Date()
      let eatingTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10);
      // let fastingTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 18, 0, 0);
      
      if (today.getHours() >= 18) {
        today.setDate(today.getDate() + 1);
      }

      eatingTime = eatingTime.getTime();
      let diff = (((Date.now() - eatingTime) / 1000) | 0);

      const hours = (diff / 3600) | 0
      const minutes = ((diff % 3600) / 60) | 0
      const seconds = (diff % 60) | 0

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
      {eatingWindow ? <Clock message="Eat Now!" eatingWindow={true} timer={state} /> : <Clock message="Fast now!" eatingWindow={false} timer={state} /> }
    </div>
  );
}

export default App;
