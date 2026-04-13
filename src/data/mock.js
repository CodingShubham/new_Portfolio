// Mock data for Shubham Kumar Singh's Portfolio

export const personalInfo = {
  name: "Shubham Kumar Singh",
  role: "Software Developer",
  tagline: "Building scalable web applications with modern technologies",
  bio: "I'm a passionate software developer building robust, scalable web applications. I specialize in Mern-stack development with a focus on creating elegant solutions to complex problems. When I'm not coding, you'll find me contributing to open source or exploring new technologies.",
  email: "ss9824473@gmail.com",
  phone: "+91-8809074258",
  location: "Noida, India",
  avatar: "/shubham1.jpeg",
  resumeUrl: "/ShubhamMERNDEV.pdf",
  social: {
    github: "https://github.com/CodingShubham",
    linkedin: "https://www.linkedin.com/in/shubhamsingh3201",
    twitter: "https://twitter.com/shubhamksingh",
    email: "mailto:ss9824473@gmail.com"
  }
};

export const skills = [
  {
    id: 1,
    category: "Frontend",
    items: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Redux", level: 80 }
    ]
  },
  {
    id: 2,
    category: "Backend",
    items: [
      { name: "Node.js", level: 87 },

      { name: "FastAPI", level: 82 },
      { name: "Express.js", level: 88 },
      { name: "MongoDB", level: 80 }
    ]
  },

];

export const projects = [
  {
    id: 1,
    title: "DevTinder",
    description: "A developer networking platform that matches coders based on skills, interests, and collaboration goals.",
    image: "/dashboard.png",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
    liveUrl: "#",
    githubUrl: "https://github.com/CodingShubham/DevTinder-FullStack",
    featured: true
  },
  {
    id: 2,
    title: "NetFLix-GPT",
    description:  "An AI-powered movie recommendation platform that uses GPT to suggest personalized content based on user preferences.",
    image: "/netflix.png",
    technologies: ["React.js", "Javascript", "Firebase"],
    liveUrl: "#",
    githubUrl: "https://github.com/CodingShubham/NETFLIX-GPT",
    featured: true
  },
  {
    id: 3,
    title: "Swiggy-Clone",
    description: "A food delivery web app replicating Swiggy with real-time restaurant listings, cart management, and seamless ordering experience.",
    image: "/swiggy.png",
    technologies: ["React", "Redux", "FastAPI", "OpenAI"],
    liveUrl: "#",
    githubUrl: "https://github.com/CodingShubham/swiggy-real-api-react",
    featured: true
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with scheduled posting and engagement tracking.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["Vue.js", "Node.js", "MySQL", "Redis", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description: "Real-time weather application with location-based forecasts, interactive maps, and weather alerts.",
    image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&h=600&fit=crop",
    technologies: ["React Native", "Node.js", "OpenWeather API", "Maps API"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 6,
    title: "Portfolio CMS",
    description: "Content management system specifically designed for developers and creatives to showcase their work.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop",
    technologies: ["Next.js", "Sanity", "Tailwind", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export const experience = [
  {
    id: 1,
    company: "Eduskills Solutions",
    position: " Frontend Developer",
    duration: "March-2025- Aug-2025 ",
    location: "Noida, India",
    description: "Built dynamic and responsive web interfaces, optimized performance, and collaborated with backend teams using React and Node.js.",
    technologies: ["React", "Node.js", "AWS"]
  },
  
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    position: "CTO, TechCorp Solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    content: "Shubham is an exceptional developer with a keen eye for detail. His ability to solve complex problems and deliver high-quality code consistently has been invaluable to our team.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Desai",
    position: "Product Manager, InnovateTech",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    content: "Working with Shubham was a pleasure. He's not just a great developer but also an excellent team player who brings innovative solutions to the table.",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Patel",
    position: "Senior Engineer, StartupXYZ",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    content: "Shubham's dedication to learning and improving is remarkable. He quickly adapted to new technologies and became a key contributor to our projects.",
    rating: 5
  }
];

export const services = [
  {
    id: 1,
    title: "Web Application Development",
    description: "Building responsive, scalable web applications using modern frameworks and best practices.",
    icon: "Code"
  },
  {
    id: 2,
    title: "API Development",
    description: "Designing and implementing RESTful APIs with proper documentation and security measures.",
    icon: "Database"
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description: "Deploying and managing applications on cloud platforms with CI/CD pipelines.",
    icon: "Cloud"
  },
  {
    id: 4,
    title: "Performance Optimization",
    description: "Analyzing and optimizing application performance for better user experience.",
    icon: "Zap"
  },
  {
    id: 5,
    title: "Technical Consulting",
    description: "Providing technical guidance and architecture recommendations for projects.",
    icon: "Users"
  },
  {
    id: 6,
    title: "Code Review & Mentoring",
    description: "Reviewing code quality and mentoring junior developers in best practices.",
    icon: "BookOpen"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Microservices with Node.js",
    excerpt: "Learn how to design and implement microservices architecture using Node.js, Docker, and Kubernetes for optimal scalability.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Backend",
    slug: "building-scalable-microservices-nodejs"
  },
  {
    id: 2,
    title: "React Performance Optimization Techniques",
    excerpt: "Discover advanced techniques to optimize React applications including memoization, lazy loading, and code splitting.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Frontend",
    slug: "react-performance-optimization"
  },
  {
    id: 3,
    title: "Understanding TypeScript Generics",
    excerpt: "A comprehensive guide to TypeScript generics with practical examples and use cases for building type-safe applications.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop",
    date: "2023-12-20",
    readTime: "10 min read",
    category: "TypeScript",
    slug: "understanding-typescript-generics"
  }
];
