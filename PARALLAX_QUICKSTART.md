# Parallax Scroll Feature - Quick Start Guide

## ✨ What's Been Added

Your application now has a comprehensive parallax scrolling system that creates stunning depth effects!

## 🎯 Key Features

### 1. **Custom Hooks** (`src/hooks/useParallax.ts`)
- `useParallax` - Element-specific parallax with speed & direction control
- `useParallaxBackground` - Smooth background parallax effects
- `useParallaxLayers` - Multi-layer parallax with varying speeds

### 2. **Reusable Components**
- `ParallaxSection.tsx` - Wrap any section for instant parallax
- `ParallaxBackground.tsx` - Animated parallax backgrounds
- `ParallaxDemo.tsx` - Demo component showcasing effects

### 3. **Enhanced Sections**
- **Hero Section**: Multi-layer parallax with animated particles
- **All Main Sections**: Features, About, Services, Portfolio, Team, Testimonials, and Blog now have parallax effects

## 🚀 How It Works

The app now wraps sections with varying parallax speeds:

```tsx
<ParallaxSection speed={0.2}>
  <Features />
</ParallaxSection>

<ParallaxSection speed={0.25} direction="down">
  <About />
</ParallaxSection>
```

Each section moves at a different speed as you scroll, creating a beautiful depth effect!

## 🎨 Current Configuration

- Features: 0.2x speed (up)
- About: 0.25x speed (down)
- Services: 0.15x speed (up)
- Portfolio: 0.3x speed (down)
- Team: 0.2x speed (up)
- Testimonials: 0.25x speed (down)
- Blog: 0.15x speed (up)

## 🔧 Customization

### Change Parallax Speed
Edit `src/App.tsx` and adjust the `speed` prop:
```tsx
<ParallaxSection speed={0.5}>  // Faster
<ParallaxSection speed={0.1}>  // Slower
```

### Change Direction
```tsx
<ParallaxSection direction="up">    // Moves up when scrolling down
<ParallaxSection direction="down">  // Moves down when scrolling down
```

### Add to New Components
```tsx
import ParallaxSection from './components/ParallaxSection';

<ParallaxSection speed={0.3}>
  <YourNewComponent />
</ParallaxSection>
```

## 📱 View Your Work

Your app is running at: **http://localhost:5174/**

Open it in your browser and scroll down to see the parallax effects in action!

## 🎭 Optional: Add Demo Section

To see a dedicated parallax demo, add to `App.tsx`:

```tsx
import ParallaxDemo from './components/ParallaxDemo';

// Add anywhere in your return statement:
<ParallaxDemo />
```

## 💡 Pro Tips

1. **Balance**: Mix parallax and static sections for best effect
2. **Speed Range**: Keep speeds between 0.1 - 0.5 for smooth results
3. **Direction**: Alternate directions between sections for visual interest
4. **Performance**: All effects are GPU-accelerated and optimized

## 📚 Documentation

See `PARALLAX_README.md` for detailed documentation and advanced usage.

## 🎉 Enjoy Your New Parallax Scroll Feature!

Scroll through your app and watch the magic happen! 🌟
