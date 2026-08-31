import Image from "next/image";
import { games } from "@/lib/games";
import styles from "./games.module.css";

export default function Games() {
  return (
    <section id="games" className={`section ${styles.games}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">// games</span>
          <h2 className="section-title">My Games</h2>
          <div className="section-divider" />
        </div>

        <div className={styles.gamesGrid}>
          {games.map((game, i) => (
            <article
              key={game.id}
              className={styles.card}
              style={{ animationDelay: `${i * 0.1}s` }}
              id={`game-card-${game.id}`}
            >
              <div className={styles.cardTapeLabel} />

              {/* Image */}
              <div className={styles.cardImageWrap}>
                <Image
                  src={game.coverImage}
                  alt={`${game.title} cover`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.cardImage}
                  priority={i === 0}
                />

              </div>

              {/* Content */}
              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardGenre}>{game.genre}</span>
                  <span
                    className={`${styles.cardPrice} ${!game.price ? styles.cardPriceFree : ""
                      }`}
                  >
                    {game.price ?? "Free"}
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{game.title}</h3>

                <p className={styles.cardDescription}>{game.description}</p>

                <div className={styles.cardTags}>
                  {game.tags.map((tag) => (
                    <span key={tag} className={styles.cardTag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.cardPlatform}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                    </svg>
                    {game.platform}
                  </span>

                  <a
                    href={game.itchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardCta}
                    id={`game-cta-${game.id}`}
                  >
                    View on itch.io →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a
            href="https://frenzytimes.itch.io/"
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
            id="games-view-all"
          >
            View All on itch.io →
          </a>
        </div>
      </div>
    </section>
  );
}
