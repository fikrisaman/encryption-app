import React, { Component } from "react";

// Importing style
import classes from "./Form.module.css";

// Import redux
import { connect } from "react-redux";
import * as actions from "../../store/actions";

const MIN = 11;
const MAX = 99;
const VOWELS = ["a", "e", "i", "o", "u"];
const ALPHABETS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

class Form extends Component {
  state = {
    text: {
      value: "",
      randKey: null,
      encText: "",
      valid: false,
    },
  };

  // Generate a 2 digits number between 11-99 and check if it is already exist at the main store, if yes, recursively generate the number, if not, return the number
  generateKey = () => {
    let genKey = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);

    if (!this.props.keyArr.includes(genKey)) {
      return genKey;
    } else {
      if (this.props.keyArr.length < 89) {
        // Recursively generate number
        genKey = this.generateKey();
        return genKey;
      } else {
        // No more number available
        return -1;
      }
    }
  };

  // Convert the alphabet based on the random generated number
  // Check if it's a vowel or a consonent
  // Check if it's an uppercase or lowercase
  convertAlphabet = (
    char,
    newIndex,
    index,
    vowel,
    consonent,
    isVowel,
    isUppercase
  ) => {
    newIndex = index + (isVowel ? vowel : consonent);
    if (newIndex > ALPHABETS.length) {
      // if the newIndex exceeds the number of alphabets, restart from index 0
      newIndex = newIndex - ALPHABETS.length;

      return (char = isUppercase
        ? ALPHABETS[newIndex]
        : ALPHABETS[newIndex].toLowerCase());
    } else if (newIndex === ALPHABETS.length) {
      // if newIndex is the last alphabet (z)
      newIndex = newIndex - 1;

      return (char = isUppercase
        ? ALPHABETS[newIndex]
        : ALPHABETS[newIndex].toLowerCase());
    }

    // When newIndex does not exceeds the alphabet array
    return (char = isUppercase
      ? ALPHABETS[newIndex]
      : ALPHABETS[newIndex].toLowerCase());
  };

  // Takes in user input text and the random generated number
  encryptHandler = (text, randKey) => {
    // Split the number into an array
    const keyStr = randKey.toString().split("");

    // Vowel takes in the first digit, consonent the second
    const vowel = parseInt(keyStr[0]);
    const consonent = parseInt(keyStr[1]);

    const uppercase = /[A-Z]/;

    const encryptedText = [...text].map((c) => {
      // Find the index of the current character
      let index = ALPHABETS.indexOf(c.toUpperCase());

      let newIndex = 0;

      // check if uppercase/lowercase
      if (uppercase.test(c)) {
        // Check of the current character is a vowel or not
        if (VOWELS.includes(c.toLowerCase())) {
          return (c = this.convertAlphabet(
            c,
            newIndex,
            index,
            vowel,
            consonent,
            true,
            true
          ));
        } else {
          return (c = this.convertAlphabet(
            c,
            newIndex,
            index,
            vowel,
            consonent,
            false,
            true
          ));
        }
      } else if (c === " ") {
        // If current character is space, do nothing
        return c;
      } else {
        // When current character is lowercase
        if (VOWELS.includes(c)) {
          return (c = this.convertAlphabet(
            c,
            newIndex,
            index,
            vowel,
            consonent,
            true,
            false
          ));
        } else {
          return (c = this.convertAlphabet(
            c,
            newIndex,
            index,
            vowel,
            consonent,
            false,
            false
          ));
        }
      }
    });
    return encryptedText.join("");
  };

  // Check if user input is valid
  checkValidity = (value) => {
    // Only accept string, special characters not included, and no consecutive spaces
    const pattern = /^[a-zA-Z](?!.* {2})[a-zA-Z ]*$/;

    const isValid = pattern.test(value);

    return isValid;
  };

  // Handles the input change and updating it to state
  inputChangedHandler = (event) => {
    const updatedText = { ...this.state.text, value: event.target.value };
    this.setState({ text: updatedText });
  };

  submitHandler = (event) => {
    event.preventDefault();

    const updateState = { ...this.state.text };
    this.setState({ text: { value: "" } });

    // Check for user input
    updateState.valid = this.checkValidity(updateState.value);

    if (updateState.valid) {
      updateState.randKey = this.generateKey();

      if (updateState.randKey === -1) {
        // When no more number is available
        this.props.onNoMoreNumber();
        return -1;
      }

      // Store the number at store only if valid
      this.props.storeRandomKey(updateState.randKey);

      // Encrypt the text
      updateState.encText = this.encryptHandler(
        updateState.value,
        updateState.randKey
      );

      // Store the result at store
      this.props.onEncryptText(
        updateState.value,
        updateState.encText,
        updateState.randKey
      );
    } else {
      // When the string is uncorrect
      this.props.onStringNotValid();
    }
  };

  render() {
    let error = null;
    // If the user enter incorrect input, show error message
    if (this.props.showError) {
      error = (
        <p>
          Insert string only, special characters or multiple spaces not allowed
        </p>
      );
    } else if (this.props.noMoreNumber) {
      // If there is no more number available, show this error and disable the input and button
      error = <p>Sorry! No more number is available 😓</p>;
    }
    return (
      <div className={classes.Form}>
        {error}
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Enter text here..."
            onChange={this.inputChangedHandler}
            disabled={this.props.noMoreNumber}
            value={this.state.text.value}
          />
          <button disabled={this.props.noMoreNumber}>
            <i className="fas fa-chevron-right"></i>
          </button>
          <button
            className={classes.infoBtn}
            onClick={this.props.onClickInfo}
            type="button"
          >
            <i className="fas fa-question fa-sm"></i>
          </button>
        </form>
      </div>
    );
  }
}

// Get states from store
const mapStateToProps = (state) => {
  return {
    keyArr: state.keyArr,
    showError: state.showError,
    noMoreNumber: state.noMoreNumber,
  };
};

// Functions to inform store to update states
const mapDispatchToProps = (dispatch) => {
  return {
    onEncryptText: (originalText, encryptedText, randKey) =>
      dispatch({
        type: actions.ENCRYPT_TEXT,
        oriText: originalText,
        encText: encryptedText,
        randKey: randKey,
      }),
    storeRandomKey: (randKey) =>
      dispatch({ type: actions.STORE_RANDOM_KEY, randKey: randKey }),
    onStringNotValid: () => dispatch({ type: actions.STRING_NOT_VALID }),
    onNoMoreNumber: () => dispatch({ type: actions.NO_MORE_NUMBER }),
    onClickInfo: () => dispatch({ type: actions.SHOW_INFO }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
