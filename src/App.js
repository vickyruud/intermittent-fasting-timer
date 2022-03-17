import { useEffect, useState } from 'react';
import './App.css';
import Clock from './components/Clock';

function App() {
  
  const [state, setState] = useState({
    hours:10,
    minutes:10,
    seconds: 10,
    
  })

  let interval;



  const startTimer = () => {
    const countDownDate = new Date("March 18, 2022 15:00:00 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;
      const hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60));
      const minutes = Math.floor(distance % (60 * 60 * 1000) / (1000 * 60));
      const seconds = Math.floor(distance % (60 * 1000) / 1000);

      if (distance < 0) {
        //stop timer
        clearInterval(interval.current);
      } else {
        //update timer 
        setState({
          ...state,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        })

      }

      
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
