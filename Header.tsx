import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide navbar after scrolling past hero section (approx 100vh)
      if (currentScrollY > window.innerHeight) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Services', 'Products', 'Team', 'Industries', 'Contact'];

  if (!showNav) return null;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-6"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            A2
          </span>
          <span className="text-white">.AI</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white transition-colors duration-300 hover:text-gray-300"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-white transition-colors duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
