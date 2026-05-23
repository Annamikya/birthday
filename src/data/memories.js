// src/data/memories.js
// Timeline events and gallery data for Mom's birthday website

export const timelineEvents = [
  {
    id: 1,
    year: "1960s",
    title: "The Beginning",
    description: "Your journey began with dreams, hope, and a loving heart that would change everything for your family.",
    emoji: "🌅"
  },
  {
    id: 2,
    year: "1980s",
    title: "Love & Commitment",
    description: "You built a family with endless sacrifices and unconditional love, laying the foundation of our beautiful home.",
    emoji: "❤️"
  },
  {
    id: 3,
    year: "My Childhood",
    title: "My First Memories",
    description: "Every lullaby, every hug, every tear you wiped away - made me feel safe, loved, and cherished forever.",
    emoji: "🎀"
  },
  {
    id: 4,
    year: "Growing Up",
    title: "Learning From You",
    description: "You taught me kindness, strength, and the true meaning of unconditional love through your actions every single day.",
    emoji: "🌸"
  },
  {
    id: 5,
    year: "Today",
    title: "My Inspiration",
    description: "You remain my biggest inspiration - a living example of grace, sacrifice, and endless love for your family.",
    emoji: "👑"
  },
  {
    id: 6,
    year: "Forever",
    title: "Eternal Gratitude",
    description: "No words can express enough gratitude for being the pillar, the strength, and the heart of our family.",
    emoji: "💎"
  }
];

export const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/memory1.jpg",
    caption: "Beautiful Moments",
    alt: "Family memories"
  },
  {
    id: 2,
    src: "/images/gallery/memory2.jpg",
    caption: "Cherished Times",
    alt: "Happy occasions"
  },
  {
    id: 3,
    src: "/images/gallery/memory3.jpg",
    caption: "Love & Laughter",
    alt: "Family celebrations"
  },
  {
    id: 4,
    src: "/images/gallery/memory4.jpg",
    caption: "Special Moments",
    alt: "Precious memories"
  },
  {
    id: 5,
    src: "/images/gallery/memory5.jpg",
    caption: "Forever Memories",
    alt: "Lasting impressions"
  },
  {
    id: 6,
    src: "/images/gallery/memory6.jpg",
    caption: "Our Story",
    alt: "Family bond"
  }
];

export const heroText = {
  mainHeading: "Happy Birthday Mom",
  subtitle: "You are the reason behind every smile, every strength, and every beautiful memory in my life.",
  scrollCTA: "Scroll to explore our journey together"
};

export const endingMessage = {
  title: "Thank You Mom",
  mainText: "Thank you for being my home, my strength, and my biggest blessing.",
  finalWords: "You deserve all the love, happiness, and brightness in the world.",
  emoji: "❤️"
};

export const musicConfig = {
  src: "/music/background-music.mp3",
  autoplay: true,
  loop: true,
  defaultVolume: 0.3
};

// Instructions for customization:
// 1. Update timelineEvents with your real memories
// 2. Add your images to /public/images/gallery/ and update galleryImages
// 3. Customize heroText and endingMessage
// 4. Place your background music at /public/music/background-music.mp3
