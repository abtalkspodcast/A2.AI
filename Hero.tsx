import { useEffect, useState, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useParallaxLayers } from '../hooks/useParallax';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const layerOffsets = useParallaxLayers(3, 0.15);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollProgress = window.scrollY / window.innerHeight;
        const offset = Math.min(scrollProgress, 1) * 50; // Move right slowly as you scroll
        setParallaxOffset(offset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <img 
          src="https://static.wixstatic.com/media/c837a6_2119733e838e4a2f8813ebde736f99d5~mv2.jpg/v1/fill/w_3840,h_2374,al_b,q_90,enc_avif,quality_auto/c837a6_2119733e838e4a2f8813ebde736f99d5~mv2.jpg"
          alt="Technology background"
          className="w-full h-full object-cover opacity-60 transition-transform duration-100 ease-out"
          style={{ transform: `translateX(${parallaxOffset}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-900/50 to-gray-900/60" />
      </div>

      <div 
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${layerOffsets[0]}px)` }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 5}s linear infinite`,
                animationDelay: Math.random() * 5 + 's',
              }}
            />
          ))}
        </div>
      </div>

      <div 
        className="container mx-auto px-6 relative z-10"
        style={{ transform: `translateY(${layerOffsets[1] * -0.5}px)` }}
      >
        <div
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Innovation Meets
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Technology
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            We create cutting-edge solutions that transform businesses and shape the future of technology
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105">
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <a
        href="#features"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
