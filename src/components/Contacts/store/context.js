import React from "react";
import axios from "axios";
import reducer from "./reducer";

const ContactsContext = React.createContext();

const initialState = {
  contacts: null
};

export default function(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    axios.get(`https://lamppoststudios.api-us1.com/api/3/contacts`, {
      params: {
        "Api-Token":
          "0f7e5c9167768f6bb0a6e09e335ce464da7cb5e7008b989f0057266c26342424a4d8d3e5"
      }
    });
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
