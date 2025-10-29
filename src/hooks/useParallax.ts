import { useEffect, useState, RefObject } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
  elementRef?: RefObject<HTMLElement>;
}

export const useParallax = ({ speed = 0.5, direction = 'up', elementRef }: ParallaxOptions = {}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef?.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const elementTop = rect.top + scrolled;
        const viewportHeight = window.innerHeight;
        
        // Calculate offset only when element is in viewport
        if (scrolled + viewportHeight > elementTop && scrolled < elementTop + rect.height) {
          const elementScroll = scrolled - elementTop + viewportHeight;
          const parallaxOffset = elementScroll * speed * (direction === 'up' ? -1 : 1);
          setOffset(parallaxOffset);
        }
      } else {
        // Simple parallax based on scroll position
        const parallaxOffset = window.scrollY * speed * (direction === 'up' ? -1 : 1);
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction, elementRef]);

  return offset;
};

// Hook for parallax background
export const useParallaxBackground = (speed: number = 0.3) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return `translateY(${scrollY * speed}px)`;
};

// Hook for multiple parallax layers
export const useParallaxLayers = (layerCount: number, baseSpeed: number = 0.2) => {
  const [offsets, setOffsets] = useState<number[]>(Array(layerCount).fill(0));

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOffsets = Array.from({ length: layerCount }, (_, i) => {
        const speed = baseSpeed * (i + 1);
        return scrollY * speed;
      });
      setOffsets(newOffsets);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [layerCount, baseSpeed]);

  return offsets;
};
