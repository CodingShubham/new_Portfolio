import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/mock';

const About = () => {
  return (
    <section className="py-32 bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="rounded-2xl w-full h-auto object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-amber-500 text-lg font-semibold mb-2">About Me</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Know Who <span className="text-amber-500">I Am</span>
              </h3>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Contact Info */}
            <div className="space-y-4 pt-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={20} className="text-amber-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={20} className="text-amber-500" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-amber-500 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={20} className="text-amber-500" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 mb-2">6 months</div>
                <div className="text-gray-400 text-sm"> Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 mb-2">10+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 mb-2">30+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
