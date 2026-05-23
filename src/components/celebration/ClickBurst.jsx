import { useEffect, useState } from 'react';
import styles from './ClickBurst.module.css';

const EMOJIS = ['🎈', '❤️', '🎂', '✨', '🎉', '🌸', '💖', '🍬', '🍰', '💝'];

export default function ClickBurst() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      // Don't spawn bursts on clicking close buttons or audio controls to keep those clean,
      // but for any general element, spawn a beautiful particle explosion!
      const target = e.target;
      if (
        target.closest('button') && 
        (target.closest('button').ariaLabel?.includes('music') || target.className.includes('lightboxClose'))
      ) {
        return;
      }

      const x = e.clientX;
      const y = e.clientY;

      // Spawn 8 to 12 particles for a rich, premium feel
      const count = 8 + Math.floor(Math.random() * 5);
      const newParticles = [];

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * 360;
        const distance = 40 + Math.random() * 90;
        const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
        const size = 1.0 + Math.random() * 1.3; // size from 1.0rem to 2.3rem
        const duration = 0.6 + Math.random() * 0.5; // duration from 0.6s to 1.1s
        const id = `${Date.now()}-${Math.random()}`;

        // Calculate trigonometry in JS for full browser compatibility
        const rad = (angle * Math.PI) / 180;
        const tx = Math.cos(rad) * distance;
        const ty = Math.sin(rad) * distance - 40; // drift upward

        newParticles.push({
          id,
          x,
          y,
          emoji,
          size,
          tx,
          ty,
          duration,
        });
      }

      setParticles((prev) => [...prev, ...newParticles]);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  // Periodically clean up old particles to save memory
  useEffect(() => {
    if (particles.length === 0) return;

    const timer = setTimeout(() => {
      const now = Date.now();
      setParticles((prev) =>
        prev.filter((p) => {
          const timestamp = parseFloat(p.id.split('-')[0]);
          return now - timestamp < 1500;
        })
      );
    }, 1500);

    return () => clearTimeout(timer);
  }, [particles]);

  return (
    <div className={styles.burstContainer}>
      {particles.map((p) => (
        <div
          key={p.id}
          className={styles.particle}
          style={{
            top: p.y,
            left: p.x,
            fontSize: `${p.size}rem`,
            '--tx': `${p.tx}px`,
            '--ty': `${p.ty}px`,
            '--duration': `${p.duration}s`,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </div>
  );
}
