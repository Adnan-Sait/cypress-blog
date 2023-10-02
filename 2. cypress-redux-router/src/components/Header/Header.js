import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <div className="container d-flex">
        <nav className={styles.navbar}>
          <NavLink className={styles.navItem} to="/">
            Home
          </NavLink>
          <NavLink className={styles.navItem} to="/quotes">
            Quotes
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
