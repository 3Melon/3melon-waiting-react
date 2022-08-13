import React from "react";

import Link from "next/link";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav className={styles.mainpagenav}>
        <div className={styles.brand}>3Melon</div>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/events">
            <li>Events</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
        </ul>
        <button>
          <a href="/login">Login</a>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
