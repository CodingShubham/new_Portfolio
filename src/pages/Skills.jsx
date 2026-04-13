import React, { useState, useEffect, useRef } from 'react';
import { skills } from '../data/mock';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="py-32 bg-black min-h-screen" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-amber-500 text-lg font-semibold mb-2">What I Do</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-amber-500">Skills</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center space-x-4 mb-12 flex-wrap gap-4">
          {skills.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          {skills[activeCategory].items.map((skill, index) => (
            <div
              key={skill.name}
              className="mb-8 animate-in fade-in slide-in-from-bottom-5 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold text-lg">{skill.name}</span>
                <span className="text-amber-500 font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
