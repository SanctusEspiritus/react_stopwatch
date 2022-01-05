import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import stopwatchReducer from "./stopwatch-reducer";

let reducers = combineReducers({
    stopwatch: stopwatchReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;