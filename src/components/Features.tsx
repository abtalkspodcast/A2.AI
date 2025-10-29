import { useEffect, useRef, useState } from 'react';
import { Zap, Shield, Users, TrendingUp } from 'lucide-react';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollOffset(scrollProgress * 50); // Reduced to 30% movement for slower effect
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Blazing fast performance that keeps your users engaged and satisfied',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security to protect your data and ensure peace of mind',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop',
    },
    {
      icon: Users,
      title: 'User Focused',
      description: 'Designed with your users in mind, delivering exceptional experiences',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Built to scale with your business as you grow and evolve',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    },
  ];

  return (
    <section ref={sectionRef} id="features" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-gray-800 rounded-3xl overflow-hidden min-h-[600px]">
          {/* Left Part - Text Section (Smaller) */}
          <div 
            className="lg:col-span-4 bg-gray-900/30 p-12 flex flex-col justify-center border-r border-gray-800 relative overflow-hidden"
            style={{
              backgroundImage: 'url(https://wallpapers.com/images/hd/professional-background-gpyiwar9suq43xgr.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: `${scrollOffset}% center`,
              backgroundRepeat: 'no-repeat',
              transition: 'background-position 0.1s ease-out'
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Let Your Data Take Your Business to Higher Grounds
              </h2>
              <p className="text-white text-sm leading-relaxed">
                I'm a paragraph. Click here to add your own text and edit me. It's easy. 
                Just click "Edit Text" or double click me to add your own content and make 
                changes to the font.
              </p>
            </div>
          </div>

          {/* Right Part - 4 Cards Section (Larger) */}
          <div className="lg:col-span-8 p-8 flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* Card 1 */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:bg-gray-900/70 transition-all">
                <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-500 mb-3">
                  Cloud Analytics Modernization
                </h3>
                <p className="text-gray-400 text-sm">
                  I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:bg-gray-900/70 transition-all">
                <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-500 mb-3">
                  Data Science Acceleration
                </h3>
                <p className="text-gray-400 text-sm">
                  I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:bg-gray-900/70 transition-all">
                <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-500 mb-3">
                  Versatility in Application
                </h3>
                <p className="text-gray-400 text-sm">
                  I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:bg-gray-900/70 transition-all">
                <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-500 mb-3">
                  Full Customer Experience Service
                </h3>
                <p className="text-gray-400 text-sm">
                  I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
