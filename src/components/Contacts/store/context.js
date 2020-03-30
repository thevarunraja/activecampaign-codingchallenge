import React from "react";
import axios from "axios";
import reducer from "./reducer";
import * as actionTypes from "./actionTypes";

const ContactsContext = React.createContext();

const initialState = {
  contacts: null,
  selectedContacts: [],
  allContactsToggle: false
};

export default function ContactsProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    async function fetchContacts() {
      try {
        const res = await axios.get(`/api/3/contacts`, {});
        dispatch({ type: actionTypes.SAVE_CONTACTS, payload: res.data });
      } catch (e) {
        console.error(`error fetching contacts`);
        console.error(e);
      }
    }
    fetchContacts();
  }, []);

  const setSelectedContact = React.useCallback(hash => {
    dispatch({
      type: actionTypes.SET_SELECTED_CONTACTS,
      payload: hash
    });
  }, []);

  const setAllContactsToggle = React.useCallback(() => {
    dispatch({
      type: actionTypes.SET_ALL_CONTACTS_TOGGLE,
      payload: !state.allContactsToggle
    });
  }, [state.allContactsToggle]);

  return (
    <ContactsContext.Provider
      value={{
        state,
        setSelectedContact,
        setAllContactsToggle
      }}
    >
      {props.children}
    </ContactsContext.Provider>
  );
}

function useContactsContext() {
  return React.useContext(ContactsContext);
}

export { useContactsContext };
