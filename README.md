# 🌸 Birthday Website for Mom

A beautiful, emotional birthday website celebrating your mother with soft pastel aesthetics, floral themes, smooth animations, and heartfelt storytelling.

**Birthday Date**: June 3, 2026

---

## 📋 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🎯 Project Structure

```
birthday-website/
│
├── public/                          # Static files
│   ├── images/
│   │   ├── hero/
│   │   │   └── [Place hero image here]
│   │   └── gallery/
│   │       └── [Place memory images here]
│   └── music/
│       └── background-music.mp3     # ✅ Already placed
│
├── src/
│   ├── components/
│   │   ├── hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.module.css
│   │   ├── gallery/
│   │   │   ├── MemoryGallery.jsx
│   │   │   └── MemoryGallery.module.css
│   │   ├── music/
│   │   │   ├── MusicPlayer.jsx
│   │   │   └── MusicPlayer.module.css
│   │   ├── timeline/
│   │   │   ├── Timeline.jsx
│   │   │   └── Timeline.module.css
│   │   ├── petals/
│   │   │   ├── FlowerPetals.jsx
│   │   │   └── FlowerPetals.module.css
│   │   └── ending/
│   │       ├── Ending.jsx
│   │       └── Ending.module.css
│   │
│   ├── styles/
│   │   ├── global.css              # Global styles
│   │   ├── colors.css              # Color palette
│   │   ├── animations.css          # All animations
│   │   └── typography.css          # Font system
│   │
│   ├── data/
│   │   └── memories.js             # Timeline & gallery data
│   │
│   ├── App.jsx
│   ├── App.module.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
├── PROMPTS.md                      # 7 Optimized prompts guide
└── README.md                        # This file
```

---

## 🎨 Customization Guide

### Step 1: Update Timeline & Memories Data

Edit **`src/data/memories.js`** to personalize the content:

```javascript
export const timelineEvents = [
  {
    id: 1,
    year: "Your Year",
    title: "Your Memory Title",
    description: "Your personal memory description",
    emoji: "🌸"
  },
  // Add more timeline events...
];

export const heroText = {
  mainHeading: "Happy Birthday Mom",
  subtitle: "Your custom message here...",
  scrollCTA: "Scroll to explore our journey together"
};

export const endingMessage = {
  title: "Thank You Mom",
  mainText: "Your final message here...",
  finalWords: "More heartfelt words...",
  emoji: "❤️"
};
```

### Step 2: Add Images

#### Hero Image (Main Image)
1. Place your best emotional image in: **`public/images/hero/`**
2. Name it: **`mom-main.jpg`** (or any name)
3. Update [src/components/hero/Hero.jsx](src/components/hero/Hero.jsx):
   ```jsx
   <img
     src="/images/hero/mom-main.jpg"  // Update this path
     alt="Mother's beautiful photo"
   />
   ```

#### Gallery Images (Memories)
1. Place 6+ high-quality images in: **`public/images/gallery/`**
2. Suggested names:
   - `memory1.jpg`
   - `memory2.jpg`
   - `memory3.jpg`
   - etc.

3. Update [src/data/memories.js](src/data/memories.js):
   ```javascript
   export const galleryImages = [
     {
       id: 1,
       src: "/images/gallery/memory1.jpg",
       caption: "Beautiful moment",
       alt: "Family photo"
     },
     // Add more images...
   ];
   ```

#### Image Optimization Tips
- **Size**: Keep each image 200KB - 500KB
- **Dimensions**: 1200x800px or 1000x667px (landscape recommended)
- **Format**: JPEG for photos, PNG for graphics with transparency
- **Aspect Ratio**: Try to keep consistent aspect ratio for gallery

### Step 3: Audio File (✅ Already Set Up)

Your audio file has been automatically placed at:
- **Location**: `public/music/background-music.mp3`
- **Current**: WhatsApp Audio from May 23, 2026

**To replace it:**
1. Add your new audio file to: **`public/music/`**
2. Name it: **`background-music.mp3`**
3. The player will automatically use it

**Audio Guidelines:**
- ✅ Use: Soft piano, instrumental, calm acoustic, emotional ambient
- ❌ Avoid: Loud Bollywood tracks, heavy vocals, dramatic sad songs
- **Volume**: Defaults to 30% (supports emotion, doesn't dominate)

### Step 4: Customize Text & Messaging

#### Hero Section
File: [src/components/hero/Hero.jsx](src/components/hero/Hero.jsx)
```jsx
<h1>Your custom heading</h1>
<p>Your custom message here</p>
```

#### Timeline Section
File: [src/data/memories.js](src/data/memories.js)
- Add your personal timeline events
- Use meaningful emojis (🌸 🎀 👑 ❤️ etc.)

#### Ending Section
File: [src/components/ending/Ending.jsx](src/components/ending/Ending.jsx)
```jsx
<h2>Your final message</h2>
<p>Your closing words...</p>
```

---

## 🎭 Understanding the Architecture

### Components

| Component | Purpose | Files |
|-----------|---------|-------|
| **Hero** | Full-screen emotional greeting | `hero/` |
| **MusicPlayer** | Auto-play background music | `music/` |
| **FlowerPetals** | Floating petal animations | `petals/` |
| **Timeline** | Story of memories | `timeline/` |
| **MemoryGallery** | Photo grid with animations | `gallery/` |
| **Ending** | Final emotional message | `ending/` |

### Styling System

| File | Purpose |
|------|---------|
| `colors.css` | Pastel color palette & CSS variables |
| `typography.css` | Font families & sizes |
| `animations.css` | All smooth animations |
| `global.css` | Global utilities & resets |

### Data

| File | Purpose |
|------|---------|
| `memories.js` | Timeline events, gallery images, messages |

---

## 🎨 Color Palette

The website uses a soft pastel color system:

```css
--pastel-pink: #FFB6D9;
--pastel-lavender: #E0B5E0;
--pastel-cream: #FFF8F0;
--pastel-peach: #FFD9B3;
```

To customize colors, edit **`src/styles/colors.css`**

---

## 🎬 Animation System

All animations are defined in **`src/styles/animations.css`**:

- `fadeIn` - Gentle fade in
- `fadeInUp` - Fade in with upward movement
- `floating` - Petal floating animation
- `pulseGlow` - Glowing pulse effect
- `heartBeat` - Heart beat animation
- And more...

To disable animations for accessibility, the stylesheet respects `prefers-reduced-motion`

---

## 🚀 Performance Tips

### Image Optimization
```bash
# Use tools like:
# - TinyPNG: https://tinypng.com/
# - ImageOptim: https://imageoptim.com/
# - Squoosh: https://squoosh.app/
```

### Best Practices
- Keep images under 500KB
- Use modern formats (WebP with JPG fallback)
- Enable lazy loading (already done in gallery)
- Optimize animations (smooth 60fps)

### Build Optimization
The project uses Vite for fast builds:
```bash
npm run build  # Creates optimized production build
```

---

## 📱 Responsive Design

The website is fully responsive:
- **Desktop**: Full experience with all animations
- **Tablet**: Adjusted layouts & spacing
- **Mobile**: Optimized for touch, readable text, efficient animations

All breakpoints are defined in the CSS modules and global styles.

---

## ♿ Accessibility

The website includes:
- ✅ Semantic HTML
- ✅ Alt text for all images
- ✅ Readable font sizes
- ✅ Proper contrast ratios
- ✅ Keyboard navigation
- ✅ Respects `prefers-reduced-motion`

---

## 📝 PROMPTS Reference

For detailed implementation guidelines, see **[PROMPTS.md](PROMPTS.md)**

This file contains:
1. Master Website Concept
2. Hero Section Design
3. Image Gallery Design
4. Music Player Design
5. Timeline Design
6. Final Ending Design
7. UI/UX Optimization

---

## 🛠️ Troubleshooting

### Audio not playing?
- Check browser autoplay settings
- Ensure audio file is at `/public/music/background-music.mp3`
- Try clicking the music player button manually

### Images not showing?
- Verify images are in correct folder: `/public/images/`
- Check file names match in code
- Ensure images are in supported format (JPG, PNG, WebP)

### Styles not applied?
- Clear browser cache (Ctrl+Shift+Delete)
- Rebuild project: `npm run build`
- Check CSS class names match component names

### Animations not smooth?
- Check browser hardware acceleration is enabled
- Reduce animation complexity if on older devices
- The site respects `prefers-reduced-motion` setting

---

## 💡 Development Tips

### Add a New Memory
1. Edit `src/data/memories.js`
2. Add to `timelineEvents` array
3. Add image to `/public/images/gallery/`
4. Restart dev server

### Customize Colors
1. Edit `src/styles/colors.css`
2. Update CSS variables
3. All components automatically use new colors

### Add New Animations
1. Define animation in `src/styles/animations.css`
2. Use animation class in components
3. Fine-tune timing & easing as needed

---

## 📞 Support

For issues or questions:
1. Check the PROMPTS.md file
2. Review component files and their CSS modules
3. Check browser console for errors
4. Verify all file paths are correct

---

## 🎁 Make It Special

### Key Principles for Maximum Impact

✨ **Emotional > Technical**
- Clean elegant website hits harder than overloaded one
- Quality spacing + smooth music + heartfelt text > flashy particles
- Less is more

🎯 **Design Principles**
- Max 3 animations per section
- Consistent animation timing
- Soft shadows only
- Pastel colors exclusively
- No neon or harsh colors

🎵 **Music Guidelines**
- Background music supports emotion, doesn't dominate
- Use instrumental tracks
- Low default volume (30%)
- Smooth fade transitions

📱 **Responsive First**
- Mobile-friendly everywhere
- Touch-friendly buttons
- Readable text at all sizes

---

## 🎂 Ready?

1. Add your images
2. Update memories & messages
3. Test on mobile
4. Deploy & celebrate! 🎉

**Happy Birthday to your Mother!** ❤️

---

**Website Created**: May 23, 2026
**Birthday Date**: June 3, 2026
**Theme**: Emotional, Elegant, Memorable

Made with ❤️ using React, Framer Motion, and Vite
