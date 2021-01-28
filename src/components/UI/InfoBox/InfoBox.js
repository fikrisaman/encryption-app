import React from "react";

// Import redux
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

// Importing style
import classes from "./InfoBox.module.css";

// Import component
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary";

const InfoBox = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.onClickInfoBox} />
      <div
        className={classes.InfoBox}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <p>
          This app generates a random key and encrypts the text. The key for
          encryption will be a two digit number randomly generated within the
          range 11 to 99. <br />
          The 1st digit of the key indicates the number of characters to move
          forward for vowel characters, while the 2nd digit for consonant. Each
          submission has a unique random key generated.
        </p>
      </div>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    show: state.showInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickInfoBox: () => dispatch({ type: actions.SHOW_INFO }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoBox);
