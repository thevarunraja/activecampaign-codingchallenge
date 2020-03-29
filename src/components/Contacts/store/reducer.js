import * as actionTypes from "./actionTypes";

export default function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SAVE_CONTACTS:
      return {
        ...state,
        contacts: payload
      };
    case actionTypes.SET_SELECTED_CONTACTS: {
      return {
        ...state,
        selectedContacts: state.selectedContacts.includes(payload)
          ? state.selectedContacts.filter(hash => hash !== payload)
          : [...state.selectedContacts, payload]
      };
    }
    case actionTypes.SET_ALL_CONTACTS_TOGGLE:
      return {
        ...state,
        allContactsToggle: !state.allContactsToggle
      };
    default:
      return state;
  }
}
