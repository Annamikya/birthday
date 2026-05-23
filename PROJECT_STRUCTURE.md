# 📂 Project Structure & File Reference

Quick reference for finding and editing files in your birthday website project.

---

## 📁 Complete File Structure

```
birthday/
│
├── 📄 index.html                     Main HTML file
├── 📄 package.json                   Dependencies
├── 📄 vite.config.js                 Vite configuration
│
├── 📂 public/                        Static files (served as-is)
│   ├── 📂 images/
│   │   ├── 📂 hero/
│   │   │   └── (Place hero image here)
│   │   └── 📂 gallery/
│   │       └── (Place memory images here)
│   └── 📂 music/
│       └── background-music.mp3      ✅ Audio ready
│
├── 📂 src/                           Source code
│   │
│   ├── 📂 components/                Reusable components
│   │   ├── 📂 hero/
│   │   │   ├── Hero.jsx              🎯 Hero section component
│   │   │   └── Hero.module.css       Hero styles
│   │   │
│   │   ├── 📂 gallery/
│   │   │   ├── MemoryGallery.jsx     🎯 Gallery component
│   │   │   └── MemoryGallery.module.css
│   │   │
│   │   ├── 📂 music/
│   │   │   ├── MusicPlayer.jsx       🎯 Music player component
│   │   │   └── MusicPlayer.module.css
│   │   │
│   │   ├── 📂 timeline/
│   │   │   ├── Timeline.jsx          🎯 Timeline component
│   │   │   └── Timeline.module.css
│   │   │
│   │   ├── 📂 petals/
│   │   │   ├── FlowerPetals.jsx      🎯 Petal animations
│   │   │   └── FlowerPetals.module.css
│   │   │
│   │   └── 📂 ending/
│   │       ├── Ending.jsx            🎯 Ending component
│   │       └── Ending.module.css
│   │
│   ├── 📂 styles/                    Global styles
│   │   ├── colors.css                🎨 Color palette
│   │   ├── typography.css            🔤 Font system
│   │   ├── animations.css            ✨ All animations
│   │   └── global.css                🌍 Global styles
│   │
│   ├── 📂 data/
│   │   └── memories.js               📝 Timeline & gallery data
│   │
│   ├── App.jsx                       Main app component
│   ├── App.module.css                App styles
│   ├── index.css                     Global CSS
│   ├── main.jsx                      App entry point
│
├── 📄 PROMPTS.md                     7 Optimized prompts guide
├── 📄 README.md                      Project documentation
├── 📄 SETUP.md                       Customization guide
└── 📄 PROJECT_STRUCTURE.md           This file

```

---

## 🎯 Files You NEED to Edit

### 1. **Data File** (Most Important)
**File**: `src/data/memories.js`

**What to change**:
- Timeline events (your memories)
- Gallery images (your photos)
- Hero text (greeting message)
- Ending message (final words)

**Impact**: Updates all dynamic content on website

---

### 2. **Hero Component**
**File**: `src/components/hero/Hero.jsx`

**What to change**:
- Hero image source (line with `img src=`)
- Hero heading text
- Hero subtitle text
- Button text

**Impact**: Changes the first screen visitors see

---

### 3. **Ending Component**
**File**: `src/components/ending/Ending.jsx`

**What to change**:
- Final title
- Main message
- Closing words

**Impact**: Changes the final emotional message

---

## 📝 Files You MIGHT Edit

### Color Customization
**File**: `src/styles/colors.css`

**What to change**:
- `--pastel-pink: #FFB6D9;` → change hex color
- `--pastel-lavender: #E0B5E0;` → change hex color
- etc.

**Impact**: Changes all pastel colors throughout website

---

### Typography
**File**: `src/styles/typography.css`

**What to change**:
- Font families
- Font sizes
- Line heights

**Impact**: Changes how text looks

---

### Animations
**File**: `src/styles/animations.css`

**What to change**:
- Animation timing (durations)
- Animation properties
- Transition speeds

**Impact**: Changes animation smoothness and speed

---

### Music Volume
**File**: `src/components/music/MusicPlayer.jsx`

**What to change**:
- Line: `const maxVolume = 0.3;` → change 0.3 to different value

**Values**:
- `0.1` = very quiet
- `0.3` = normal (default)
- `0.5` = loud

---

## 📂 Files You DON'T Need to Edit

These files work automatically:

| File | Purpose | Why Don't Edit |
|------|---------|----------------|
| `App.jsx` | Main app structure | All components are already imported |
| `MemoryGallery.jsx` | Gallery display | Uses data from `memories.js` |
| `Timeline.jsx` | Timeline display | Uses data from `memories.js` |
| `FlowerPetals.jsx` | Petal animations | Already optimized |
| `MusicPlayer.jsx` | Music player | Already configured |
| `vite.config.js` | Build config | Vite handles everything |
| `package.json` | Dependencies | Already complete |
| `index.html` | HTML template | Already set up |

---

## 📍 Where to Put Files

### Images

```
✅ PUT HERO IMAGE HERE:
public/images/hero/mom-main.jpg

✅ PUT GALLERY IMAGES HERE:
public/images/gallery/memory1.jpg
public/images/gallery/memory2.jpg
public/images/gallery/memory3.jpg
etc.
```

### Audio

```
✅ MUSIC ALREADY HERE:
public/music/background-music.mp3
(Can replace with your own)
```

---

## 🔍 Quick Find Guide

**I want to...** → **Edit this file**

| Task | File |
|------|------|
| Add/change timeline events | `src/data/memories.js` |
| Add/change gallery images | `src/data/memories.js` |
| Change hero greeting | `src/components/hero/Hero.jsx` |
| Change hero image | `src/components/hero/Hero.jsx` |
| Change final message | `src/components/ending/Ending.jsx` |
| Change colors | `src/styles/colors.css` |
| Change fonts | `src/styles/typography.css` |
| Change animation speed | `src/styles/animations.css` |
| Change music volume | `src/components/music/MusicPlayer.jsx` |
| Change music file | Copy to `public/music/background-music.mp3` |

---

## 🔄 How Data Flows

```
memories.js (Data)
    ↓
    ├→ Hero component (uses heroText)
    ├→ Timeline component (uses timelineEvents)
    ├→ Gallery component (uses galleryImages)
    └→ Ending component (uses endingMessage)
```

When you update `memories.js`, all components automatically show the new content!

---

## 🎨 Style Hierarchy

```
1. Base Styles
   └─ index.css (page defaults)
   └─ global.css (utilities & resets)
   
2. System Styles
   ├─ colors.css (color palette)
   ├─ typography.css (fonts)
   └─ animations.css (animations)
   
3. Component Styles
   ├─ Hero.module.css
   ├─ MemoryGallery.module.css
   ├─ Timeline.module.css
   ├─ MusicPlayer.module.css
   ├─ FlowerPetals.module.css
   └─ Ending.module.css
```

Component styles override system styles, which override base styles.

---

## 💻 Development Workflow

### To Edit & Preview Changes

1. **Edit a file**
   - For example: `src/data/memories.js`

2. **Save the file**
   - Ctrl+S (Windows) or Cmd+S (Mac)

3. **Watch browser**
   - Website automatically refreshes!
   - You see your changes instantly

4. **Repeat**
   - Edit another file
   - Changes appear immediately

---

## 🔗 Component Relationships

```
App.jsx (Main)
  ├─ FlowerPetals.jsx (Background petals)
  ├─ Hero.jsx (Greeting section)
  ├─ Timeline.jsx (Memory timeline)
  ├─ MemoryGallery.jsx (Photo gallery)
  ├─ Ending.jsx (Final message)
  └─ MusicPlayer.jsx (Audio control)
```

All components are independent and work together in App.jsx.

---

## 📊 Content Organization

### In `src/data/memories.js`

```javascript
timelineEvents[]      // Timeline data
    ↓
    Timeline.jsx displays this

galleryImages[]       // Gallery data
    ↓
    MemoryGallery.jsx displays this

heroText              // Hero greeting
    ↓
    Hero.jsx displays this

endingMessage         // Final message
    ↓
    Ending.jsx displays this
```

---

## 🚀 Building & Deploying

### Commands

```bash
npm install            # Install dependencies (first time only)
npm run dev            # Start development server
npm run build          # Build for production
npm run preview        # Preview production build
```

### After Building

The `dist/` folder contains your website ready to deploy!

---

## 🎁 Example Edits

### Example 1: Change Timeline Event

**File**: `src/data/memories.js`

**Find**:
```javascript
{
  id: 1,
  year: "1960s",
  title: "The Beginning",
  description: "Your journey began with dreams...",
  emoji: "🌅"
}
```

**Change to**:
```javascript
{
  id: 1,
  year: "1962",
  title: "Mom Was Born",
  description: "The world became brighter on this day",
  emoji: "🌟"
}
```

### Example 2: Change Hero Image

**File**: `src/components/hero/Hero.jsx`

**Find**:
```jsx
<img
  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?..."
```

**Change to**:
```jsx
<img
  src="/images/hero/mom-main.jpg"
```

---

## ✅ Verification Checklist

**Before launching**, verify these files:**

- [ ] `src/data/memories.js` - Updated with your content
- [ ] `src/components/hero/Hero.jsx` - Hero image path correct
- [ ] `src/components/hero/Hero.jsx` - Hero text personalized
- [ ] `src/components/ending/Ending.jsx` - Ending message personalized
- [ ] `public/images/hero/` - Hero image exists
- [ ] `public/images/gallery/` - All gallery images exist
- [ ] `public/music/background-music.mp3` - Audio file exists
- [ ] Colors look good in `src/styles/colors.css`

---

## 🎓 Next Steps

1. **Read SETUP.md** - Step-by-step customization guide
2. **Read PROMPTS.md** - Design principles & guidelines
3. **Edit memories.js** - Start with your data
4. **Add images** - Place photos in public folder
5. **Test locally** - Run `npm run dev`
6. **Build & deploy** - `npm run build` when ready

---

**Happy customizing!** ❤️

Each file serves a specific purpose. Stick to the files in the **"Files You NEED to Edit"** section and your website will be perfect!

