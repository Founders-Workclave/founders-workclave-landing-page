// app/coming-soon/page.tsx
import styles from "./styles.module.css";
import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <div className={styles.page}>
      {/* Noise overlay */}
      <div className={styles.noise} />

      {/* Ambient orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      {/* Grid lines */}
      <div className={styles.grid} />

      {/* Horizontal beam */}
      <div className={styles.beam} />

      {/* Back button */}
      <Link href="/" className={styles.backButton}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        <span>Go back</span>
      </Link>

      {/* Content */}
      <main className={styles.main}>
        {/* Top label */}
        <div className={styles.labelRow}>
          <span className={styles.dot} />
          <span className={styles.label}>Something is being built</span>
          <span className={styles.dot} />
        </div>

        {/* Main heading */}
        <div className={styles.headingWrapper}>
          <h1 className={styles.heading}>
            <span className={styles.headingLine1}>We&apos;re</span>
            <span className={styles.headingLine2}>Coming</span>
            <span className={styles.headingLine3}>Soon</span>
          </h1>
          <div className={styles.headingGlow} />
        </div>

        {/* Divider line */}
        <div className={styles.divider}>
          <div className={styles.dividerLine} />
          <div className={styles.dividerDiamond} />
          <div className={styles.dividerLine} />
        </div>

        {/* Description */}
        <p className={styles.description}>
          We are crafting something extraordinary.
          <br />
          The wait will be worth it.
        </p>

        {/* Floating cards */}
        <div className={styles.cards}>
          <div className={`${styles.card} ${styles.card1}`}>
            <div className={styles.cardIcon}>✦</div>
            <span className={styles.cardText}>Innovative Design</span>
          </div>
          <div className={`${styles.card} ${styles.card2}`}>
            <div className={styles.cardIcon}>◈</div>
            <span className={styles.cardText}>Powerful Features</span>
          </div>
          <div className={`${styles.card} ${styles.card3}`}>
            <div className={styles.cardIcon}>⬡</div>
            <span className={styles.cardText}>Seamless Experience</span>
          </div>
        </div>

        {/* Bottom signature */}
        <div className={styles.signature}>
          <span className={styles.signatureText}>
            Stay tuned for the reveal
          </span>
          <div className={styles.signatureLine} />
        </div>
      </main>

      {/* Corner decorations */}
      <div className={`${styles.corner} ${styles.cornerTL}`} />
      <div className={`${styles.corner} ${styles.cornerTR}`} />
      <div className={`${styles.corner} ${styles.cornerBL}`} />
      <div className={`${styles.corner} ${styles.cornerBR}`} />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={styles.particle}
          style={
            {
              "--x": `${10 + ((i * 7.3) % 80)}%`,
              "--y": `${5 + ((i * 11.7) % 90)}%`,
              "--delay": `${(i * 0.7) % 4}s`,
              "--duration": `${3 + ((i * 0.4) % 4)}s`,
              "--size": `${2 + ((i * 0.3) % 4)}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
