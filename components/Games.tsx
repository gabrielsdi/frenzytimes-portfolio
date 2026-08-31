import Image from "next/image";
import { games } from "@/lib/games";
import styles from "./games.module.css";

function DefaultAvatar() {
  return (
    <div className={styles.avatarIcon} title="User Avatar">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#222226" />
        <circle cx="12" cy="9" r="4" fill="#888890" />
        <path d="M6 19c0-3 2.7-5 6-5s6 2 6 5" fill="#888890" />
      </svg>
    </div>
  );
}

export default function Games() {
  return (
    <section id="games" className={`section ${styles.games}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">// games & reviews</span>
          <h2 className="section-title">My Games</h2>
          <div className="section-divider" />
        </div>

        <div className={styles.gamesList}>
          {games.map((game, i) => (
            <div
              key={game.id}
              className={styles.gameRow}
              style={{ animationDelay: `${i * 0.15}s` }}
              id={`game-row-${game.id}`}
            >
              {/* Game Card */}
              <article className={styles.card} id={`game-card-${game.id}`}>
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
                      className={`${styles.cardPrice} ${
                        !game.price || game.price === "Free" || game.price === "DEMO"
                          ? styles.cardPriceFree
                          : ""
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

              {/* Reviews Column */}
              <div className={styles.reviewsColumn} id={`game-reviews-${game.id}`}>
                <div className={styles.reviewBadgeHeader}>
                  <span className={styles.reviewTag}>// ITCH.IO USER REVIEWS ({game.reviews.length})</span>
                </div>

                {game.reviews.map((rev, rIdx) => (
                  <div key={rIdx} className={styles.reviewCard} id={`game-review-${game.id}-${rIdx}`}>
                    <div className={styles.reviewHeader}>
                      <div className={styles.reviewHeaderLeft}>
                        {/* Stars */}
                        <div className={styles.reviewStars} aria-label="5 out of 5 stars">
                          {"★".repeat(rev.rating)}
                        </div>

                        {/* Date */}
                        <span className={styles.reviewDate}>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          {rev.date}
                        </span>

                        {/* Author & Avatar */}
                        <div className={styles.reviewAuthorWrap}>
                          <DefaultAvatar />
                          <span className={styles.reviewAuthor}>{rev.author}</span>
                          {rev.scoreBadge && (
                            <span className={styles.reviewScoreBadge}>
                              {rev.scoreBadge}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className={styles.reviewBody}>
                      {rev.title && (
                        <h4 className={styles.reviewTitle}>{rev.title}</h4>
                      )}

                      {rev.bullets && (
                        <ul className={styles.reviewBullets}>
                          {rev.bullets.map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                          ))}
                        </ul>
                      )}

                      {rev.text && (
                        <p className={styles.reviewText}>{rev.text}</p>
                      )}

                      {rev.paragraphs && (
                        <div className={styles.reviewParagraphs}>
                          {rev.paragraphs.map((para, idx) => (
                            <p key={idx}>{para}</p>
                          ))}
                        </div>
                      )}

                      {rev.footerNote && (
                        <p className={styles.reviewFooterNote}>{rev.footerNote}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "56px" }}>
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



