import { useRef, ReactNode } from 'react';
import { useParallax } from '../hooks/useParallax';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
}

const ParallaxSection = ({ 
  children, 
  speed = 0.3, 
  direction = 'up',
  className = '' 
}: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const offset = useParallax({ speed, direction, elementRef: sectionRef });

  const transformStyle = {
    transform: `translateY(${offset}px)`,
    willChange: 'transform' as const,
  };

  return (
    <div ref={sectionRef} className={className} style={transformStyle}>
      {children}
    </div>
  );
};

export default ParallaxSection;
