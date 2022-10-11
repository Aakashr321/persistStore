import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.mainHeader}>
        <nav className={styles.headerNav}>
          <Link to="/">
            <h2>User List App</h2>
          </Link>
          <ul>
            <li>
              <Link to="/users">UserList</Link>
            </li>
            
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
