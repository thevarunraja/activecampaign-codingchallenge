import * as actionTypes from "./actionTypes";

export default function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SAVE_CONTACTS:
      return {
        ...state,
        contacts: payload
      };
    default:
      return state;
  }
}
