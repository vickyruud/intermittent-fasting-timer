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
      let today = new Date()
      let eatingTimeStart = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10);
      let eatingTimeEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 18, 0, 0);
      eatingTimeStart = eatingTimeStart.getTime();
      eatingTimeEnd = eatingTimeEnd.getTime();
      
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1)
      let tomorrowEatingTimeStart = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 10);
      tomorrowEatingTimeStart = tomorrowEatingTimeStart.getTime();
      let diff = (((tomorrowEatingTimeStart - Date.now() ) / 1000) | 0);
      
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
