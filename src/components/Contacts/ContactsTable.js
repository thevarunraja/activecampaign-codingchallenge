import React from "react";
import ContactName from "./ContactName";
import ContactsValue from "./ContactsValue";
import ContactsDeal from "./ContactsDeal";
import ContactsTag from "./ContactsTag";
import styles from "./ContactsTable.module.css";
import { useContactsContext } from "./store";

export default function ContactsTable() {
  const {
    state,
    setSelectedContact,
    setAllContactsToggle
  } = useContactsContext();
  if (!state.contacts) {
    return null;
  }
  return (
    <table className={styles.table}>
      <thead className={styles.tableHead}>
        <tr>
          <th className={`${styles.th} ${styles.tCol1}`}>
            <input
              type="checkbox"
              checked={
                state.contacts.contacts.length === state.selectedContacts.length
              }
              onChange={setAllContactsToggle}
            />
          </th>
          <th className={`${styles.th} ${styles.tCol2}`}>Contact</th>
          <th className={`${styles.th} ${styles.tCol3}`}>Total Value</th>
          <th className={`${styles.th} ${styles.tCol4}`}>Location</th>
          <th className={`${styles.th} ${styles.tCol5}`}>Deals</th>
          <th className={`${styles.th} ${styles.tCol6}`}>Tags</th>
        </tr>
      </thead>
      <tbody>
        {state.contacts.contacts.length >= 1 &&
          state.contacts.contacts.map(contact => {
            return (
              <tr
                className={styles.tr}
                key={contact.hash}
                style={{
                  ...(state.selectedContacts.includes(contact.hash) && {
                    background: "#e2ebfc"
                  })
                }}
                onClick={() => setSelectedContact(contact.hash)}
              >
                <td className={`${styles.td} ${styles.tCol1}`}>
                  <input
                    type="checkbox"
                    checked={state.selectedContacts.includes(contact.hash)}
                    readOnly
                  />
                </td>
                <td className={`${styles.td} ${styles.tCol2}`}>
                  <ContactName
                    firstName={contact.firstName}
                    lastName={contact.lastName}
                  />
                </td>
                <td className={`${styles.td} ${styles.tCol3}`}>
                  <ContactsValue scoreValues={contact.scoreValues} />
                </td>
                <td className={`${styles.td} ${styles.tCol4}`}>Chicago</td>
                <td className={`${styles.td} ${styles.tCol5}`}>
                  <ContactsDeal dealsLink={contact.links.deals} />
                </td>
                <td className={`${styles.td} ${styles.tCol6}`}>
                  <ContactsTag contactTagsLink={contact.links.contactTags} />
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
