import React from "react";
import Logo from "../../svg-icons/Logo";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Logo fill={"#fff"} width={250} />
      </div>
    </header>
  );
}
