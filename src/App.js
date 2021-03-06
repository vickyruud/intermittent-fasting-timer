import { useEffect, useState } from 'react';
import './App.css';
import Clock from './components/Clock';
import TimeSelectorHours from './components/TimeSelectorHours';

function App() {
  
  const [state, setState] = useState({
    
    startEating: 10,
    startEatingMins:0,
    startFasting: 18,
    startFastingMins:0    
  })


  const [eatingWindow, setEatingWindow] = useState(false)
  
  //changes the eating window hours
  const changeEatingWindowHours = (hours, minutes) => {
    setState({
      ...state,
      startEating: hours,
    })
  }
  const changeEatingWindowMinutes = (hours, minutes) => {
    setState({
      ...state,
      startEatingMins:minutes
    })
  }
  

  // switches eating window is open or closed
  const handleEatingWindow = () => {
    let dateNow = new Date();
    let hoursNow = dateNow.getHours();

    if (hoursNow  >= 10 && hoursNow <= 18) {
      setEatingWindow(true);
    } else {
      setEatingWindow(false);

    }
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

   function refreshPage() {
    window.location.reload(true);
  }


  const startTimer = () => {

    const interval = setInterval(() => {
      let today = new Date()
      eatingTimeStart = new Date(today.getFullYear(), today.getMonth(), today.getDate(), state.startEating, state.startEatingMins, 0);
      eatingTimeEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate(), state.startFasting, state.startFastingMins, 0);
      eatingTimeStart = eatingTimeStart.getTime();
      eatingTimeEnd = eatingTimeEnd.getTime();

      let tomorrow = new Date();

      let dateNow = new Date();
      let hoursNow = dateNow.getHours();

      if (hoursNow >= 18 && hoursNow <= 23) {
        tomorrow.setDate(tomorrow.getDate() + 1)

      } else {
        tomorrow.setDate(tomorrow.getDate())
      }

      if (hoursNow === 18 || hoursNow === 0 || hoursNow === 10) {
        refreshPage();
      }
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
      <div className='time-select'>
        <TimeSelectorHours hours={state.startEating} minutes={state.startEatingMins} changeHours={changeEatingWindowHours} changeMinutes={changeEatingWindowMinutes}/>
      </div>
      {eatingWindow ? <Clock message="Eat Now!" eatingWindow={true} timer={state} /> : <Clock message="Fast now!" eatingWindow={false} timer={state} /> }
    </div>
  );
}

export default App;
