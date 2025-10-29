import { useEffect, useRef, useState } from 'react';
import { Bot, Sparkles, Cog, BarChart3, Code2, Clock } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const services = [
    {
      icon: Bot,
      title: 'Agent AI',
      description: 'Build intelligent autonomous agents that can reason, plan, and execute complex tasks with minimal human intervention.',
      color: 'from-red-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop',
    },
    {
      icon: Sparkles,
      title: 'Gen AI',
      description: 'Harness the power of generative AI to create content, code, and solutions that push the boundaries of innovation.',
      color: 'from-red-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    },
    {
      icon: Cog,
      title: 'MLOps',
      description: 'Streamline machine learning operations with robust pipelines, monitoring, and deployment infrastructure.',
      color: 'from-red-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
    },
    {
      icon: BarChart3,
      title: 'Data Science',
      description: 'Transform raw data into actionable insights with advanced analytics, modeling, and visualization techniques.',
      color: 'from-red-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    },
    {
      icon: Code2,
      title: 'Software Engineering',
      description: 'Build scalable, robust applications with modern engineering practices and cutting-edge technologies.',
      color: 'from-red-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive AI and technology solutions tailored to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-800 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
