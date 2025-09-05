import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Menu, 
  X, 
  Leaf, 
  Wifi, 
  Zap, 
  Droplets, 
  TreePine, 
  Laptop,
  Coffee,
  Heart,
  ArrowRight,
  MapPin,
  Mail,
  Phone
} from 'lucide-react'
import './App.css'

// Import images
import logo from './assets/images/ArboreaLogo.png'
import cafe1 from './assets/images/21.jpg'
import cafe2 from './assets/images/23.jpg'
import cafe3 from './assets/images/18.jpg'
import cafe4 from './assets/images/20.jpg'
import cafe5 from './assets/images/19.jpg'
import cafe6 from './assets/images/25.jpg'
import cafe7 from './assets/images/26.jpg'
import cafe8 from './assets/images/22.jpg'
import interior1 from './assets/images/4.png'
import interior2 from './assets/images/6.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'cloud-ai', 'sustainability', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const galleryImages = [
    { src: cafe1, title: "Biophilic Co-working Space", description: "Natural materials meet modern technology" },
    { src: cafe2, title: "Water Feature Seating", description: "Conversations flow like water" },
    { src: cafe3, title: "Green Living Walls", description: "Where nature breathes life into work" },
    { src: cafe4, title: "Tech-Enabled Relaxation", description: "Digital comfort in natural surroundings" },
    { src: cafe5, title: "Sustainable Seating Areas", description: "Eco-friendly design meets functionality" },
    { src: cafe6, title: "Outdoor Integration", description: "Seamless indoor-outdoor experience" },
    { src: cafe7, title: "Community Gathering Space", description: "Where conversations bloom like trees" },
    { src: cafe8, title: "Innovation Hub", description: "Technology and nature in harmony" }
  ]

  const features = [
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Living Walls",
      description: "Vertical gardens that purify air and inspire creativity"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Water Features",
      description: "Natural streams and ponds create tranquil soundscapes"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "High-Speed Connectivity",
      description: "Seamless internet for all your digital needs"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Wireless Charging",
      description: "Built-in charging stations at every table"
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Tech-Ready Spaces",
      description: "Ergonomic workstations with integrated technology"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Carbon Neutral",
      description: "Every cup contributes to a healthier planet"
    }
  ]

  const techFeatures = [
    {
      icon: <Laptop className="w-12 h-12" />,
      title: "Smart Workstations",
      description: "Ergonomic setups with integrated tech"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Wireless Charging",
      description: "Built into every table surface"
    },
    {
      icon: <Wifi className="w-12 h-12" />,
      title: "Ultra-Fast WiFi",
      description: "Gigabit speeds throughout"
    },
    {
      icon: <Coffee className="w-12 h-12" />,
      title: "Digital Ordering",
      description: "QR code menu and payment"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => smoothScrollTo('home')}>
            <img src={logo} alt="Arborea" className="h-10 w-10" />
            <span className="text-2xl font-bold text-primary">Arborea</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'experience', 'cloud-ai', 'sustainability', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => smoothScrollTo(section)}
                className={`capitalize transition-colors duration-300 ${
                  activeSection === section 
                    ? 'text-secondary font-semibold' 
                    : 'text-white hover:text-secondary'
                }`}
              >
                {section === 'cloud-ai' ? 'Cloud & AI' : section}
              </button>
            ))}
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
              onClick={() => smoothScrollTo('contact')}
            >
              Visit Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden bg-card border-t transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['home', 'about', 'experience', 'cloud-ai', 'sustainability', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => smoothScrollTo(section)}
                className="capitalize text-left text-foreground hover:text-primary transition-colors"
              >
                {section === 'cloud-ai' ? 'Cloud & AI' : section}
              </button>
            ))}
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit"
              onClick={() => smoothScrollTo('contact')}
            >
              Visit Us
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 parallax-bg transition-transform duration-75"
          style={{
            backgroundImage: `url(${cafe4})`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Where Nature Meets <span className="text-gradient">Technology</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90 animate-slide-up animation-delay-200">
            Converse. Connect. Cultivate.
          </p>
          <p className="text-lg mb-8 opacity-80 animate-slide-up animation-delay-400">
            India's first biophilic café chain with a path to carbon neutrality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-600">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 transition-all duration-300 hover:scale-105"
              onClick={() => smoothScrollTo('experience')}
            >
              Explore Our Spaces <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-primary bg-white border-white hover:bg-primary hover:text-white text-lg px-8 py-4 transition-all duration-300 hover:scale-105"
              onClick={() => smoothScrollTo('about')}
            >
              Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section id="about" className="py-20 leaf-pattern">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Nature Inspires Everything We Do
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>From stone and wood to greenery and light, Arborea is a living café.</p>
                <p>A low-carbon space where conversations bloom like trees.</p>
                <p className="font-semibold text-primary">Low carbon today. Carbon neutral tomorrow.</p>
                <p>We're starting small: reducing waste, choosing low-impact design, and rethinking our supply chain. Our goal is clear — Arborea will be India's first biophilic café chain with a path to carbon neutrality.</p>
              </div>
              <Button 
                className="mt-8 bg-secondary hover:bg-secondary/90 transition-all duration-300 hover:scale-105"
                onClick={() => smoothScrollTo('sustainability')}
              >
                Learn More <Leaf className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="relative animate-slide-in-right">
              <img 
                src={interior1} 
                alt="Arborea Interior" 
                className="rounded-2xl nature-shadow hover-lift transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Gallery */}
      <section id="experience" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              A Living Café Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover spaces where technology and nature create the perfect environment for work, relaxation, and connection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover-lift nature-shadow transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden group">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud & AI Technology Section */}
      <section id="cloud-ai" className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cloud & AI: The Driving Force
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Powered by cutting-edge cloud infrastructure and artificial intelligence, Arborea revolutionizes the café experience through intelligent automation, predictive analytics, and seamless digital integration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold mb-6 text-secondary">AI-Powered Café Operations</h3>
              <div className="space-y-4 text-lg opacity-90">
                <p>Our proprietary AI platform optimizes every aspect of the café experience, from predictive inventory management to personalized customer recommendations.</p>
                <p>Machine learning algorithms analyze customer preferences, peak hours, and environmental conditions to create the perfect ambiance and service.</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">99.9%</div>
                  <div className="text-sm opacity-80">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">50ms</div>
                  <div className="text-sm opacity-80">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">24/7</div>
                  <div className="text-sm opacity-80">AI Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">Auto</div>
                  <div className="text-sm opacity-80">Scaling</div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <img 
                src={interior2} 
                alt="AI-Powered Café Technology" 
                className="rounded-2xl nature-shadow transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-2">Smart Environment Control</h4>
                <p className="text-sm opacity-90">AI-driven climate, lighting, and ambiance optimization</p>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-secondary">Enterprise-Grade Technology Stack</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                { icon: "☁️", title: "Multi-Cloud Architecture", description: "AWS, Google Cloud, Azure integration" },
                { icon: "🤖", title: "Machine Learning", description: "TensorFlow, PyTorch, AutoML" },
                { icon: "📱", title: "Mobile-First Platform", description: "React Native, Progressive Web Apps" },
                { icon: "🔒", title: "Enterprise Security", description: "Zero-trust architecture, SOC 2 compliance" },
                { icon: "📊", title: "Real-Time Analytics", description: "BigQuery, Elasticsearch, Grafana" },
                { icon: "🌐", title: "Edge Computing", description: "CDN, edge AI processing" },
                { icon: "🔄", title: "DevOps & CI/CD", description: "Kubernetes, Docker, GitOps" },
                { icon: "💳", title: "Payment Integration", description: "Stripe, PayPal, digital wallets" }
              ].map((tech, index) => (
                <Card 
                  key={index}
                  className="p-6 text-center hover-lift transition-all duration-500 animate-fade-in-up bg-white/10 border-white/20 text-white"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h4 className="font-semibold mb-2 text-secondary">{tech.title}</h4>
                  <p className="text-sm opacity-80">{tech.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile App Features */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-slide-in-left">
              <img 
                src={cafe1} 
                alt="Mobile App Integration" 
                className="rounded-2xl nature-shadow transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-2">Arborea Mobile App</h4>
                <p className="text-sm opacity-90">Seamless ordering, table booking, and loyalty rewards</p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h3 className="text-3xl font-bold mb-6 text-secondary">Mobile App Ecosystem</h3>
              <div className="space-y-6">
                {[
                  { title: "Smart Ordering System", description: "AI-powered menu recommendations based on preferences, dietary restrictions, and past orders" },
                  { title: "Table Reservation & Check-in", description: "QR code-based table booking with real-time availability and contactless check-in" },
                  { title: "Loyalty & Rewards Program", description: "Blockchain-based loyalty points with gamification and sustainability rewards" },
                  { title: "Environmental Impact Tracker", description: "Personal carbon footprint tracking and offset recommendations" },
                  { title: "Community Features", description: "Social networking for co-working, events, and sustainability initiatives" },
                  { title: "AR Menu Experience", description: "Augmented reality menu with 3D food visualization and nutritional information" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">{feature.title}</h4>
                      <p className="text-sm opacity-80">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Startup Accelerator Readiness */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold mb-8 text-secondary">Startup Accelerator Ready</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="p-6 text-center hover-lift bg-white/10 border-white/20 text-white">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="font-semibold mb-2 text-secondary">Scalable Architecture</h4>
                <p className="text-sm opacity-80">Built for rapid scaling with microservices and cloud-native design</p>
              </Card>
              <Card className="p-6 text-center hover-lift bg-white/10 border-white/20 text-white">
                <div className="text-4xl mb-4">📈</div>
                <h4 className="font-semibold mb-2 text-secondary">Data-Driven Growth</h4>
                <p className="text-sm opacity-80">Advanced analytics and ML for customer insights and business optimization</p>
              </Card>
              <Card className="p-6 text-center hover-lift bg-white/10 border-white/20 text-white">
                <div className="text-4xl mb-4">🌍</div>
                <h4 className="font-semibold mb-2 text-secondary">Global Expansion</h4>
                <p className="text-sm opacity-80">Multi-region deployment with localization and compliance frameworks</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Where Conversations Bloom Like Trees
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect harmony of natural elements and cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift nature-shadow transition-all duration-500 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="text-secondary mb-4 transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Mission */}
      <section id="sustainability" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Low Carbon Today. Carbon Neutral Tomorrow.
              </h2>
              <div className="space-y-4 text-lg opacity-90">
                <p>Arborea is designed as a low-carbon café — from natural materials to energy-efficient systems.</p>
                <p>Our long-term vision is to become fully carbon neutral, balancing every cup of coffee with a healthier planet.</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { value: "50%", label: "Waste Reduction" },
                  { value: "100%", label: "Renewable Energy" },
                  { value: "Zero", label: "Single-Use Plastics" },
                  { value: "2025", label: "Carbon Neutral Goal" }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center animate-fade-in-up transition-transform duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="text-3xl font-bold text-secondary">{stat.value}</div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <img 
                src={interior2} 
                alt="Sustainable Design" 
                className="rounded-2xl nature-shadow transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-20 leaf-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Seamless Tech in Natural Spaces
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced technology thoughtfully integrated into biophilic design for the ultimate work and relaxation experience.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {techFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover-lift transition-all duration-500 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-secondary mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Visit Arborea
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of cafés where nature and technology create the perfect environment for connection and productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { icon: <MapPin className="w-8 h-8" />, title: "Location", content: "Coming Soon to Major Cities Across India" },
              { icon: <Mail className="w-8 h-8" />, title: "Email", content: "info@arborea.cafe" }
            ].map((contact, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover-lift transition-all duration-500 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-secondary mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                  {contact.icon}
                </div>
                <h3 className="font-semibold mb-2">{contact.title}</h3>
                <p className="text-muted-foreground">{contact.content}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 transition-all duration-300 hover:scale-105"
            >
              Get Updates <Heart className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-2 mb-4 cursor-pointer" onClick={() => smoothScrollTo('home')}>
                <img src={logo} alt="Arborea" className="h-8 w-8 brightness-0 invert" />
                <span className="text-xl font-bold">Arborea</span>
              </div>
              <p className="opacity-80">Where nature meets technology. India's first biophilic café chain.</p>
            </div>
            <div className="animate-fade-in animation-delay-200">
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 opacity-80">
                {['home', 'about', 'experience', 'cloud-ai', 'sustainability'].map((section) => (
                  <li key={section}>
                    <button 
                      onClick={() => smoothScrollTo(section)}
                      className="capitalize hover:opacity-100 transition-opacity"
                    >
                      {section === 'cloud-ai' ? 'Cloud & AI' : section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in animation-delay-400">
              <h4 className="font-semibold mb-4">Mission</h4>
              <ul className="space-y-2 opacity-80">
                <li>Carbon Neutral</li>
                <li>Biophilic Design</li>
                <li>Sustainable Practices</li>
                <li>Community Building</li>
              </ul>
            </div>
            <div className="animate-fade-in animation-delay-600">
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="opacity-80 mb-2">Converse. Connect. Cultivate.</p>
              <p className="text-sm opacity-60">© 2024 Arborea. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

