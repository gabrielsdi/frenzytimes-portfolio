"use client";

import { useEffect, useState } from "react";
import styles from "./hero.module.css";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const pad = (n: number) => String(n).padStart(2, "0");
      setTime(
        `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroBg} />

      {/* VHS Timestamp */}
      <div className={styles.heroTimestamp} aria-hidden="true">
        {new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}{" "}
        {time}
      </div>

      {/* REC indicator */}
      <div className={styles.heroRec} aria-hidden="true">
        <span className={styles.recDot} />
        REC
      </div>

      <div className={styles.heroContent}>
        <p className={styles.heroSubtitle}>Indie Game Developer</p>

        <div className={styles.glitchWrapper}>
          <h1
            className={styles.heroTitle}
            data-text="frenzytimes"
            id="hero-title"
          >
            frenzytimes
          </h1>
        </div>

        <div className={styles.heroDivider} aria-hidden="true" />

        <p className={styles.heroDescription}>
          Crafting retro PSX-style horror experiences. Explore worlds where
          darkness breathes, shadows have memory, and every sound could be your
          last.
        </p>

        <div className={styles.heroCta}>
          <a
            href="#games"
            className="btn btn-primary"
            id="hero-cta-games"
          >
            ▶ View Games
          </a>
          <a
            href="https://frenzytimes.itch.io/"
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-itchio"
          >
            itch.io Profile
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span className={styles.scrollLabel}>scroll</span>
      </div>
    </section>
  );
}
