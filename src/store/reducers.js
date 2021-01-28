import * as actionTypes from "./actions";

const initialState = {
  keyArr: [],
  text: "",
  randKey: null,
  encText: "",
  isValid: false,
  showError: false,
  noMoreNumber: false,
  showInfo: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ENCRYPT_TEXT:
      return {
        ...state,
        text: action.oriText,
        encText: action.encText,
        randKey: action.randKey,
        isValid: true,
        showError: false,
        noMoreNumber: false,
      };

    case actionTypes.STRING_NOT_VALID:
      return {
        ...state,
        isValid: false,
        showError: true,
        noMoreNumber: false,
      };

    case actionTypes.STORE_RANDOM_KEY:
      return {
        ...state,
        keyArr: state.keyArr.concat(action.randKey),
      };

    case actionTypes.NO_MORE_NUMBER:
      return {
        ...state,
        isValid: false,
        showError: false,
        noMoreNumber: true,
      };

    case actionTypes.SHOW_INFO:
      return {
        ...state,
        showInfo: !state.showInfo,
      };

    default:
      return state;
  }
};

export default reducer;
