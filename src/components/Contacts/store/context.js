import React from "react";
import axios from "axios";
import reducer from "./reducer";
import * as actionTypes from "./actionTypes";

const ContactsContext = React.createContext();

const initialState = {
  contacts: null
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

  return (
    <ContactsContext.Provider
      value={{
        state
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
