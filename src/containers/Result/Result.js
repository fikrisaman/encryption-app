import React, { Component } from "react";

// Importing style
import classes from "./Result.module.css";

// Import redux
import { connect } from "react-redux";

class Result extends Component {
  render() {
    let showResult = null;
    // If the user entered an invalid input or if there is no more number available, do not show anything
    if (this.props.showResult) {
      showResult = (
        <div className={classes.Result}>
          <p>
            Generated key: <span>{this.props.randKey}</span>
          </p>
          <p>
            Original text: <span>{this.props.oriText}</span>
          </p>
          <p>
            Encrypted text: <span>{this.props.encText}</span>
          </p>
        </div>
      );
    }
    return showResult;
  }
}

// Get the state from the store
const mapStateToProps = (state) => {
  return {
    randKey: state.randKey,
    oriText: state.text,
    encText: state.encText,
    showResult: state.isValid,
  };
};

export default connect(mapStateToProps)(Result);
