import { motion } from 'framer-motion';
import styles from './FlowerPetals.module.css';

const petals = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  size: 22 + Math.round(Math.random() * 20),
  left: `${Math.round(Math.random() * 90)}%`,
  delay: Math.random() * 3,
  opacity: 0.5 + Math.random() * 0.4,
  rotation: Math.round(Math.random() * 120),
}));

export default function FlowerPetals() {
  return (
    <div className={styles.petalsWrapper} aria-hidden="true">
      {petals.map((petal) => (
        <motion.span
          key={petal.id}
          className={styles.petal}
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size * 0.45,
            opacity: petal.opacity,
            rotate: `${petal.rotation}deg`,
          }}
          animate={{ y: ['-10px', '20px', '-10px'], x: ['0%', '4%', '-1%'] }}
          transition={{
            duration: 9 + Math.random() * 6,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: petal.delay,
          }}
        />
      ))}
      <div className={styles.glowCircle} />
    </div>
  );
}
