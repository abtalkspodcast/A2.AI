import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
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

  const categories = ['all', 'foundry', 'analytics', 'automation'];

  const projects = [
    {
      id: 1,
      title: 'Agentic AI',
      category: 'foundry',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      description: 'Autonomous AI agents that learn, adapt, and make intelligent decisions in real-time.',
    },
    {
      id: 2,
      title: 'CCG',
      category: 'foundry',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      description: 'Clinical Care Guidance system for evidence-based healthcare decision support.',
    },
    {
      id: 3,
      title: 'PBMCert',
      category: 'foundry',
      image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop',
      description: 'Pharmacy Benefit Management certification and compliance platform.',
    },
    {
      id: 4,
      title: 'Next Best Actions',
      category: 'analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      description: 'Predictive analytics to recommend optimal next steps for customer engagement.',
    },
    {
      id: 5,
      title: 'Prior Auth',
      category: 'automation',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      description: 'Streamlined prior authorization workflows for healthcare providers and payers.',
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section ref={sectionRef} id="products" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Enterprise-grade solutions powered by AI and built for scale
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category
                    ? 'bg-white text-black shadow-lg scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.description}
                </p>
                <button className="flex items-center gap-2 text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  View Project
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
