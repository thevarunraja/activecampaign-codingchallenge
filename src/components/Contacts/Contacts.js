import React from "react";
import styles from "./Contacts.module.css";

export default function Contacts() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr>
              <th className={`${styles.th} ${styles.tCol1}`}>
                <input type="checkbox" />
              </th>
              <th className={`${styles.th} ${styles.tCol2}`}>Contact</th>
              <th className={`${styles.th} ${styles.tCol3}`}>Total Value</th>
              <th className={`${styles.th} ${styles.tCol4}`}>Location</th>
              <th className={`${styles.th} ${styles.tCol5}`}>Deals</th>
              <th className={`${styles.th} ${styles.tCol6}`}>Tags</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${styles.td} ${styles.tCol1}`}>
                <input type="checkbox" />
              </td>
              <td className={`${styles.td} ${styles.tCol2}`}>Contact</td>
              <td className={`${styles.td} ${styles.tCol3}`}>Total Value</td>
              <td className={`${styles.td} ${styles.tCol4}`}>Location</td>
              <td className={`${styles.td} ${styles.tCol5}`}>Deals</td>
              <td className={`${styles.td} ${styles.tCol6}`}>Tags</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
