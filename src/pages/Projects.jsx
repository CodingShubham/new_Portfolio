import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = filter === 'all'? projects 
    : filter === 'featured'
    ? projects.filter(p => p.featured)
    : projects;

  return (
    <section className="py-32 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-amber-500 text-lg font-semibold mb-2">My Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-amber-500">Projects</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills and experience
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center items-center space-x-4 mb-12 flex-wrap gap-4">
          <Filter size={20} className="text-amber-500" />
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === 'all'
                ? 'bg-amber-500 text-black'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === 'featured'
                ? 'bg-amber-500 text-black'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Featured
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-500 text-black p-3 rounded-full hover:bg-amber-400 transition-all duration-300 hover:scale-110"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-110"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-700 text-amber-500 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs bg-gray-700 text-gray-400 px-3 py-1 rounded-full">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
