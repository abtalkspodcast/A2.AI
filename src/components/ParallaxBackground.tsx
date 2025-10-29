import { useParallaxBackground } from '../hooks/useParallax';

interface ParallaxBackgroundProps {
  imageUrl?: string;
  gradient?: string;
  speed?: number;
  opacity?: number;
  className?: string;
}

const ParallaxBackground = ({ 
  imageUrl, 
  gradient = 'from-blue-500/10 to-purple-500/10',
  speed = 0.3,
  opacity = 0.5,
  className = ''
}: ParallaxBackgroundProps) => {
  const transform = useParallaxBackground(speed);

  const backgroundStyle = {
    transform,
    willChange: 'transform' as const,
    opacity,
  };

  return (
    <div 
      className={`absolute inset-0 -z-10 ${className}`}
      style={backgroundStyle}
    >
      {imageUrl ? (
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${gradient}`} />
      )}
    </div>
  );
};

export default ParallaxBackground;
