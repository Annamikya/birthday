import { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/hero/Hero';
import FlowerPetals from './components/petals/FlowerPetals';
import MemoryGallery from './components/gallery/MemoryGallery';
import Timeline from './components/timeline/Timeline';
import Ending from './components/ending/Ending';
import MusicPlayer from './components/music/MusicPlayer';
import Celebration from './components/celebration/Celebration';
import ClickBurst from './components/celebration/ClickBurst';
import styles from './App.module.css';

function App() {
  const [isCelebrationActive, setIsCelebrationActive] = useState(false);

  const triggerCelebration = () => {
    setIsCelebrationActive(true);
  };

  const handleCelebrationComplete = () => {
    setIsCelebrationActive(false);
  };

  return (
    <div className={styles.app}>
      <FlowerPetals />
      <ClickBurst />
      <Celebration isActive={isCelebrationActive} onComplete={handleCelebrationComplete} />

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
          onClick={triggerCelebration}
          style={{ cursor: 'pointer' }}
        >
          <p className={styles.celebrationLabel}>A gentle celebration for the one who fills every day with love</p>
        </motion.div>
        <Hero onTriggerCelebration={triggerCelebration} />
        <Timeline />
        <MemoryGallery onTriggerCelebration={triggerCelebration} />
        <Ending onTriggerCelebration={triggerCelebration} />
      </motion.main>
      <MusicPlayer />
    </div>
  );
}

export default App;
