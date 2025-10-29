import { useEffect, useRef, useState } from 'react';
import { Heart, Building2, Shield } from 'lucide-react';

const Blog = () => {
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

  const posts = [
    {
      id: 1,
      title: 'Healthcare',
      excerpt: 'Revolutionizing patient care with AI-driven diagnostics, treatment planning, and operational efficiency. From clinical decision support to automated workflows, we help healthcare providers deliver better outcomes.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      features: ['Clinical Decision Support', 'Patient Engagement', 'Care Coordination', 'Population Health'],
      category: 'Healthcare',
      icon: Heart,
    },
    {
      id: 2,
      title: 'Banking',
      excerpt: 'Transforming financial services with intelligent automation, risk management, and personalized customer experiences. Our solutions help banks stay competitive in the digital age.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      features: ['Risk Assessment', 'Customer Analytics', 'Process Automation', 'Regulatory Compliance'],
      category: 'Banking',
      icon: Building2,
    },
    {
      id: 3,
      title: 'Insurance',
      excerpt: 'Modernizing insurance operations with advanced analytics, fraud detection, and automated claims processing. Deliver faster, more accurate service while reducing operational costs.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      features: ['Claims Processing', 'Fraud Detection', 'Risk Modeling', 'Underwriting Automation'],
      category: 'Insurance',
      icon: Shield,
    },
  ];

  return (
    <section ref={sectionRef} id="industries" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Specialized expertise across critical sectors driving innovation and growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => {
            const IconComponent = post.icon;
            return (
              <article
                key={post.id}
                className={`group bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {post.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-6">{post.excerpt}</p>

                  <div className="space-y-2">
                    {post.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Learn More About Our Industries
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
