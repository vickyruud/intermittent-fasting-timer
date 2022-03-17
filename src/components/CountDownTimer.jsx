import React from 'react'

const CountDownTimer = () => {

  const [state, setState] = useState({
       days: 0,
    hours: '00',
    minutes: '00',
    seconds: '00',
    timeUp:false
  })
  
  const dayString = state.days > 1 ? 'days' : day;

  return (
    <div>
      {state.timeUp ? <p> 'Event in Progress' </p>
      : <p>{`${state.days} ${dayString} ${hours} hours ${minutes} mins ${seconds} seconds`}</p>
      }
    </div>
  )
}


export default CountDownTimer