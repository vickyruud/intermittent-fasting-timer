import React, {Fragment} from 'react'

const Clock = (props) => {

  

  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <div className="clock">
            {props.eatingWindow ? <small>{props.message}</small> : <small>{props.message}</small> }
           <section>
               <p>{props.timer.hours}</p>
              <small>Hours</small>{" "}
            </section>
            <span>:</span>
            <section>
               <p>{props.timer.minutes}</p>
              <small>Minutes</small>{" "}
            </section>
            <span>:</span>
            <section>
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