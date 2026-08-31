import styles from "./footer.module.css";

const socials = [
  {
    id: "footer-itchio",
    label: "itch",
    href: "https://frenzytimes.itch.io/",
    ariaLabel: "itch.io profile",
  },
  {
    id: "footer-youtube",
    label: "YT",
    href: "https://www.youtube.com/@frenzytimes",
    ariaLabel: "YouTube channel",
  },
  {
    id: "footer-twitter",
    label: "X",
    href: "https://twitter.com/frenzytimes91",
    ariaLabel: "Twitter / X profile",
  },
  {
    id: "footer-threads",
    label: "Th",
    href: "https://threads.net/frenzytimes",
    ariaLabel: "Threads profile",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand */}
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>
              <span className={styles.footerBracket}>[</span>
              frenzytimes
              <span className={styles.footerBracket}>]</span>
            </span>
            <p className={styles.footerTagline}>
              Indie horror game developer crafting retro PSX-style survival
              experiences. Every game is a descent into darkness.
            </p>
            <div className={styles.footerSocial}>
              {socials.map((s) => (
                <a
                  key={s.id}
                  id={s.id}
                  href={s.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.ariaLabel}
                  title={s.ariaLabel}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Games */}
          <div className={styles.footerCol}>
            <h4>Games</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a
                  href="https://frenzytimes.itch.io/broken-leash"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-broken-leash"
                >
                  Broken Leash
                </a>
              </li>
              <li>
                <a
                  href="https://frenzytimes.itch.io/crimson-faith"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-crimson-faith"
                >
                  Crimson Faith
                </a>
              </li>
              <li>
                <a
                  href="https://frenzytimes.itch.io/prayers-from-the-abyss"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-prayers"
                >
                  Prayers from the Abyss
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className={styles.footerCol}>
            <h4>Links</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a
                  href="https://frenzytimes.itch.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-itchio-link"
                >
                  itch.io
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@frenzytimes"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-youtube-link"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/frenzytimes91"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-twitter-link"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://threads.net/frenzytimes"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-threads-link"
                >
                  Threads
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.footerCopy}>
            © {year} frenzytimes — All rights reserved
          </p>
          <span className={styles.footerVhs}>
            <span className={styles.vhsIcon}>▶</span>
            VHS MODE — RETRO PSX HORROR
          </span>
        </div>
      </div>
    </footer>
  );
}
