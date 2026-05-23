import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero({ onTriggerCelebration }) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <span className={styles.petalGlow} />
        <span className={styles.softGlow} />
      </div>

      <div className={styles.heroInner}>
        <motion.div
          className={styles.heroCopy}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          <span className={styles.heroLabel}>A gentle bouquet of love, just for you</span>
          <h1 className={styles.heroTitle}>Happy Birthday Maa ❤️</h1>
          <p className={styles.heroText}>
            Your love makes every day feel softer and more beautiful. Today we celebrate your warmth,
            the memories you gave us, and the gentle light you carry in every moment.
          </p>
          <button
            className={styles.heroButton}
            onClick={() => {
              document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
              if (onTriggerCelebration) onTriggerCelebration();
            }}
          >
            Memories With You
          </button>
        </motion.div>

        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.15 }}
        >
          <div className={styles.imageFrame} onClick={onTriggerCelebration}>
            <div className={styles.decorativePetal} />
            <div className={styles.decorativeLeaf} />
            <img
              src="/images/hero/mom-main.jpg"
              alt="Maa smiling beautifully"
              className={styles.heroImage}
              decoding="async"
            />
          </div>
          <div className={styles.quoteBadge} onClick={onTriggerCelebration}>
            “Your presence blossoms in every loving memory.”
          </div>
        </motion.div>
      </div>
    </section>
  );
}
