import { useEffect, useRef, useState } from 'react';
import { CheckCircle, ChevronUp, ChevronDown } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      alt: 'Team collaboration',
    },
    {
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
      alt: 'Innovation workspace',
    },
    {
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
      alt: 'Technology solutions',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const offset = Math.max(0, Math.min(1, scrollProgress)) * 200; // Move right faster as you scroll
        setParallaxOffset(offset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const achievements = [
    'Award-winning design and development',
    'Industry-leading technology stack',
    'Dedicated support team 24/7',
    'Proven track record of success',
  ];

  return (
    <section ref={sectionRef} id="about" className="relative py-16 bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://static.wixstatic.com/media/c837a6_d11c6c437c0f4feb9de8591b42ead168~mv2.jpg/v1/fill/w_4040,h_1433,al_c,q_90,enc_avif,quality_auto/c837a6_d11c6c437c0f4feb9de8591b42ead168~mv2.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-70 transition-transform duration-100 ease-out"
          style={{ transform: `translateX(${parallaxOffset}px)` }}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Building The Future,
              <br />
              <span className="text-white">One Innovation At A Time</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We are a team of passionate innovators dedicated to creating cutting-edge
              solutions that drive business growth and technological advancement. Our
              expertise spans across multiple domains, ensuring comprehensive solutions
              for all your needs.
            </p>
            <div className="space-y-3 mb-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-white flex-shrink-0" size={24} />
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              {/* Carousel Images */}
              <div className="relative h-96">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === currentSlide
                        ? 'opacity-100 translate-y-0'
                        : index < currentSlide
                        ? 'opacity-0 -translate-y-full'
                        : 'opacity-0 translate-y-full'
                    }`}
                  >
                    <img 
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Previous slide"
              >
                <ChevronUp size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Next slide"
              >
                <ChevronDown size={24} />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
