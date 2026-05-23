import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './MemoryGallery.module.css';
import { galleryImages } from '../../data/memories';

export default function MemoryGallery({ onTriggerCelebration }) {
  const [activeMemory, setActiveMemory] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeMemory ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeMemory]);

  const handleCardClick = (memory) => {
    setActiveMemory(memory);
    if (onTriggerCelebration) {
      onTriggerCelebration();
    }
  };

  const handleLightboxClick = () => {
    if (onTriggerCelebration) {
      onTriggerCelebration();
    }
  };

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.sectionHeader}>
        <div>
          <p className={styles.sectionLabel}>Memory Gallery</p>
          <h2 className={styles.sectionTitle}>Treasured moments from our journey together</h2>
        </div>
        <p className={styles.sectionIntro}>
          Softly revisiting the memories that shaped us, wrapped in warmth and a gentle glow.
        </p>
      </div>

      <div className={styles.gridWrapper}>
        <div className={styles.decorativeFloral} />
        <div className={styles.memoryGrid}>
          {galleryImages.map((memory, index) => (
            <motion.article
              key={memory.id}
              className={styles.memoryCard}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: 'easeOut' }}
              onClick={() => handleCardClick(memory)}
            >
              <div className={styles.imageButton}>
                <img
                  src={memory.src}
                  alt={memory.alt}
                  loading="lazy"
                  decoding="async"
                  className={styles.memoryImage}
                />
                <div className={styles.zoomOverlay} />
              </div>
              <p className={styles.memoryCaption}>{memory.caption}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeMemory && (
          <motion.div
            className={styles.lightboxOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveMemory(null)}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => {
                e.stopPropagation();
                handleLightboxClick();
              }}
            >
              <button
                className={styles.lightboxClose}
                onClick={() => setActiveMemory(null)}
                aria-label="Close gallery lightbox"
              >
                ×
              </button>
              <img
                src={activeMemory.src}
                alt={activeMemory.alt}
                decoding="async"
                className={styles.lightboxImage}
              />
              <p className={styles.lightboxCaption}>{activeMemory.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
