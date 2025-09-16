import React from 'react';
import { 
  ArrowRight, 
  Award, 
  BookOpen, 
  Clock, 
  ExternalLink, 
  Globe, 
  Heart, 
  Lightbulb, 
  Mail, 
  MapPin, 
  Menu, 
  MessageCircle, 
  Phone, 
  Play, 
  Send, 
  Sparkles, 
  Star, 
  Target, 
  TrendingUp, 
  User, 
  Users, 
  X, 
  Zap 
} from 'lucide-react';
import StudyAIButton from './components/StudyAIButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Study Ethiopia
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`transition-colors hover:text-green-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className={`transition-colors hover:text-green-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors hover:text-green-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors hover:text-green-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </button>
            <StudyAIButton className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
              Study AI+
            </StudyAIButton>
          </nav>

          <button
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4 px-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-green-600 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-green-600 transition-colors text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-green-600 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-green-600 transition-colors text-left"
              >
                Contact
              </button>
              <StudyAIButton className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors text-center">
                Study AI+
              </StudyAIButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
    </div>
    
    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="text-sm text-gray-200">Trusted by 10,000+ Students</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Transform Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
            Education Journey
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
          Join Ethiopia's premier educational platform and unlock your potential with comprehensive 
          learning resources, expert guidance, and a supportive community.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          <StudyAIButton className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg">
            <span>Study AI+</span>
            <ArrowRight className="w-5 h-5" />
          </StudyAIButton>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center space-x-2">
            <Play className="w-5 h-5" />
            <span>Watch Demo</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">10,000+</div>
            <div className="text-gray-300">Active Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-gray-300">Courses Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">95%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
      </div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Access a wide range of subjects and courses tailored to Ethiopian educational standards and international best practices.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Users,
      title: "Expert Instructors", 
      description: "Learn from qualified educators and industry experts who understand the Ethiopian educational landscape.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Award,
      title: "Certified Learning",
      description: "Earn recognized certificates and credentials that boost your academic and professional profile.",
      color: "text-yellow-600", 
      bgColor: "bg-yellow-100"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Study at your own pace with 24/7 access to learning materials and resources.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Content available in Amharic, English, and other local languages to ensure accessibility.",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Set and track your learning goals with personalized progress monitoring and achievement milestones.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Study Ethiopia?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the features that make our platform the leading choice for Ethiopian students seeking quality education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <StudyAIButton className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
            <span>Study AI+</span>
            <BookOpen className="w-5 h-5" />
          </StudyAIButton>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Empowering Ethiopian Education
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Study Ethiopia was founded with a vision to revolutionize education in Ethiopia by providing 
            accessible, high-quality learning opportunities to students across the country. We believe 
            that education is the cornerstone of personal and national development.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To democratize education by making quality learning resources accessible to every 
                  Ethiopian student, regardless of their location or background.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To become the leading educational platform that transforms Ethiopia's educational 
                  landscape and empowers the next generation of leaders.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Values</h3>
                <p className="text-gray-600">
                  Excellence, accessibility, cultural relevance, and community-driven learning form 
                  the foundation of everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
              alt="Ethiopian students learning"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-green-600 to-green-500 text-white p-6 rounded-2xl shadow-xl">
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8" />
              <div>
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-green-100">Students Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Active Students",
      description: "Students actively learning",
      color: "text-green-600"
    },
    {
      icon: BookOpen,
      number: "500+",
      label: "Courses",
      description: "Comprehensive subjects",
      color: "text-blue-600"
    },
    {
      icon: Award,
      number: "95%",
      label: "Success Rate",
      description: "Student completion rate",
      color: "text-yellow-600"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Satisfaction",
      description: "Student satisfaction",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-green-700 via-green-600 to-green-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Goal 2020</h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Create a strong community of successful learners across Ethiopia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                  <div className="text-green-100">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have questions or need support? We're here to help you on your educational journey.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h4>
                <div className="space-y-1">
                  <p className="text-gray-600">
                    <a href="mailto:contact@studyethiopia.com" className="hover:text-green-600 transition-colors">
                      contact@studyethiopia.com
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="mailto:abiy@studyethiopia.com" className="hover:text-green-600 transition-colors">
                      abiy@studyethiopia.com
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="mailto:abiy@abiyrike.site" className="hover:text-green-600 transition-colors">
                      abiy@abiyrike.site
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h4>
                <p className="text-gray-600">
                  <a href="tel:+251903074646" className="hover:text-blue-600 transition-colors">
                    +251 903 074 646
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-1">Available 9 AM - 6 PM EAT</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h4>
                <p className="text-gray-600">
                  Hawassa, Sidama<br />
                  Ethiopia
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h4>
            <div className="flex flex-col sm:flex-row gap-4">
              <StudyAIButton className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>Study AI+</span>
              </StudyAIButton>
              <a
                href="mailto:support@studyethiopia.com"
                className="flex items-center justify-center space-x-2 border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-colors"
              >
                <Send className="w-5 h-5" />
                <span>Email Support</span>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Study Ethiopia</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering Ethiopian students through accessible, high-quality education and innovative learning platforms.
            </p>
            <StudyAIButton className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              <span>Study AI+</span>
              <ExternalLink className="w-4 h-4" />
            </StudyAIButton>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Online Courses</li>
              <li>Certification Programs</li>
              <li>Academic Support</li>
              <li>Career Guidance</li>
              <li>Study Materials</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:contact@studyethiopia.com"
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    contact@studyethiopia.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a
                  href="tel:+251903074646"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  +251 903 074 646
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  Hawassa, Sidama<br />
                  Ethiopia
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Study Ethiopia. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Chat Component with Gemini AI Integration
const getWebsiteContent = () => ({
  title: "Study Ethiopia - Premier Educational Platform for Ethiopian Students",
  description: "Study Ethiopia is the leading educational platform providing comprehensive learning resources, courses, and academic support for Ethiopian students. Join thousands of learners advancing their education.",
  sections: {
    hero: "Transform Your Education Journey - Join Ethiopia's premier educational platform and unlock your potential with comprehensive learning resources, expert guidance, and a supportive community.",
    about: "Study Ethiopia was founded with a vision to revolutionize education in Ethiopia by providing accessible, high-quality learning opportunities to students across the country. We believe that education is the cornerstone of personal and national development.",
    mission: "To democratize education by making quality learning resources accessible to every Ethiopian student, regardless of their location or background.",
    vision: "To become the leading educational platform that transforms Ethiopia's educational landscape and empowers the next generation of leaders.",
    values: "Excellence, accessibility, cultural relevance, and community-driven learning form the foundation of everything we do."
  },
  features: [
    "Comprehensive Curriculum - Access a wide range of subjects and courses tailored to Ethiopian educational standards and international best practices",
    "Expert Instructors - Learn from qualified educators and industry experts who understand the Ethiopian educational landscape", 
    "Certified Learning - Earn recognized certificates and credentials that boost your academic and professional profile",
    "Flexible Schedule - Study at your own pace with 24/7 access to learning materials and resources",
    "Multilingual Support - Content available in Amharic, English, and other local languages to ensure accessibility",
    "Goal-Oriented Learning - Set and track your learning goals with personalized progress monitoring and achievement milestones"
  ],
  stats: {
    students: "10,000+ Active Students",
    courses: "500+ Courses Available", 
    successRate: "95% Success Rate",
    satisfaction: "98% Student Satisfaction"
  },
  contact: {
    emails: ["contact@studyethiopia.com", "abiy@studyethiopia.com", "abiy@abiyrike.site"],
    phone: "+251 903 074 646",
    location: "Hawassa, Sidama, Ethiopia"
  },
  links: {
    studyAI: "https://studyethiopia.com/app"
  }
});

const createWebsiteContext = () => {
  const content = getWebsiteContent();
  return `
STUDY ETHIOPIA - COMPREHENSIVE PLATFORM INFORMATION

COMPANY OVERVIEW:
${content.title}
${content.description}

MISSION & VISION:
Mission: ${content.sections.mission}
Vision: ${content.sections.vision}
Values: ${content.sections.values}

KEY STATISTICS:
- ${content.stats.students}
- ${content.stats.courses}
- ${content.stats.successRate}
- ${content.stats.satisfaction}

FEATURES & SERVICES:
${content.features.map(feature => `- ${feature}`).join('\n')}

ADDITIONAL SERVICES:
- Online courses and certification programs
- Academic support and tutoring
- Career guidance and counseling
- Study materials and resources
- Personalized learning paths
- Progress tracking and analytics
- Community forums and peer support
- Mobile learning applications

CONTACT INFORMATION:
Emails: ${content.contact.emails.join(', ')}
Phone: ${content.contact.phone} (Available 9 AM - 6 PM EAT)
Location: ${content.contact.location}

STUDY AI+ PLATFORM:
Advanced AI-powered learning platform: ${content.links.studyAI}
Features: AI-powered personalized learning, smart progress tracking, adaptive curriculum, intelligent tutoring system

TARGET AUDIENCE:
- Ethiopian students at all educational levels
- Professionals seeking skill development
- Individuals preparing for certifications
- Anyone interested in quality Ethiopian education

UNIQUE SELLING POINTS:
- Culturally relevant content for Ethiopian context
- Multilingual support (Amharic, English, local languages)
- Affordable and accessible education
- Expert Ethiopian and international instructors
- Recognized certifications and credentials
- Flexible learning schedules
- Strong community support
- AI-enhanced learning experience

COMPANY CULTURE:
- Student-centered approach
- Innovation in education technology
- Commitment to Ethiopian educational development
- Inclusive and accessible learning environment
- Continuous improvement and adaptation
`;
};

// Gemini AI Configuration
const API_KEY = "AIzaSyCdYQXXcipmc3-RogAQZK0R9U3seFz4Jxg";
const genAI = new ME(API_KEY);

class GeminiChatService {
  constructor() {
    this.model = genAI.getGenerativeModel({ model: "gemini-pro" });
    this.websiteContext = createWebsiteContext();
    this.initializeChat();
  }

  initializeChat() {
    const systemPrompt = `You are Study AI+, the intelligent assistant for Study Ethiopia - Ethiopia's premier educational platform. You are knowledgeable, helpful, and enthusiastic about Ethiopian education.

IMPORTANT INSTRUCTIONS:
1. You represent Study Ethiopia professionally and enthusiastically
2. Always provide specific, detailed, and helpful responses
3. Use the website context provided to give accurate information
4. Promote Study AI+ platform when relevant
5. Be conversational but professional
6. Use emojis appropriately to make responses engaging
7. Always try to guide users toward taking action (contacting, trying Study AI+, etc.)
8. If you don't know something specific, direct them to contact information
9. Be proud of Ethiopian education and culture
10. Keep responses concise but informative

WEBSITE CONTEXT:
${this.websiteContext}

Remember: You are the face of Study Ethiopia. Be helpful, knowledgeable, and always ready to assist with educational needs!`;

    this.chat = this.model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: systemPrompt }]
        },
        {
          role: "model", 
          parts: [{ text: "Hello! I'm Study AI+, your intelligent assistant for Study Ethiopia! 🇪🇹✨ I'm here to help you discover how our premier educational platform can transform your learning journey. Whether you're interested in our 500+ courses, want to know about our expert instructors, or need information about our Study AI+ platform, I'm ready to assist! What would you like to know about Study Ethiopia?" }]
        }
      ]
    });
  }

  async sendMessage(message) {
    try {
      const contextualMessage = `User Question: ${message}

Current Website Context (for reference):
${this.websiteContext}

Please provide a helpful, specific response as Study AI+ assistant.`;

      const result = await this.chat.sendMessage(contextualMessage);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Gemini API Error:', error);
      return this.getFallbackResponse(message);
    }
  }

  getFallbackResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('course') || lowerMessage.includes('subject') || lowerMessage.includes('curriculum')) {
      return `🎓 Study Ethiopia offers 500+ comprehensive courses!

Our curriculum includes:
• Ethiopian educational standards-aligned content
• International best practices integration
• Subjects across all academic levels
• Professional development courses
• Certification programs
• Multilingual support (Amharic, English, local languages)

✨ Experience personalized learning with Study AI+: hhttps://studyethiopia.com/app

Would you like to know about specific subjects?`;
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return `📞 Get in touch with Study Ethiopia!

📧 **Email Options:**
• contact@studyethiopia.com (General inquiries)
• abiy@studyethiopia.com (Direct contact)
• abiy@abiyrike.site (Alternative contact)

📱 **Phone:** +251 903 074 646
⏰ Available: 9 AM - 6 PM EAT

📍 **Location:** Hawassa, Sidama, Ethiopia

Our team is ready to help you start your educational journey! 🚀`;
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('fee')) {
      return `💰 Great question about our pricing!

Study Ethiopia is committed to making quality education accessible to all Ethiopian students. We offer:

✅ Flexible pricing options
✅ Affordable packages for students
✅ Scholarship opportunities
✅ Payment plans available

For detailed pricing information:
📧 Contact: contact@studyethiopia.com
📞 Call: +251 903 074 646
🚀 Try Study AI+ for personalized quotes!

We believe education should be accessible to everyone! 🎓`;
    }
    
    return `🤖 I'm Study AI+, your intelligent assistant for Study Ethiopia!

I can help you with:
📚 Course information and curriculum details
🏆 Certification programs
👨‍🏫 Expert instructor information
📊 Our impressive statistics (10,000+ students, 95% success rate!)
📞 Contact information
🚀 Study AI+ platform features

What specific aspect of Study Ethiopia interests you most? Let's unlock your educational potential together! ✨`;
  }

  refreshContext() {
    this.websiteContext = createWebsiteContext();
  }
}

const chatService = new GeminiChatService();

const ChatWidget = ({ websiteContent }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    {
      id: '1',
      text: "Hello! I'm Study AI+, your intelligent assistant for Study Ethiopia! 🇪🇹✨ I'm here to help you discover how our premier educational platform can transform your learning journey. Whether you're interested in our 500+ courses, want to know about our expert instructors, or need information about our Study AI+ platform, I'm ready to assist! What would you like to know about Study Ethiopia?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [level, setLevel] = React.useState(1);
  const [experience, setExperience] = React.useState(0);
  const [streak, setStreak] = React.useState(0);
  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Add experience points
    const newExperience = experience + 10;
    setExperience(newExperience);
    setStreak(prev => prev + 1);

    // Level up logic
    if (newExperience >= level * 100) {
      setLevel(prev => prev + 1);
    }

    // Simulate AI response delay
    setTimeout(async () => {
      try {
        chatService.refreshContext();
        const response = await chatService.sendMessage(inputValue);
        const botMessage = {
          id: (Date.now() + 1).toString(),
          text: response,
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } catch (error) {
        console.error('Chat error:', error);
        const errorMessage = {
          id: (Date.now() + 1).toString(),
          text: "I apologize, but I'm experiencing some technical difficulties. Please try again or contact us directly at contact@studyethiopia.com or +251 903 074 646. Our team is always ready to help! 🤝",
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
      }
      setIsLoading(false);
    }, 1000);
  };

  // Refresh context periodically
  React.useEffect(() => {
    const interval = setInterval(() => {
      chatService.refreshContext();
    }, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 ${isOpen ? 'hidden' : 'flex'} items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105`}
      >
        <div className="relative">
          <MessageCircle className="w-8 h-8" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <Sparkles className="w-2 h-2 text-white" />
          </div>
        </div>
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center animate-spin">
                    <Sparkles className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Study AI+</h3>
                  <p className="text-green-100 text-sm">Your Educational Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-3 flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Award className="w-4 h-4 text-yellow-300" />
                  <span>Level {level}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Zap className="w-4 h-4 text-blue-300" />
                  <span>{experience} XP</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-orange-300" />
                  <span>{streak} streak</span>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[400px]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isBot 
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                  }`}>
                    {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>
                  <div className={`px-4 py-3 rounded-2xl ${
                    message.isBot 
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                  }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {formatMessage(message.text)}
                    </p>
                    <p className={`text-xs mt-2 ${
                      message.isBot ? 'text-gray-500' : 'text-green-100'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 px-4 py-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200/50 bg-white/50 backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Study Ethiopia..."
                  className="w-full px-4 py-3 pr-12 bg-gray-100 rounded-2xl border-0 focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200 resize-none text-sm"
                  rows={1}
                  style={{ minHeight: '48px', maxHeight: '120px' }}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                  <Lightbulb className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center justify-center hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
              <span>Powered by Study AI+</span>
              <span>Press Enter to send</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
        <About />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;