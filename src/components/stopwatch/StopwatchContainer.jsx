import React from "react";
import { connect } from "react-redux";
import {
  setResetTimer,
  setStartTimer,
  setStopTimer,
  setWaitTimer,
} from "../../redux/stopwatch-reducer";
import Stopwatch from "./Stopwatch";

class StopwatchContainer extends React.Component {
  render() {
    return (
      <Stopwatch
        timer={this.props.timer}
        setWaitTimer={this.props.setWaitTimer}
        setStartTimer={this.props.setStartTimer}
        setStopTimer={this.props.setStopTimer}
        setResetTimer={this.props.setResetTimer}
      />
    );
  }
}

const mapDispatchToProps = (state) => ({
  timer: state.stopwatch.timer
});

export default connect(mapDispatchToProps, {
  setWaitTimer,
  setStartTimer,
  setStopTimer,
  setResetTimer,
})(StopwatchContainer);
