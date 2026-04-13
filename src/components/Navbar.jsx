import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-amber-500/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-amber-500 transition-colors"
          >
            <span className="text-amber-500">&lt;</span>
            SKS
            <span className="text-amber-500">/&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium relative group transition-colors duration-300 ${
                    isActive ? 'text-amber-500' : 'text-gray-300 hover:text-amber-500'
                  }`
                }
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href={personalInfo.resumeUrl}
            className="hidden md:block bg-amber-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-amber-400 transition-all duration-300 hover:scale-105"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-amber-500 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-in fade-in slide-in-from-top-5 duration-300">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-300 ${
                      isActive ? 'text-amber-500' : 'text-gray-300 hover:text-amber-500'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <a
                href={personalInfo.resumeUrl}
                className="bg-amber-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-amber-400 transition-all duration-300 text-center"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
