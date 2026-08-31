import styles from "./about.module.css";

const stats = [
  { number: "3+", label: "Games published on itch.io" },
  { number: "PSX", label: "Retro aesthetic — PS1 era horror" },
  { number: "∞", label: "Hours of survival horror gameplay" },
];

const tags = [
  "Survival Horror",
  "Retro PSX",
  "Indie Dev",
  "Unreal Engine",
  "Low Poly",
  "Atmospheric",
  "Single Player",
];

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">// about</span>
          <h2 className="section-title">Who is frenzytimes?</h2>
          <div className="section-divider" />
        </div>

        <div className={styles.aboutGrid}>
          {/* Left */}
          <div className={styles.aboutLeft}>
            <p className={styles.aboutTagline}>
              An indie developer obsessed with{" "}
              <em>retro PSX-style horror</em> games.
            </p>

            <p className={styles.aboutText}>
              I create atmospheric survival horror experiences inspired by the
              golden era of PlayStation 1 — that unique look of low-poly 3D,
              pre-rendered backgrounds and tank controls that defined a
              generation of horror games.
            </p>

            <p className={styles.aboutText}>
              Every game I make is a love letter to the classics: Silent Hill,
              Resident Evil, Clock Tower. I believe horror doesn&apos;t need
              cutting-edge graphics — it needs atmosphere, tension, and that
              authentic grainy feel of the late 90s.
            </p>

            <div className={styles.tagsList}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.aboutLinks}>
              <a
                href="https://www.youtube.com/@frenzytimes"
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                id="about-youtube-link"
              >
                ▶ YouTube Channel
              </a>
            </div>
          </div>

          {/* Right — Stats */}
          <div className={styles.aboutRight}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
