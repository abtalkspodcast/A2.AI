import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'Cloud Solutions', href: '#services' },
      { name: 'Consulting', href: '#services' },
    ],
    resources: [
      { name: 'Industries', href: '#industries' },
      { name: 'Products', href: '#products' },
      { name: 'Case Studies', href: '#' },
      { name: 'Documentation', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-gray-400' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-gray-400' },
    { icon: Github, href: '#', color: 'hover:text-gray-900' },
  ];

  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                A2
              </span>
              <span className="text-white">.AI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Innovating the future of technology with cutting-edge AI solutions that
              transform businesses and empower growth in the digital age.
            </p>
            
            {/* Social links with modern design */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group relative w-11 h-11 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <social.icon size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-black px-4">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm flex items-center gap-2">
            <span>© {currentYear}</span>
            <span className="text-blue-400">A2 Intelligence</span>
            <span>• All rights reserved</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-gray-700">•</span>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Terms of Service
            </a>
            <span className="text-gray-700">•</span>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar with gradient */}
      <div className="relative bg-gradient-to-r from-gray-950 via-black to-gray-950 py-4 border-t border-gray-900">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            Made with <span className="text-red-500">❤</span> by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-semibold">A2 Intelligence Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
