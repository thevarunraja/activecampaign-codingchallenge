import React from "react";
import styles from "./Link.module.css";

export default function Link({ href, children }) {
  return (
    <a className={styles.a} href={href}>
      {children}
    </a>
  );
}
