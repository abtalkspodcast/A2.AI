import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
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
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const offset = Math.max(0, Math.min(1, scrollProgress)) * -100; // Move left as you scroll
        setParallaxOffset(offset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@a2.ai',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 8506061405',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Sector 38, Noida, India',
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://static.wixstatic.com/media/c837a6_0f9a4576e86442e3b124952322acdd72~mv2.jpg/v1/fill/w_2704,h_1606,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_0f9a4576e86442e3b124952322acdd72~mv2.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-70 transition-transform duration-100 ease-out"
          style={{ transform: `translateX(${parallaxOffset}px)` }}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your project? Contact us today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section - Takes 2 columns */}
          <div
            className={`lg:col-span-2 bg-white rounded-3xl shadow-2xl p-6 md:p-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-semibold hover:from-red-600 hover:to-red-700 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Info Cards - Takes 1 column, stacked vertically */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-4 transform transition-transform duration-300 hover:rotate-6 hover:scale-110`}>
                  <info.icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600 text-sm">{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
