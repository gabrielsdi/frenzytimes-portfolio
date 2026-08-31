"use client";

import { useState, useEffect } from "react";
import styles from "./navbar.module.css";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#games", label: "Games" },
  { href: "#videos", label: "Videos" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.navbarInner}`}>
          <a href="#hero" className={styles.navbarLogo} id="nav-logo">
            <span className={styles.logoBracket}>[</span>
            frenzytimes
            <span className={styles.logoBracket}>]</span>
          </a>

          <ul className={styles.navbarLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} id={`nav-${link.label.toLowerCase()}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            id="nav-mobile-toggle"
            className={`${styles.navbarToggle} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.navbarMobile} ${menuOpen ? styles.open : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleNavClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
