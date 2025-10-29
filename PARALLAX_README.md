# Parallax Scroll Feature

This project now includes a comprehensive parallax scrolling feature that creates a smooth, dynamic depth effect as users scroll through the page.

## Features Implemented

### 1. Custom Parallax Hooks (`src/hooks/useParallax.ts`)

Three custom React hooks for parallax effects:

- **`useParallax`**: Basic parallax effect with customizable speed and direction
  ```typescript
  const offset = useParallax({ 
    speed: 0.5,           // Parallax speed multiplier
    direction: 'up',      // 'up' or 'down'
    elementRef: myRef     // Optional ref for element-specific parallax
  });
  ```

- **`useParallaxBackground`**: For parallax background effects
  ```typescript
  const transform = useParallaxBackground(0.3);
  ```

- **`useParallaxLayers`**: Creates multiple parallax layers with different speeds
  ```typescript
  const layerOffsets = useParallaxLayers(3, 0.15);
  // Returns array of offsets for each layer
  ```

### 2. Reusable Components

#### ParallaxSection (`src/components/ParallaxSection.tsx`)
Wraps any section with parallax scrolling:

```tsx
<ParallaxSection speed={0.3} direction="down">
  <YourComponent />
</ParallaxSection>
```

Props:
- `speed`: Parallax speed (default: 0.3)
- `direction`: 'up' or 'down' (default: 'up')
- `className`: Additional CSS classes

#### ParallaxBackground (`src/components/ParallaxBackground.tsx`)
Creates animated parallax backgrounds:

```tsx
<ParallaxBackground 
  speed={0.3}
  gradient="from-blue-500/10 to-purple-500/10"
  opacity={0.5}
/>
```

Props:
- `imageUrl`: Background image URL (optional)
- `gradient`: Tailwind gradient classes
- `speed`: Parallax speed
- `opacity`: Background opacity

### 3. Enhanced Hero Section

The Hero section now features:
- Multi-layer parallax effect with 3 distinct layers
- Animated floating particles with parallax movement
- Content that moves at different speeds than the background

### 4. CSS Animations

Added custom CSS animations in `src/index.css`:
- `animate-parallax-float`: Smooth floating animation for parallax elements
- Perspective-based parallax utilities

## Usage Examples

### Basic Section Parallax
```tsx
import ParallaxSection from './components/ParallaxSection';

<ParallaxSection speed={0.2}>
  <Features />
</ParallaxSection>
```

### Different Speeds for Different Sections
```tsx
<ParallaxSection speed={0.2}>
  <Features />
</ParallaxSection>

<ParallaxSection speed={0.25} direction="down">
  <About />
</ParallaxSection>

<ParallaxSection speed={0.3}>
  <Services />
</ParallaxSection>
```

### Custom Parallax Element
```tsx
import { useParallax } from '../hooks/useParallax';

const MyComponent = () => {
  const offset = useParallax({ speed: 0.4, direction: 'up' });
  
  return (
    <div style={{ transform: `translateY(${offset}px)` }}>
      Content with parallax
    </div>
  );
};
```

## Performance Considerations

- All scroll listeners use `passive: true` flag for better performance
- `willChange: 'transform'` is applied to parallax elements
- Transform operations are GPU-accelerated
- Parallax calculations only occur when elements are in viewport

## Customization

### Adjust Parallax Speed
Lower values = slower movement (more subtle)
Higher values = faster movement (more dramatic)

```tsx
<ParallaxSection speed={0.1}>  {/* Very subtle */}
<ParallaxSection speed={0.5}>  {/* Moderate */}
<ParallaxSection speed={1.0}>  {/* Dramatic */}
```

### Change Direction
```tsx
<ParallaxSection direction="up">    {/* Moves up as you scroll down */}
<ParallaxSection direction="down">  {/* Moves down as you scroll down */}
```

## Browser Support

The parallax features work in all modern browsers that support:
- CSS transforms
- Intersection Observer API (for viewport detection)
- RequestAnimationFrame

## Tips for Best Results

1. **Balance is key**: Don't make every element parallax. Mix static and parallax elements
2. **Speed variation**: Use different speeds for different sections (0.1 - 0.5 works well)
3. **Direction mixing**: Alternate between 'up' and 'down' for visual interest
4. **Test on mobile**: Reduce parallax effects on mobile for better performance

## Troubleshooting

If parallax isn't working:
1. Check that components are wrapped in ParallaxSection
2. Ensure hooks directory exists at `src/hooks/`
3. Verify no conflicting scroll handlers
4. Check browser console for errors

## Future Enhancements

Possible additions:
- Mouse parallax (elements move based on cursor position)
- Horizontal parallax scrolling
- Zoom-based parallax effects
- Parallax with scroll-triggered animations
