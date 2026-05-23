import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './MusicPlayer.module.css';

const musicUrl = 'https://assets.mixkit.co/music/preview/mixkit-sweet-guitar-1240.mp3';
const maxVolume = 0.16;

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAttemptedAutoplay, setHasAttemptedAutoplay] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0;
    audio.loop = true;
    audio.preload = 'auto';

    const attemptAutoplay = async () => {
      setHasAttemptedAutoplay(true);
      try {
        await audio.play();
        fadeVolume(0, maxVolume);
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    attemptAutoplay();

    return () => {
      clearInterval(fadeIntervalRef.current);
      if (audio && !audio.paused) {
        audio.pause();
      }
    };
  }, []);

  const fadeVolume = (from, to, onComplete) => {
    const audio = audioRef.current;
    if (!audio) return;

    clearInterval(fadeIntervalRef.current);
    const duration = 700;
    const interval = 40;
    const steps = Math.max(1, Math.round(duration / interval));
    let current = from;
    const stepValue = (to - from) / steps;

    audio.volume = from;
    fadeIntervalRef.current = window.setInterval(() => {
      current += stepValue;
      if ((stepValue > 0 && current >= to) || (stepValue < 0 && current <= to)) {
        audio.volume = to;
        clearInterval(fadeIntervalRef.current);
        if (onComplete) onComplete();
        return;
      }
      audio.volume = Math.max(0, Math.min(1, current));
    }, interval);
  };

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      fadeVolume(audio.volume, 0, () => {
        audio.pause();
        setIsPlaying(false);
      });
      return;
    }

    try {
      await audio.play();
      fadeVolume(audio.volume, maxVolume);
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={musicUrl} />
      <motion.button
        type="button"
        className={styles.musicButton}
        onClick={togglePlayback}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        aria-label="Toggle background music"
        aria-pressed={isPlaying}
      >
        <span className={styles.circleGlow} />
        <span className={styles.icon} aria-hidden="true">
          {isPlaying ? '♪' : '♫'}
        </span>
        <span className={styles.label}>{isPlaying ? 'Pause music' : 'Play music'}</span>
      </motion.button>
      {!hasAttemptedAutoplay && (
        <div className={styles.hint}>Tap to start the soft background music</div>
      )}
    </>
  );
}
