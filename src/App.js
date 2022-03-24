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

  const [eatingWindow, setEatingWindow] = useState(false)
  
  

  const handleEatingWindow = () => {
    let dateNow = new Date();
    let hoursNow = dateNow.getHours();

    if (hoursNow  >= 18) {
      setEatingWindow(false);
    } else {
      setEatingWindow(true);

    }
    console.log(eatingWindow)
  }
  let staticTime;
  let eatingTimeEnd;
  let tomorrowEatingTimeStart;
  let eatingTimeStart

  const handleStaticTime = (end , start) => {
    if (eatingWindow === true) {
      staticTime = end;
    } else {
      staticTime = start;
    }
  }




  const startTimer = () => {

    const interval = setInterval(() => {
      let today = new Date()
      eatingTimeStart = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10);
      eatingTimeEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 18, 0, 0);
      eatingTimeStart = eatingTimeStart.getTime();
      eatingTimeEnd = eatingTimeEnd.getTime();
      
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrowEatingTimeStart = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 10);
      tomorrowEatingTimeStart = tomorrowEatingTimeStart.getTime();
      
      handleStaticTime(eatingTimeEnd, tomorrowEatingTimeStart);
      let diff = (((staticTime - Date.now()) / 1000) | 0);
      
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
