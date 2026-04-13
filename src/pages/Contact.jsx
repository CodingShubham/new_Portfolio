import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-32 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-amber-500 text-lg font-semibold mb-2">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-amber-500">Me</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Let's Talk</h4>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                  <Mail size={24} className="text-amber-500" />
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-1">Email</h5>
                  <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-amber-500 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                  <Phone size={24} className="text-amber-500" />
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-1">Phone</h5>
                  <p className="text-gray-400">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                  <MapPin size={24} className="text-amber-500" />
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-1">Location</h5>
                  <p className="text-gray-400">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 rounded-xl p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4 animate-in fade-in zoom-in duration-500">
                <CheckCircle size={64} className="text-amber-500" />
                <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                <p className="text-gray-400 text-center">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
                      errors.name ? 'ring-2 ring-red-500' : 'focus:ring-amber-500'
                    } transition-all`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
                      errors.email ? 'ring-2 ring-red-500' : 'focus:ring-amber-500'
                    } transition-all`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
                      errors.subject ? 'ring-2 ring-red-500' : 'focus:ring-amber-500'
                    } transition-all`}
                    placeholder="Project inquiry"
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
                      errors.message ? 'ring-2 ring-red-500' : 'focus:ring-amber-500'
                    } transition-all resize-none`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-amber-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-amber-500/50"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
