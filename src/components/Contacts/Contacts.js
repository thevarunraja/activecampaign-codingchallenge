import React from "react";
import ContactsTable from "./ContactsTable";
import ContactsProvider from "./store";
import styles from "./Contacts.module.css";

export default function Contacts() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <ContactsProvider>
          <ContactsTable />
        </ContactsProvider>
      </div>
    </div>
  );
}
