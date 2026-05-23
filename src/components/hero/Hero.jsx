import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
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
          <button className={styles.heroButton}>Memories With You</button>
        </motion.div>

        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.15 }}
        >
          <div className={styles.imageFrame}>
            <div className={styles.decorativePetal} />
            <div className={styles.decorativeLeaf} />
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
              alt="Mother smiling surrounded by flowers"
              className={styles.heroImage}
              decoding="async"
            />
          </div>
          <div className={styles.quoteBadge}>
            “Your presence blossoms in every loving memory.”
          </div>
        </motion.div>
      </div>
    </section>
  );
}
