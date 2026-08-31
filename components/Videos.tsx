"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./videos.module.css";

interface Video {
  id: string;
  url: string;
  youtubeId: string;
  title: string;
  meta: string;
  type: "Devlog" | "Short";
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

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedVideo(null);
      }
    };

    if (selectedVideo) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedVideo]);

  return (
    <section id="videos" className={`section ${styles.videos}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">// videos & shorts</span>
          <h2 className="section-title">Devlogs & Gameplay</h2>
          <div className="section-divider" />
        </div>

        {/* Featured Devlog Video */}
        <div style={{ marginBottom: "40px" }}>
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
          <div
            className={styles.videoCard}
            id={`video-card-${devlogVideo.id}`}
            onClick={() => setSelectedVideo(devlogVideo)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedVideo(devlogVideo);
              }
            }}
            role="button"
            tabIndex={0}
            style={{ display: "block", maxWidth: "700px", margin: "0 auto", cursor: "pointer" }}
          >
            <div className={styles.videoThumb} style={{ aspectRatio: "16 / 9" }}>
              <Image
                src={`https://img.youtube.com/vi/${devlogVideo.youtubeId}/hqdefault.jpg`}
                alt={devlogVideo.title}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                unoptimized
              />
              <div className={styles.videoPlayOverlay}>
                <div className={styles.videoPlayIcon}>▶</div>
              </div>
            </div>
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
          <div className={styles.videosGrid}>
            {shortsVideos.map((video) => (
              <div
                key={video.id}
                className={styles.videoCard}
                id={`video-card-${video.id}`}
                onClick={() => setSelectedVideo(video)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedVideo(video);
                  }
                }}
                role="button"
                tabIndex={0}
                style={{ cursor: "pointer" }}
              >
                <div className={styles.videoThumb}>
                  <Image
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                  <div className={styles.videoPlayOverlay}>
                    <div className={styles.videoPlayIcon}>▶</div>
                  </div>
                </div>
                <div className={styles.videoInfo}>
                  <p className={styles.videoTitle}>{video.title}</p>
                  <p className={styles.videoMeta}>{video.meta}</p>
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

      {/* Retro Video Player Modal */}
      {selectedVideo && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedVideo(null)}
          id="video-modal-backdrop"
        >
          <div
            className={`${styles.modalContainer} ${
              selectedVideo.type === "Short" ? styles.modalContainerShort : ""
            }`}
            onClick={(e) => e.stopPropagation()}
            id="video-modal-container"
          >
            <div className={styles.modalHeader}>
              <div className={styles.modalTitle} title={selectedVideo.title}>
                [SYSTEM_MEDIA] :: {selectedVideo.title}
              </div>
              <button
                className={styles.modalClose}
                onClick={() => setSelectedVideo(null)}
                id="video-modal-close"
                aria-label="Close Video Modal"
              >
                [X] CLOSE
              </button>
            </div>

            <div
              className={`${styles.iframeWrapper} ${
                selectedVideo.type === "Short"
                  ? styles.iframeWrapper916
                  : styles.iframeWrapper169
              }`}
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className={styles.iframe}
              />
            </div>

            <div className={styles.modalFooter}>
              <span>{selectedVideo.meta}</span>
              <a
                href={selectedVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalYtLink}
              >
                Open in YouTube ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

