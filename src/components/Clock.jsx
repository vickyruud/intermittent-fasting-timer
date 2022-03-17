import React, {Fragment} from 'react'

const Clock = (props) => {

  

  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <div className="clock">
            <section>
              <p>{props.timer.days}</p>
              <small>Days</small>
               <p>{props.timer.hours}</p>
              <small>Hours</small>
               <p>{props.timer.minutes}</p>
              <small>Minutes</small>
               <p>{props.timer.seconds}</p>
              <small>Seconds</small>
            </section>
          </div>
        </section>

      </section>
      
    </Fragment>
  )
}


export default Clock