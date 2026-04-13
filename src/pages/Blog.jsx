import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/mock';

const Blog = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section className="py-32 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-amber-500 text-lg font-semibold mb-2">Latest Articles</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            From The <span className="text-amber-500">Blog</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about software development
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Featured Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors line-clamp-2">
                  {post.title}
                </h4>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href={`#blog/${post.slug}`}
                  className="inline-flex items-center space-x-2 text-amber-500 font-semibold hover:text-amber-400 transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
