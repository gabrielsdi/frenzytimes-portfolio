"use client";

import Image from "next/image";
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

      {/* VHS Top Bar (Timestamp & REC) */}
      <div className={styles.vhsBar} aria-hidden="true">
        <div className={styles.heroTimestamp}>
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}{" "}
          {time}
        </div>

        <div className={styles.heroRec}>
          <span className={styles.recDot} />
          REC
        </div>
      </div>

      <div className={styles.heroContent}>
        <p className={styles.heroSubtitle}>Indie Game Developer</p>

        <div className={styles.glitchWrapper}>
          <Image
            src="https://img.itch.zone/aW1nLzIxMjIyMjg4LnBuZw==/original/6fEP1K.png"
            alt="frenzytimes logo"
            width={800}
            height={250}
            className={styles.heroLogo}
            style={{
              filter: "drop-shadow(0 0 20px rgba(221, 74, 74, 0.5))",
            }}
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
