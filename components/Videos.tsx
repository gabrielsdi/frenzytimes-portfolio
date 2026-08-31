"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./videos.module.css";

interface Video {
  id: string;
  url: string;
  youtubeId: string;
  title: string;
  meta: string;
  type: "Devlog" | "Short";
  isAgeRestricted?: boolean;
}

const devlogVideo: Video = {
  id: "devlog-main",
  url: "https://www.youtube.com/watch?v=qP1KIECbr4Q",
  youtubeId: "qP1KIECbr4Q",
  title: "Game Devlog — Creating Retro PSX Horror Games",
  meta: "Featured Devlog • frenzytimes",
  type: "Devlog",
};

const shortsVideos: Video[] = [
  {
    id: "short-broken-leash",
    url: "https://www.youtube.com/shorts/6G8UhUCF1Hw",
    youtubeId: "6G8UhUCF1Hw",
    title: "Broken Leash — Gameplay Short",
    meta: "Short • Broken Leash",
    type: "Short",
    isAgeRestricted: true,
  },
  {
    id: "short-crimson-faith",
    url: "https://www.youtube.com/shorts/iCXr8Q8CnDI",
    youtubeId: "iCXr8Q8CnDI",
    title: "Crimson Faith — Gameplay Short",
    meta: "Short • Crimson Faith",
    type: "Short",
  },
  {
    id: "short-prayers-abyss",
    url: "https://www.youtube.com/shorts/totcfDYgKpE",
    youtubeId: "totcfDYgKpE",
    title: "Prayers from the Abyss — DEMO Short",
    meta: "Short • Prayers from the Abyss (DEMO)",
    type: "Short",
  },
];

/* ---------- Click-to-play Devlog Embed ---------- */
function DevlogEmbed({ video }: { video: Video }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className={styles.devlogPlayerWrapper}>
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.iframe}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={styles.devlogPlayerWrapper}
      onClick={() => setActive(true)}
      aria-label={`Play ${video.title}`}
      id={`play-devlog-${video.id}`}
    >
      <Image
        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
        alt={`${video.title} thumbnail`}
        fill
        sizes="(max-width: 768px) 100vw, 750px"
        className={styles.thumbImage}
        priority
      />
      {/* Scanlines overlay */}
      <div className={styles.thumbScanlines} aria-hidden="true" />
      {/* Play button */}
      <div className={styles.playOverlay} aria-hidden="true">
        <div className={styles.playBtn}>▶</div>
        <span className={styles.playLabel}>PLAY VIDEO</span>
      </div>
    </button>
  );
}

/* ---------- Click-to-play Short Embed ---------- */
function ShortEmbed({ video }: { video: Video }) {
  const [active, setActive] = useState(false);

  if (video.isAgeRestricted) {
    return (
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ageRestrictedLink}
      >
        <div className={styles.shortThumb}>
          <Image
            src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
            alt={video.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={styles.thumbImageShort}
          />
          <div className={styles.ageBadge}>⚠️ 18+ AGE RESTRICTED</div>
          <div className={styles.agePlayOverlay}>
            <span className={styles.agePlayBtn}>▶ WATCH ON YOUTUBE</span>
          </div>
        </div>
      </a>
    );
  }

  if (active) {
    return (
      <div className={styles.shortPlayerWrapper}>
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.iframe}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={styles.shortPlayerWrapper}
      onClick={() => setActive(true)}
      aria-label={`Play ${video.title}`}
      id={`play-short-${video.id}`}
    >
      <Image
        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
        alt={`${video.title} thumbnail`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className={styles.thumbImageShort}
      />
      <div className={styles.thumbScanlines} aria-hidden="true" />
      <div className={styles.playOverlay} aria-hidden="true">
        <div className={styles.playBtn}>▶</div>
        <span className={styles.playLabel}>PLAY SHORT</span>
      </div>
    </button>
  );
}

/* ---------- Main Section ---------- */
export default function Videos() {
  return (
    <section id="videos" className={`section ${styles.videos}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">// videos &amp; shorts</span>
          <h2 className="section-title">Devlogs &amp; Gameplay</h2>
          <div className="section-divider" />
        </div>

        {/* Featured Devlog Video Embed */}
        <div style={{ marginBottom: "48px" }}>
          <h3
            style={{
              fontSize: "0.8rem",
              color: "var(--color-red)",
              marginBottom: "16px",
              fontFamily: "var(--font-pixel)",
              letterSpacing: "0.1em",
            }}
          >
            [FEATURED DEVLOG]
          </h3>
          <div className={styles.devlogCard} id={`video-card-${devlogVideo.id}`}>
            <DevlogEmbed video={devlogVideo} />
            <div className={styles.videoInfo}>
              <p className={styles.videoTitle} style={{ fontSize: "0.7rem" }}>
                {devlogVideo.title}
              </p>
              <p className={styles.videoMeta}>{devlogVideo.meta}</p>
            </div>
          </div>
        </div>

        {/* YouTube Shorts Section */}
        <div>
          <h3
            style={{
              fontSize: "0.8rem",
              color: "var(--color-red)",
              marginBottom: "16px",
              fontFamily: "var(--font-pixel)",
              letterSpacing: "0.1em",
            }}
          >
            [YOUTUBE SHORTS]
          </h3>
          <div className={styles.shortsGrid}>
            {shortsVideos.map((video) => (
              <div key={video.id} className={styles.shortCard} id={`video-card-${video.id}`}>
                <ShortEmbed video={video} />

                <div className={styles.videoInfo}>
                  <p className={styles.videoTitle}>{video.title}</p>
                  <div className={styles.metaRow}>
                    <p className={styles.videoMeta}>{video.meta}</p>
                    {video.isAgeRestricted && (
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ytDirectBtn}
                      >
                        YouTube ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a
            href="https://www.youtube.com/@frenzytimes"
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
            id="youtube-view-all"
          >
            ▶ View All on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
