import { useEffect, useState } from 'react';
import styles from './Celebration.module.css';

export default function Celebration({ isActive, onComplete }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!isActive) return;

    // Generate celebration particles
    const celebrationItems = [
      { type: 'balloon', emoji: '🎈', color: '#FFB6D9' },
      { type: 'balloon', emoji: '🎈', color: '#E0B5E0' },
      { type: 'balloon', emoji: '🎈', color: '#FFD9B3' },
      { type: 'heart', emoji: '❤️', color: '#FFB6D9' },
      { type: 'heart', emoji: '💕', color: '#FFB6D9' },
      { type: 'cake', emoji: '🎂', color: '#FFD9B3' },
      { type: 'cake', emoji: '🍰', color: '#FFD9B3' },
      { type: 'confetti', emoji: '✨', color: '#E0B5E0' },
      { type: 'confetti', emoji: '🎉', color: '#FFB6D9' },
      { type: 'confetti', emoji: '🎊', color: '#FFD9B3' },
      { type: 'star', emoji: '⭐', color: '#FFD9B3' },
      { type: 'star', emoji: '💫', color: '#E0B5E0' },
    ];

    const newParticles = celebrationItems.map((item, index) => ({
      id: `${Date.now()}-${index}`,
      ...item,
      left: Math.random() * 100,
      delay: Math.random() * 0.3,
      duration: 3 + Math.random() * 2,
      angle: Math.random() * 360,
      spin: Math.random() * 720,
    }));

    setParticles(newParticles);

    // Auto remove after animation completes
    const timer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [isActive, onComplete]);

  return (
    <div className={`${styles.celebrationContainer} ${isActive ? styles.active : ''}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={styles.particle}
          style={{
            left: `${particle.left}%`,
            '--delay': `${particle.delay}s`,
            '--duration': `${particle.duration}s`,
            '--angle': `${particle.angle}deg`,
            '--spin': `${particle.spin}deg`,
          }}
        >
          <span className={styles.emoji} style={{ '--color': particle.color }}>
            {particle.emoji}
          </span>
        </div>
      ))}
    </div>
  );
}
