import React from 'react';


const TimeSelectorHours = (props) => {
  


  return (
    <div>
      <label>{props.message} Hours:</label>

      <select name="hours" id="hours" value = {props.hours} onChange={() => props.changeHours((e) => e.target.value)}>
        {[...Array(24)].map((hour, i) => {
          const hourValue = i
          return (
            <option
              key={i}
              value={hourValue}
            >{hourValue}</option>
          )
        })

        }
      </select>
      <label>Minutes: </label>

      <select name="minutes" id="minutes" value = {props.minutes} onChange={() => props.changeMinutes((e) => e.target.value)} >
        {[...Array(60)].map((hour, i) => {
          const minuteValue = i
          return (
            <option
              key={i}
              value={minuteValue}
            >{minuteValue}</option>
          )
        })

        }
      </select>
    </div>
  )
}

export default TimeSelectorHours