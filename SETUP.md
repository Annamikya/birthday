# 🎁 Birthday Website Setup & Customization Guide

## Complete Step-by-Step Instructions

This guide will walk you through personalizing the birthday website for your mother.

---

## 📦 What You Need

✅ **Audio File**: Already in place
- Location: `/public/music/background-music.mp3`
- Your WhatsApp audio has been converted and placed here

❌ **You Still Need to Add**:
- Hero image (main image of your mother)
- Gallery images (6+ memory photos)
- Personalized text & messages
- Timeline events

---

## Step 1: Add Images

### 1A. Hero Image (Main Image)

This is the first image people see on the website.

**File Location**: `public/images/hero/`

**Steps**:
1. Choose your best emotional photo of your mother
2. Save it as: `mom-main.jpg` (or similar name)
3. Place it in: `public/images/hero/`
4. Optimize the size (should be 200KB - 500KB)

**Edit**: `src/components/hero/Hero.jsx`

Find this line:
```jsx
<img
  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
  alt="Mother smiling surrounded by flowers"
  className={styles.heroImage}
/>
```

Replace with:
```jsx
<img
  src="/images/hero/mom-main.jpg"
  alt="My beautiful mother"
  className={styles.heroImage}
/>
```

### 1B. Gallery Images (Memory Photos)

These images appear in the beautiful scrollable gallery.

**File Location**: `public/images/gallery/`

**Steps**:
1. Choose 6-12 meaningful photos
2. Save them with clear names:
   - `memory1.jpg`
   - `memory2.jpg`
   - `memory3.jpg`
   - etc.
3. Place them in: `public/images/gallery/`
4. Keep sizes consistent (same aspect ratio if possible)
5. Optimize each to 200KB - 500KB

**Supported Formats**: JPG, PNG, WebP

---

## Step 2: Update Memories Data

### Edit: `src/data/memories.js`

This file controls all the text content on your website.

#### 2A. Update Timeline Events

Replace the existing timeline with your mother's real memories:

```javascript
export const timelineEvents = [
  {
    id: 1,
    year: "2004",
    title: "The Day You Were Born",
    description: "The happiest day of my mother's life.",
    emoji: "👶"
  },
  {
    id: 2,
    year: "2010",
    title: "First Day of School",
    description: "You held my hand and wiped my tears of nervousness.",
    emoji: "📚"
  },
  {
    id: 3,
    year: "2015",
    title: "Your Strength",
    description: "You never let me see you struggle, but I saw your strength.",
    emoji: "💪"
  },
  {
    id: 4,
    year: "2020",
    title: "When I Needed You Most",
    description: "Your quiet support meant everything.",
    emoji: "❤️"
  },
  {
    id: 5,
    year: "Today",
    title: "Celebrating You",
    description: "Thank you for being my biggest inspiration.",
    emoji: "👑"
  }
];
```

#### 2B. Update Gallery Images List

Update the gallery array with your image paths:

```javascript
export const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/memory1.jpg",
    caption: "Your smile lights up our home",
    alt: "Mom smiling"
  },
  {
    id: 2,
    src: "/images/gallery/memory2.jpg",
    caption: "Moments of pure joy together",
    alt: "Family happiness"
  },
  {
    id: 3,
    src: "/images/gallery/memory3.jpg",
    caption: "Your strength and grace",
    alt: "Mom's strength"
  },
  // Continue for all your images...
];
```

#### 2C. Update Hero Text

```javascript
export const heroText = {
  mainHeading: "Happy Birthday Mom",
  subtitle: "Write your heartfelt message here. Share what she means to you.",
  scrollCTA: "Scroll to explore our journey together"
};
```

#### 2D. Update Ending Message

```javascript
export const endingMessage = {
  title: "Thank You Mom",
  mainText: "Write your final, most emotional message here.",
  finalWords: "Sign off with a final heartfelt phrase.",
  emoji: "❤️"
};
```

---

## Step 3: Customize Hero Section

### Edit: `src/components/hero/Hero.jsx`

Update the text in the Hero component:

```jsx
<span className={styles.heroLabel}>
  A message for the one who means everything
</span>

<h1 className={styles.heroTitle}>
  Happy Birthday Maa ❤️
</h1>

<p className={styles.heroText}>
  Your love is the foundation of everything beautiful in my life.
  Today we celebrate you, your strength, your kindness, 
  and the endless love you pour into our family.
</p>

<button className={styles.heroButton}>
  See Our Memories
</button>
```

---

## Step 4: Customize Timeline Section

The timeline automatically updates from `src/data/memories.js`

You already edited this in **Step 2A**.

**Tips**:
- Use meaningful emojis for each memory
- Years can be actual years or descriptions like "Childhood"
- Descriptions should be personal and emotional
- Keep it to 5-6 key memories (not too many)

---

## Step 5: Customize Ending Section

### Edit: `src/components/ending/Ending.jsx`

Update the final message:

```jsx
<p className={styles.preTitle}>
  A final note from the heart
</p>

<h2 className={styles.title}>
  I Love You Maa ❤️
</h2>

<p className={styles.message}>
  You are the heartbeat of our family. Your endless love, 
  your quiet strength, your gentle wisdom - these are the 
  gifts you've given us. Thank you for being our rock, 
  our guide, and our inspiration. Happy Birthday to the 
  most wonderful mother in the world.
</p>

<p className={styles.closing}>
  With all my love and deepest gratitude, forever and always.
</p>
```

---

## Step 6: (Optional) Customize Colors

If you want to change the color palette:

### Edit: `src/styles/colors.css`

```css
:root {
  /* Change these colors to your preference */
  --pastel-pink: #FFB6D9;        /* Main pink accent */
  --pastel-lavender: #E0B5E0;    /* Secondary accent */
  --pastel-cream: #FFF8F0;       /* Background cream */
  --pastel-peach: #FFD9B3;       /* Tertiary accent */
}
```

All components automatically use these colors.

---

## Step 7: (Optional) Customize Music

The audio file is already set up at `/public/music/background-music.mp3`

### To Replace with Different Music:

1. Find a royalty-free emotional song (recommendations):
   - Soft piano instrumental
   - Calm acoustic music
   - Emotional ambient music

2. Convert to MP3 format

3. Save as: `public/music/background-music.mp3`

4. The website will automatically use it

### To Adjust Volume:

Edit: `src/components/music/MusicPlayer.jsx`

Find this line:
```javascript
const maxVolume = 0.3; // 30% default volume
```

Change 0.3 to:
- `0.2` for quieter
- `0.4` for louder

---

## 🚀 Running Your Website

### 1. Install Dependencies (First Time Only)
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

This will start a local server. Open the link in your browser (usually `http://localhost:5173`)

### 3. Make Changes

As you edit files, the website will automatically refresh in your browser!

### 4. Test Everything

- ✅ Check all images appear correctly
- ✅ Test music plays when you click the button
- ✅ Scroll through all sections
- ✅ Test on mobile phone
- ✅ Check all text is correct

### 5. Build for Production

When ready to deploy:
```bash
npm run build
```

This creates an optimized version in the `dist/` folder.

---

## 📝 Checklist Before Sharing

Before sending the link to your mother:

- [ ] ✅ Hero image is placed and showing
- [ ] ✅ Gallery images are all placed (6+ images)
- [ ] ✅ All text is personalized
- [ ] ✅ Timeline events are your real memories
- [ ] ✅ Ending message is heartfelt
- [ ] ✅ Music plays when clicked
- [ ] ✅ Website looks good on mobile
- [ ] ✅ All animations are smooth
- [ ] ✅ No spelling mistakes

---

## 🎨 Design Best Practices

### Images
- Use high-quality photos
- Consistent aspect ratio for gallery
- Warm lighting, emotional expressions
- Avoid blurry selfies
- Optimize file size (200-500KB each)

### Text
- Keep messages authentic and emotional
- Short, impactful sentences
- Use emojis sparingly but meaningfully
- Proofread carefully

### Colors
- Stick with the pastel palette
- Don't add bright neon colors
- Maintain consistency throughout

### Animations
- Let smooth animations play
- Don't overload with effects
- Less is more, simplicity wins

---

## 🎁 Sample Customization

Here's a complete example of what fully customized content looks like:

### memories.js
```javascript
export const timelineEvents = [
  {
    id: 1,
    year: "1965",
    title: "Born with a Dream",
    description: "Mom entered the world with endless love to give.",
    emoji: "🌸"
  },
  {
    id: 2,
    year: "Childhood",
    title: "My First Teacher",
    description: "You taught me to be kind before anything else.",
    emoji: "📚"
  }
];

export const heroText = {
  mainHeading: "Happy Birthday Mom",
  subtitle: "To the woman who makes every day feel like a blessing, who gives endlessly, who loves unconditionally.",
  scrollCTA: "Scroll to see our beautiful journey"
};

export const endingMessage = {
  title: "Thank You Mom",
  mainText: "You are my home, my strength, my inspiration.",
  finalWords: "Forever grateful, forever loved.",
  emoji: "💕"
};
```

---

## ❓ Frequently Asked Questions

### Q: Where do I get royalty-free images?
**A**: 
- Unsplash: https://unsplash.com/
- Pexels: https://www.pexels.com/
- Pixabay: https://pixabay.com/

### Q: How do I optimize images?
**A**:
- TinyPNG: https://tinypng.com/
- ImageOptim: https://imageoptim.com/
- Squoosh: https://squoosh.app/

### Q: Can I add more than 6 gallery images?
**A**: Yes! Add as many as you want. The grid will automatically adjust.

### Q: Will this work on mobile?
**A**: Yes! The website is fully responsive and optimized for mobile phones.

### Q: How do I deploy this online?
**A**: 
- Vercel: https://vercel.com/ (Recommended for Vite)
- Netlify: https://www.netlify.com/
- GitHub Pages
- Any static hosting service

### Q: Can I share this website with others?
**A**: Yes! Once deployed, share the URL with friends and family.

---

## 💡 Pro Tips

1. **Test on Real Device**: Always test on an actual phone before sharing
2. **Take Your Time**: Emotional content deserves thoughtful customization
3. **Backup Images**: Keep backups of original high-res images
4. **Use Real Photos**: Candid shots are better than perfect poses
5. **Proofread Twice**: Spelling matters in emotional messages
6. **Music Matters**: Choose music that fits the mood, not just any audio
7. **Mobile First**: Optimize for phone viewing first
8. **Keep It Simple**: Don't try to do too much - simple is elegant

---

## 🎂 Ready to Celebrate!

You now have everything needed to create a beautiful, personalized birthday website for your mother.

### Your Next Steps:
1. Gather all photos and memories
2. Edit `src/data/memories.js` with your content
3. Add images to `public/images/`
4. Customize text in components
5. Run `npm run dev`
6. Test thoroughly
7. Deploy and share! 🎉

**Your mother will love this thoughtful, emotional celebration of her!** ❤️

---

**Questions or Issues?**
- Check PROMPTS.md for design guidelines
- Review README.md for technical details
- Check browser console for error messages
- Verify all file paths and image locations

**Good luck, and happy birthday to your beautiful mother!** 🌸

