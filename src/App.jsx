import { motion } from 'framer-motion';
import Hero from './components/hero/Hero';
import FlowerPetals from './components/petals/FlowerPetals';
import MemoryGallery from './components/gallery/MemoryGallery';
import Timeline from './components/timeline/Timeline';
import Ending from './components/ending/Ending';
import MusicPlayer from './components/music/MusicPlayer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <FlowerPetals />
      <motion.main
        className={styles.main}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className={styles.introCard}
        >
          <p className={styles.celebrationLabel}>A gentle celebration for the one who fills every day with love</p>
        </motion.div>
        <Hero />
        <Timeline />
        <MemoryGallery />
        <Ending />
      </motion.main>
      <MusicPlayer />
    </div>
  );
}

export default App;
