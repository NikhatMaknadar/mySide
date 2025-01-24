// import React from 'react'
import { useState } from "react";
import styles from "./Navbar.module.css"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className={styles.navbar}>
      {/* <a className={styles.title} href="/">Nikhat</a> */}
      <div className={styles.menu}>
        <img className={styles.menuBtn}
          src={
            menuOpen
              ? "https://res.cloudinary.com/nikhat/image/upload/v1737722931/portfolio/tid6cwklcaprklhn0czu.png"
              : "https://res.cloudinary.com/nikhat/image/upload/v1737722945/portfolio/op0g6odyc3lnvj0ynocd.png"}
          alt="menu_button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar