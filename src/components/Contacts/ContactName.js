import React from "react";
import Link from "../Link";
import styles from "./ContactName.module.css";

export default function ContactName(props) {
  let firstName = "John";
  let lastName = "Doe";
  if (props.firstName) {
    firstName = props.firstName;
  }
  if (props.lastName) {
    lastName = props.firstName;
  }
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        {firstName.split("")[0]}
        {lastName.split("")[0]}
      </div>
      <div className={styles.name}>
        <Link href="#">
          {firstName} {lastName}
        </Link>
      </div>
    </div>
  );
}
