"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logoImg from "../public/logo.png";
import styles from "./hero.module.css";

export default function Hero() {
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const pad = (n: number) => String(n).padStart(2, "0");

      const month = pad(now.getUTCMonth() + 1);
      const day = pad(now.getUTCDate());
      const year = now.getUTCFullYear();

      const hours = pad(now.getUTCHours());
      const minutes = pad(now.getUTCMinutes());
      const seconds = pad(now.getUTCSeconds());

      setTimestamp(`${month}/${day}/${year} ${hours}:${minutes}:${seconds}`);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroBg} />

      {/* VHS Top Bar (Timestamp & REC) */}
      <div className={styles.vhsBar} aria-hidden="true">
        <div className={styles.heroTimestamp}>{timestamp}</div>

        <div className={styles.heroRec}>
          <span className={styles.recDot} />
          REC
        </div>
      </div>

      <div className={styles.heroContent}>
        <p className={styles.heroSubtitle}>Indie Game Developer</p>

        <div className={styles.glitchWrapper}>
          <Image
            src={logoImg}
            alt="frenzytimes logo"
            className={styles.heroLogo}
            priority
          />
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
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span className={styles.scrollLabel}>scroll</span>
      </div>
    </section>
  );
}
