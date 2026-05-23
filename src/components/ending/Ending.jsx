import { motion } from 'framer-motion';
import styles from './Ending.module.css';

export default function Ending({ onTriggerCelebration }) {
  return (
    <motion.section
      className={styles.endingSection}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.05, ease: 'easeOut' }}
    >
      <div className={styles.sparkleLayer} aria-hidden="true">
        <span className={styles.sparkle} />
        <span className={styles.sparkle} />
        <span className={styles.sparkle} />
      </div>

      <div className={styles.balloonWrapper} aria-hidden="true">
        <div className={styles.balloon}>
          <div className={styles.balloonHighlight} />
          <div className={styles.balloonString} />
        </div>
        <div className={styles.confettiPacket}>
          <span className={styles.confettiPiece} />
          <span className={styles.confettiPiece} />
          <span className={styles.confettiPiece} />
        </div>
      </div>

      <div className={styles.endingContent}>
        <div className={styles.letterCard} onClick={onTriggerCelebration}>
          <p className={styles.preTitle}>A final note wrapped in gratitude</p>
          <h2 className={styles.title}>I Love You Maa ❤️</h2>
          <p className={styles.message}>
            Thank you for being the warm heart of our home, the voice of comfort in quiet moments, and the beautiful memory in every celebration.
            Your love gives us courage, and today we celebrate the endless kindness you share with the world.
          </p>
          <p className={styles.closing}>With all my love, forever and always.</p>
        </div>
      </div>

      <div className={styles.petalsLayer} aria-hidden="true">
        <span className={styles.petal} />
        <span className={styles.petal} />
        <span className={styles.petal} />
      </div>
      <div className={styles.endFadeOverlay} aria-hidden="true" />
    </motion.section>
  );
}
