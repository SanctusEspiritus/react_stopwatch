import { useState } from "react";
import styles from "./Stopwatch.module.css";

const Stopwatch = () => {

  let [stopwatchIsOn, editStopwatchIsOn] = useState(false);

  const changeStatusStopwatch = () => {
    editStopwatchIsOn(!stopwatchIsOn);
  }

  return (
    <div>
      <span className={styles.stopwatch_time}>00:00:00</span>
      <div className={styles.stopwatch_buttons}>
        <button
        onClick={changeStatusStopwatch}
          className={`${styles.stopwatch_start} ${styles.gradient_button}`}
        >
        {stopwatchIsOn === false && <span>Start</span>}
        {stopwatchIsOn === true && <span>Stop</span>}
        </button>
        <button
          className={`${styles.stopwatch_wait} ${styles.gradient_button}`}
        >
          Wait
        </button>
        <button
          className={`${styles.stopwatch_reset} ${styles.gradient_button}`}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
