import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <Link
              to="/"
              onClick={scrollToTop}
              className="text-2xl font-bold text-white hover:text-amber-500 transition-colors mb-4 inline-block"
            >
              <span className="text-amber-500">&lt;</span>
              SKS
              <span className="text-amber-500">/&gt;</span>
            </Link>
            <p className="text-gray-400 mb-4">
              {personalInfo.tagline}
            </p>
            <div className="flex space-x-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-500 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-500 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-500 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href={personalInfo.social.email}
                className="text-gray-400 hover:text-amber-500 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-amber-500 transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li>{personalInfo.phone}</li>
              <li>{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center space-x-1">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
            <span>by {personalInfo.name.split(' ')[0]}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
