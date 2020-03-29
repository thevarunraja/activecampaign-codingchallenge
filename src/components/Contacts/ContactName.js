import React from "react";
import Link from "../Link";
import styles from "./ContactName.module.css";

export default function ContactName() {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>SS</div>
      <div className={styles.name}>
        <Link href="#">Don Joe</Link>
      </div>
    </div>
  );
}
