import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = personalInfo.tagline;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #78716c 1px, transparent 1px),
            linear-gradient(to bottom, #78716c 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-amber-900/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-stone-800/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Greeting */}
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-700">
            <p className="text-amber-500 text-lg md:text-xl font-medium mb-4">Hi, my name is</p>
          </div>

          {/* Name */}
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
              {personalInfo.name}
            </h1>
          </div>

          {/* Role */}
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-400 mb-8">
              {personalInfo.role}
            </h2>
          </div>

          {/* Typing Animation Tagline */}
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 delay-500">
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto min-h-[60px] flex items-center justify-center">
              {displayText}
              <span className="inline-block w-0.5 h-6 bg-amber-500 ml-1 animate-pulse"></span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-700">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-500 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-500 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href={personalInfo.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-500 transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={28} />
            </a>
            <a
              href={personalInfo.social.email}
              className="text-gray-400 hover:text-amber-500 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-900">
            <Link
              to="/contact"
              className="bg-amber-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-amber-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50"
            >
              Get In Touch
            </Link>
            <Link
              to="/projects"
              className="border-2 border-amber-500 text-amber-500 px-8 py-4 rounded-full font-semibold hover:bg-amber-500 hover:text-black transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Link>
          </div>

          {/* Scroll Indicator */}
          <Link
            to="/about"
            className="inline-flex flex-col items-center mt-16 text-amber-500 animate-bounce hover:text-amber-400 transition-colors"
          >
            <span className="text-sm mb-2">Learn More</span>
            <ArrowRight size={24} className="rotate-90" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
