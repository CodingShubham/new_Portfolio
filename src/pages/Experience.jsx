import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section className="py-20 md:py-32 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-amber-500 text-lg font-semibold mb-2">Career Path</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-amber-500">Experience</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and the amazing companies I've worked with
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">

            {/* Timeline Line */}
            <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-amber-500 via-orange-500 to-amber-500"></div>

            {experience.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={exp.id} className="relative mb-12">

                  <div className={`flex ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>

                    <div className="w-full md:w-5/12">

                      <div className={`bg-gray-800 rounded-xl p-6 transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-amber-500/20 group
                        ${isLeft ? 'md:text-left' : 'md:text-left'}`}>

                        {/* Position */}
                        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-amber-500">
                          {exp.position}
                        </h4>

                        {/* Company */}
                        <div className="flex items-center gap-2 text-amber-500 mb-2">
                          <Briefcase size={16} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>

                        {/* Duration & Location */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* ✅ FIXED DESCRIPTION */}
                        <p className="text-gray-300 mb-4 leading-relaxed text-left">
                          {exp.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 justify-start">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="text-xs bg-gray-900 text-amber-500 px-3 py-1 rounded-full border border-amber-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 top-8">
                    <div className="w-4 h-4 bg-amber-500 rounded-full border-4 border-black shadow-lg shadow-amber-500/50"></div>
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;