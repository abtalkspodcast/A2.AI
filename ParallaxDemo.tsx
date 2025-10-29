import { useRef } from 'react';
import { useParallax } from '../hooks/useParallax';

/**
 * Demo component showcasing various parallax effects
 * This can be added to any page to demonstrate parallax functionality
 */
const ParallaxDemo = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  const parallax1 = useParallax({ speed: 0.2, direction: 'up', elementRef: ref1 });
  const parallax2 = useParallax({ speed: 0.4, direction: 'down', elementRef: ref2 });
  const parallax3 = useParallax({ speed: 0.6, direction: 'up', elementRef: ref3 });

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Parallax Effect Demo</h2>
          <p className="text-gray-600">Scroll down to see the parallax effects in action</p>
        </div>

        <div className="relative min-h-screen">
          {/* Layer 1 - Slow parallax */}
          <div
            ref={ref1}
            className="absolute top-0 left-10 w-64 h-64 bg-blue-200 rounded-full opacity-30 blur-3xl"
            style={{ transform: `translateY(${parallax1}px)` }}
          />

          {/* Layer 2 - Medium parallax */}
          <div
            ref={ref2}
            className="absolute top-40 right-10 w-80 h-80 bg-purple-200 rounded-full opacity-30 blur-3xl"
            style={{ transform: `translateY(${parallax2}px)` }}
          />

          {/* Layer 3 - Fast parallax */}
          <div
            ref={ref3}
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-pink-200 rounded-full opacity-30 blur-3xl"
            style={{ transform: `translateY(${parallax3}px)` }}
          />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 py-20">
            {[
              { speed: '0.2x', title: 'Slow', desc: 'Subtle movement' },
              { speed: '0.4x', title: 'Medium', desc: 'Balanced effect' },
              { speed: '0.6x', title: 'Fast', desc: 'Dynamic motion' }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="text-blue-500 text-3xl font-bold mb-2">{item.speed}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxDemo;
