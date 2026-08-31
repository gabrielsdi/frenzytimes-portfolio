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
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (currentScrollY > 60) {
        if (currentScrollY > prevScrollY && currentScrollY - prevScrollY > 5) {
          setVisible(false);
        } else if (prevScrollY - currentScrollY > 5) {
          setVisible(true);
        }
      } else {
        setVisible(true);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash) {
      window.history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
    }
  };

  return (
    <>
      <nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${
          !visible && !menuOpen ? styles.hidden : ""
        }`}
      >
        <div className={`container ${styles.navbarInner}`}>
          <a
            href="#"
            className={styles.navbarLogo}
            id="nav-logo"
            onClick={handleLogoClick}
          >
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
