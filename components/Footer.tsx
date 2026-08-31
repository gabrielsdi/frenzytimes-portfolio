import styles from "./footer.module.css";

const socialLinks = [
  {
    name: "itch.io",
    href: "https://frenzytimes.itch.io/",
    id: "footer-itchio-link",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M2.646 3A1.646 1.646 0 0 0 1 4.646v5.828c0 .245.109.475.298.63l.006.004L6.46 15.3A1.646 1.646 0 0 0 7.625 15.8h8.75a1.646 1.646 0 0 0 1.165-.5l5.156-4.192.006-.004A.814.814 0 0 0 23 10.474V4.646A1.646 1.646 0 0 0 21.354 3H2.646zM5.5 6.5h3a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zm10 0h3a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zm-6 2h5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2zM4 17.5a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 10 17.5v-1H4v1zm10-1v1a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-1h-6z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@frenzytimes",
    id: "footer-youtube-link",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com/frenzytimes91",
    id: "footer-twitter-link",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Threads",
    href: "https://threads.net/frenzytimes",
    id: "footer-threads-link",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.186 24c-3.147 0-5.823-1.026-7.74-2.967C2.518 19.083 1.5 16.29 1.5 12.72c0-3.642 1.05-6.49 3.036-8.455C6.497 2.32 9.273 1.35 12.563 1.35c3.272 0 6.068.966 8.086 2.793 1.956 1.77 2.973 4.298 2.94 7.307-.037 3.39-1.378 6.046-3.878 7.68-1.895 1.238-4.218 1.62-6.523 1.077-.442-.104-.847-.282-1.205-.53-.872.934-2.034 1.442-3.327 1.442-2.42 0-4.32-1.748-4.32-3.992 0-2.22 1.968-3.985 4.38-3.985 1.134 0 2.203.4 3.01 1.127.164-.67.437-1.254.81-1.738.647-.84 1.554-1.31 2.62-1.358h.127c.974 0 1.83.35 2.474 1.01.624.64.957 1.528.937 2.502-.03 1.517-.584 2.805-1.602 3.725-.97.876-2.26 1.306-3.732 1.246-1.053-.043-2.028-.43-2.748-1.09.284-.247.533-.532.742-.848.65.59 1.455.938 2.333.98 1.028.05 1.905-.248 2.536-.838.627-.586.968-1.423.988-2.427.014-.73-.207-1.385-.623-1.844-.41-.453-1-.692-1.705-.692-.61 0-1.122.28-1.478.81-.274.407-.448.918-.518 1.52-.08.68-.007 1.392.215 2.062.247.747.676 1.413 1.242 1.927.532.483 1.19.827 1.903.994 1.802.424 3.618.12 5.098-.847 1.986-1.298 3.05-3.41 3.08-6.108.026-2.388-.778-4.392-2.327-5.795-1.583-1.434-3.805-2.193-6.425-2.193-2.673 0-4.9.79-6.44 2.285-1.536 1.49-2.348 3.69-2.348 6.36 0 2.846.786 5.105 2.27 6.533 1.41 1.36 3.424 2.115 5.82 2.115z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
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
          </div>

          {/* Social Row */}
          <div className={styles.footerSocialRow}>
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                id={item.id}
                className={styles.socialCard}
                aria-label={item.name}
              >
                <span className={styles.socialIconWrapper}>{item.icon}</span>
                <span className={styles.socialName}>{item.name}</span>
              </a>
            ))}
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
