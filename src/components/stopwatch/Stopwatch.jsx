import { useState } from "react";
import styles from "./Stopwatch.module.css";

const Stopwatch = (props) => {
  let [stopwatchIsOn, editStopwatchIsOn] = useState(false);

  const formatTime = () => {
    const getSeconds = `0${(props.timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(props.timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(props.timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  const changeStatusStopwatch = () => {
    editStopwatchIsOn(!stopwatchIsOn);
    !stopwatchIsOn ? props.setStartTimer() : props.setStopTimer();
  };

  const setWait = () => {
    editStopwatchIsOn(!stopwatchIsOn);
    props.setWaitTimer(stopwatchIsOn);
  }

  const setReset = () => {
    if (stopwatchIsOn) {
        props.setResetTimer();
    }
  }
  
  return (
    <div>
      <span className={styles.stopwatch_time}>{formatTime()}</span>
      <div className={styles.stopwatch_buttons}>
        <button
          onClick={changeStatusStopwatch}
          className={`${styles.stopwatch_start} ${styles.gradient_button}`}
        >
          {stopwatchIsOn === false && <span>Start</span>}
          {stopwatchIsOn === true && <span>Stop</span>}
        </button>
        <button onDoubleClick={setWait} 
          className={`${styles.stopwatch_wait} ${styles.gradient_button}`}
        >
          Wait
        </button>
        <button
          onClick={setReset} 
          className={`${styles.stopwatch_reset} ${styles.gradient_button}`}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
