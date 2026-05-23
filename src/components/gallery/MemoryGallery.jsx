import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './MemoryGallery.module.css';

const memories = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1503437313881-503a91226423?auto=format&fit=crop&w=900&q=80',
    caption: 'First birthday cake shared with you, laughter around every candle.',
    alt: 'Family celebrating a birthday cake',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1514826786317-59744efa0a8a?auto=format&fit=crop&w=900&q=80',
    caption: 'A warm afternoon picnic where every moment felt like a hug.',
    alt: 'Mother and child at a picnic',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    caption: 'Soft golden evenings filled with shared stories and calm smiles.',
    alt: 'Family gathering at sunset',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    caption: 'A memory of holding hands and quiet walks by the flowers.',
    alt: 'Mother and daughter walking in a garden',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=900&q=80',
    caption: 'Sunlit mornings together, wrapped in soft conversation.',
    alt: 'Sunlit cozy family morning',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=80',
    caption: 'The strength of your love captured in every cherished moment.',
    alt: 'Close up of hands holding',
  },
];

export default function MemoryGallery() {
  const [activeMemory, setActiveMemory] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeMemory ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeMemory]);

  return (
    <section className={styles.gallerySection}>
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
          {memories.map((memory, index) => (
            <motion.article
              key={memory.id}
              className={styles.memoryCard}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: 'easeOut' }}
              onClick={() => setActiveMemory(memory)}
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
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
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
