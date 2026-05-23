import { motion } from 'framer-motion';
import styles from './Timeline.module.css';

const moments = [
  {
    id: 1,
    icon: '🌸',
    title: 'First steps by your side',
    date: 'Childhood',
    description: 'I still remember the way your hand felt as I took my first little steps, steady and full of love.',
  },
  {
    id: 2,
    icon: '📚',
    title: 'Homework warmed by your smile',
    date: 'School days',
    description: 'Every quiet evening with you nearby made learning feel gentle and safe, like a warm hug.',
  },
  {
    id: 3,
    icon: '🎂',
    title: 'A birthday surprise in the kitchen',
    date: 'Family moments',
    description: 'Your thoughtful touch on every celebration turned ordinary days into the sweetest memories.',
  },
  {
    id: 4,
    icon: '❤️',
    title: 'A quiet support in tough times',
    date: 'Milestones',
    description: 'Your calm strength held our family together, reminding us that love is the greatest gift.',
  },
  {
    id: 5,
    icon: '☕',
    title: 'Morning tea and heartfelt talks',
    date: 'Today',
    description: 'Those soft mornings with you are the moments I carry with me when I need comfort and joy.',
  },
];

export default function Timeline() {
  return (
    <section className={styles.timelineSection}>
      <div className={styles.timelineHeader}>
        <p className={styles.timelineLabel}>Story of Us</p>
        <h2 className={styles.timelineTitle}>A tender timeline of beloved memories</h2>
        <p className={styles.timelineIntro}>
          Each step tells a story—childhood laughter, family warmth, milestones of gratitude, and the quiet moments that feel like home.
        </p>
      </div>

      <div className={styles.timelineWrapper}>
        <div className={styles.timelineLine} aria-hidden="true" />
        {moments.map((moment, index) => (
          <motion.article
            key={moment.id}
            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: index * 0.08 }}
          >
            <div className={styles.cardGlow} />
            <div className={styles.timelineBadge}>
              <span className={styles.timelineIcon}>{moment.icon}</span>
              <span className={styles.timelineDate}>{moment.date}</span>
            </div>
            <div className={styles.timelineCard}>
              <h3>{moment.title}</h3>
              <p>{moment.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
