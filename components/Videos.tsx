import Image from "next/image";
import styles from "./videos.module.css";

// Hardcoded video entries from the frenzytimes YouTube channel
// Thumbnails use the standard YouTube thumbnail URL pattern
const videos = [
  {
    id: "broken-leash-gameplay",
    youtubeId: "qHKCnq_sXpg",
    title: "Broken Leash — Survival Horror Gameplay",
    meta: "Gameplay • frenzytimes",
  },
  {
    id: "crimson-faith-gameplay",
    youtubeId: "Zr2AuYtj3jE",
    title: "Crimson Faith — Full Walkthrough",
    meta: "Walkthrough • frenzytimes",
  },
  {
    id: "prayers-abyss-gameplay",
    youtubeId: "kQ8J6yRTQhA",
    title: "Prayers from the Abyss — Demo Gameplay",
    meta: "Demo Gameplay • frenzytimes",
  },
];

export default function Videos() {
  return (
    <section id="videos" className={`section ${styles.videos}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">// videos</span>
          <h2 className="section-title">Watch Gameplay</h2>
          <div className="section-divider" />
        </div>

        {/* Channel Banner */}
        <div className={styles.channelBanner} id="youtube-channel-banner">
          <div className={styles.channelIcon} aria-hidden="true">
            <svg width="22" height="16" viewBox="0 0 22 16" fill="white">
              <path d="M21.543 2.386A2.76 2.76 0 0 0 19.607.4C17.885 0 11 0 11 0S4.115 0 2.393.4A2.76 2.76 0 0 0 .457 2.386C0 4.122 0 8 0 8s0 3.878.457 5.614A2.76 2.76 0 0 0 2.393 15.6C4.115 16 11 16 11 16s6.885 0 8.607-.4a2.76 2.76 0 0 0 1.936-1.986C22 11.878 22 8 22 8s0-3.878-.457-5.614zM8.75 11.5v-7L14.5 8l-5.75 3.5z" />
            </svg>
          </div>
          <div className={styles.channelInfo}>
            <p className={styles.channelName}>frenzytimes</p>
            <p className={styles.channelSub}>
              Horror game dev · Retro PSX content · Gameplays
            </p>
          </div>
          <a
            href="https://www.youtube.com/@frenzytimes"
            className={styles.channelLink}
            target="_blank"
            rel="noopener noreferrer"
            id="youtube-subscribe-btn"
          >
            Visit Channel →
          </a>
        </div>

        {/* Videos Grid */}
        <div className={styles.videosGrid}>
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              className={styles.videoCard}
              target="_blank"
              rel="noopener noreferrer"
              id={`video-card-${video.id}`}
            >
              <div className={styles.videoThumb}>
                {/* Use YouTube's high-quality thumbnail */}
                <Image
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className=""
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
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a
            href="https://www.youtube.com/@frenzytimes"
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
            id="youtube-view-all"
          >
            ▶ View All Videos
          </a>
        </div>
      </div>
    </section>
  );
}
