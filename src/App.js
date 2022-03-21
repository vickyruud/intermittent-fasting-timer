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
    if (state.hours >= 10 && state.hours <= 18) {
      setEatingWindow(true);
    } else {
      setEatingWindow(false);
    }
  }




  const startTimer = () => {

    const interval = setInterval(() => {
      const today = new Date()
      let eatingTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0, 0);
      let fastingTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 18, 0, 0);
      
      console.log(eatingTime.getHours());
      const hours = fastingTime.getHours()- eatingTime.getHours()
      const minutes = fastingTime.getMinutes() - eatingTime.getMinutes();
      const seconds = fastingTime.getSeconds() - eatingTime.getSeconds();

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
      {eatingWindow ? <Clock eatingWindow={true} timer={state} /> : <Clock eatingWindow={false} timer={state} /> }
    </div>
  );
}

export default App;
