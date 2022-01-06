import { Observable } from "rxjs";

const SET_START_TIMER = "/STOPWATCH/SET_START_TIMER";
const SET_STOP_TIMER = "/STOPWATCH/SET_STOP_TIMER";

let interavals = [];

let initialState = {
  timer: 0
};

const stopwatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_START_TIMER: {
      return {
        ...state,
        timer: state.timer + 1,
      };
    }
    case SET_STOP_TIMER: {
      return {
        ...state,
        timer: 0,
      };
    }
    default:
      return state;
  }
};

const startTimer = () => ({ type: SET_START_TIMER });
const stopTimer = () => ({ type: SET_STOP_TIMER });

export const setStartTimer = () => async (dispatch) => {
  setTimerInterval(dispatch);
};

export const setStopTimer = () => async (dispatch) => {
  interavals.forEach(clearInterval);
  dispatch(stopTimer());
};

export const setWaitTimer = (starting) => async (dispatch) => {
  interavals.forEach(clearInterval);
  if (!starting) {
    setTimerInterval(dispatch);
  }
};

export const setResetTimer = () => async (dispatch) => {
  interavals.forEach(clearInterval);
  dispatch(stopTimer());
  setTimerInterval(dispatch);
};

const setTimerInterval = (dispatch) => {
  const stream$ = new Observable(observer => {
    const myInterval = setInterval(() => {
      observer.next(dispatch(startTimer()));
    }, 1000);
    interavals.push(myInterval);
  });
  stream$.subscribe(err => console.log(err));
}

export default stopwatchReducer;
