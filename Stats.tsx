import { useEffect, useRef, useState } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    partners: 0,
    products: 0,
    countries: 0,
    awards: 0,
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
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

  const animateCounters = () => {
    const targets = { years: 15, partners: 10000, products: 25000000, countries: 22, awards: 5 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        years: Math.floor(targets.years * progress),
        partners: Math.floor(targets.partners * progress),
        products: Math.floor(targets.products * progress),
        countries: Math.floor(targets.countries * progress),
        awards: Math.floor(targets.awards * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(targets);
      }
    }, stepDuration);
  };

  const formatNumber = (num: number, label: string) => {
    if (label === 'Business Partners') {
      return `${(num / 1000).toFixed(0)}K`;
    }
    if (label === 'Products Installed') {
      return `${(num / 1000000).toFixed(0)}M`;
    }
    return num.toString();
  };

  const stats = [
    { value: counters.years, label: 'Years of Experience', color: 'from-red-500 to-pink-500' },
    { value: counters.partners, label: 'Business Partners', color: 'from-red-500 to-pink-500' },
    { value: counters.products, label: 'Products Installed', color: 'from-red-500 to-pink-500' },
    { value: counters.countries, label: 'Countries World Wide', color: 'from-red-500 to-pink-500' },
    { value: counters.awards, label: 'Industry Awards', color: 'from-red-500 to-pink-500' },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We Take Pride in Our Numbers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`text-4xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                {formatNumber(stat.value, stat.label)}
              </div>
              <div className="h-1 w-20 mx-auto bg-gradient-to-r from-gray-700 to-gray-600 mb-3 rounded-full"></div>
              <div className="text-gray-400 text-xs md:text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
