import React, { useState, useEffect, useRef } from 'react';
import { Shield, Smartphone, Database, Layout, Lock, Key, ArrowRight, Check } from 'lucide-react';

const VultisigSolution = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Handle mouse movement for parallax effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const features = [
    {
      title: "Threshold Signatures",
      description: "Multiple devices to sign—no single point of failure. Never lose funds with one compromised device",
      icon: <Shield className="w-10 h-10" />,
      color: "emerald",
      accent: "#10B981",
      glowColor: "rgba(16, 185, 129, 0.3)",
      shape: "hexagon",
      highlight: "Distributed Security"
    },
    {
      title: "Familiar Hardware",
      description: "Use your phone, laptop, or tablet—fast, secure, and hassle-free. No special devices needed.",
      icon: <Smartphone className="w-10 h-10" />,
      color: "cyan",
      accent: "#06B6D4",
      glowColor: "rgba(6, 182, 212, 0.3)",
      shape: "circle",
      highlight: "Everyday Devices"
    },
    {
      title: "Vault Shares",
      description: "No need to write down seed phrases. Store your Vault Shares online safely and respawn anywhere!",
      icon: <Database className="w-10 h-10" />,
      color: "blue",
      accent: "#3B82F6",
      glowColor: "rgba(59, 130, 246, 0.3)",
      shape: "square",
      highlight: "Convenient Recovery"
    },
    {
      title: "Rich UI",
      description: "Have all information displayed on big screens. Easy to see—easy to understand",
      icon: <Layout className="w-10 h-10" />,
      color: "violet",
      accent: "#8B5CF6",
      glowColor: "rgba(139, 92, 246, 0.3)",
      shape: "triangle",
      highlight: "Intuitive Experience"
    }
  ];

  const HexGrid = () => {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="relative w-full h-full">
          {[...Array(100)].map((_, i) => {
            const size = Math.random() * 50 + 20;
            return (
              <div
                key={i}
                className="absolute border border-cyan-500 opacity-20"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: 'rotate(45deg)',
                  animation: `pulse ${Math.random() * 4 + 3}s ease-in-out infinite alternate`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            );
          })}
        </div>
      </div>
    );
  };

  // Animated shapes component
  const AnimatedShapes = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {features.map((feature, i) => {
          const ShapeElement = () => {
            switch (feature.shape) {
              case 'hexagon':
                return (
                  <div className="absolute w-32 h-32 opacity-10" style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    background: `linear-gradient(45deg, ${feature.accent}, transparent)`,
                    top: `${10 + i * 20}%`,
                    right: `${70 - i * 15}%`,
                    animation: `float ${5 + i}s ease-in-out infinite alternate`,
                    transform: 'rotate(30deg)'
                  }} />
                );
              case 'circle':
                return (
                  <div className="absolute w-24 h-24 rounded-full opacity-10" style={{
                    background: `radial-gradient(circle, ${feature.accent}, transparent)`,
                    top: `${50 - i * 10}%`,
                    left: `${10 + i * 20}%`,
                    animation: `float ${4 + i}s ease-in-out infinite alternate-reverse`,
                  }} />
                );
              case 'square':
                return (
                  <div className="absolute w-40 h-40 opacity-10" style={{
                    background: `linear-gradient(135deg, ${feature.accent}, transparent)`,
                    top: `${30 + i * 15}%`,
                    left: `${60 - i * 10}%`,
                    animation: `float ${6 + i}s ease-in-out infinite alternate`,
                    transform: 'rotate(15deg)'
                  }} />
                );
              case 'triangle':
                return (
                  <div className="absolute w-48 h-48 opacity-10" style={{
                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                    background: `linear-gradient(180deg, ${feature.accent}, transparent)`,
                    top: `${5 + i * 22}%`,
                    left: `${30 + i * 15}%`,
                    animation: `float ${5 + i}s ease-in-out infinite alternate-reverse`,
                  }} />
                );
              default:
                return null;
            }
          };
          
          return <ShapeElement key={i} />;
        })}
      </div>
    );
  };

  // Unique 3D card component
  interface Feature {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    accent: string;
    glowColor: string;
    shape: string;
    highlight: string;
  }

  const FeatureCard: React.FC<{ feature: Feature; index: number; isActive: boolean }> = ({ feature, index, isActive }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div 
        className={`relative group transition-all duration-500 perspective-1000 transform ${isActive ? 'lg:scale-110 z-20' : 'z-10'}`}
        onMouseEnter={() => {
          setActiveFeature(index);
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`relative rounded-2xl h-full transition-all duration-500 transform-style-3d 
                     ${isHovered ? 'rotate-y-5 rotate-x-5' : ''}`}
        >
          {/* Card background with dynamic glow */}
          <div 
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `radial-gradient(circle at center, rgba(17, 24, 39, 0.7) 0%, rgba(10, 15, 25, 0.95) 70%)`,
              boxShadow: isActive 
                ? `0 0 30px ${feature.glowColor}, inset 0 0 20px rgba(0, 0, 0, 0.5)` 
                : `0 10px 30px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.5)`,
              borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
              borderLeft: `1px solid rgba(255, 255, 255, 0.05)`,
              borderRight: `1px solid rgba(0, 0, 0, 0.2)`,
              borderBottom: `1px solid rgba(0, 0, 0, 0.2)`,
              transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
          />

          {/* Content */}
          <div className="relative p-8 h-full flex flex-col z-10">
            {/* Feature highlight tag */}
            <div 
              className={`absolute -top-3 right-6 px-3 py-1 text-xs rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-500 font-medium`}
              style={{ 
                backgroundColor: feature.accent,
                transform: 'translateY(-50%)'
              }}
            >
              {feature.highlight}
            </div>

            {/* Icon with custom animation */}
            <div className="relative mb-6">
              <div 
                className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 transform
                           bg-gradient-to-br from-gray-900 to-gray-800 group-hover:rotate-6`}
                style={{ 
                  boxShadow: `0 0 20px ${feature.glowColor}`,
                  color: feature.accent
                }}
              >
                {feature.icon}
                
                {/* Animated rings around icon */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={feature.accent}
                    strokeWidth="0.5"
                    strokeDasharray="10 15"
                    className="opacity-0 group-hover:opacity-60 transition-opacity duration-1000"
                    style={{ 
                      animation: 'spin 30s linear infinite',
                      transformOrigin: 'center'
                    }}
                  />
                </svg>
              </div>
              
              {/* Accent dot */}
              <div 
                className="absolute top-0 right-0 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ backgroundColor: feature.accent }}
              />
            </div>

            {/* Title with gradient effect */}
            <h3 className="text-2xl font-bold mb-3">
              <span 
                className="bg-clip-text text-transparent inline-block transition-all duration-500 group-hover:scale-105 origin-left"
                style={{ 
                  backgroundImage: `linear-gradient(135deg, white, ${feature.accent})`,
                }}
              >
                {feature.title}
              </span>
            </h3>
            
            {/* Description with animated reveal */}
            <p className="text-gray-400 group-hover:text-gray-300 transition-all duration-500 mb-6 flex-grow">
              {feature.description}
            </p>
            
            {/* Interactive button that reveals on hover */}
            <div className="mt-auto">
              <button 
                className="flex items-center space-x-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                style={{ color: feature.accent }}
              >
                <span>EXPLORE</span>
                <ArrowRight className="w-4 h-4" />
                
                {/* Animated line under button */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 transform-origin-left"
                     style={{ backgroundColor: feature.accent }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="bg-gray-900 min-h-screen text-white relative overflow-hidden flex items-center"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(17, 24, 39, 0.9) 0%, rgba(10, 15, 25, 1) 70%)`,
      }}
    >
      {/* Background effects */}
      <HexGrid />
      <AnimatedShapes />
      
      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Animated header section */}
        <div className="relative mb-20 text-center">
          {/* Floating security elements */}
          <div className="absolute left-6 top-0 text-cyan-500 opacity-20 animate-float-slow">
            <Lock className="w-8 h-8" />
          </div>
          <div className="absolute right-6 bottom-0 text-emerald-500 opacity-20 animate-float-medium">
            <Key className="w-8 h-8" />
          </div>
          
          {/* Main title with special effects */}
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              <span className="relative inline-block">
                THE{" "}
              </span>
              <span className="relative inline-block ml-4 overflow-hidden">
                <span className="inline-block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-text-gradient">
                  SOLUTION
                </span>
                
                {/* Underline animation */}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full transform translate-y-1 opacity-0 animate-fade-slide-in"></span>
              </span>
            </h1>
          </div>
          
          {/* Subtitle with typing effect */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto relative">
            <span className="inline-block animate-typing-effect overflow-hidden whitespace-nowrap border-r-2 border-cyan-400">
              VULTISIG is the next evolution in crypto vaults
            </span>
          </p>

          {/* Animated divider */}
          <div className="w-24 h-1 mx-auto mt-10 mb-10 relative overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 animate-shimmer"></div>
          </div>
        </div>

        {/* Features section with 3D cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              feature={feature}
              index={index}
              isActive={index === activeFeature}
            />
          ))}
          
          {/* Central connecting element */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 hidden lg:flex">
            <div className="relative w-64 h-64">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="absolute w-40 h-1 transition-all duration-1000"
                  style={{
                    backgroundColor: index === activeFeature ? feature.accent : 'rgba(255,255,255,0.1)',
                    transform: `rotate(${index * 90}deg)`,
                    transformOrigin: 'center',
                    opacity: index === activeFeature ? 0.8 : 0.2
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom section with stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: "Security Level", value: "Military Grade" },
            { label: "Recovery Speed", value: "Instant" },
            { label: "Device Support", value: "Universal" },
            { label: "User Rating", value: "4.9/5" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="p-4 rounded-lg bg-gray-800 bg-opacity-50 border border-gray-700 transition-all duration-500 hover:border-cyan-800"
            >
              <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
              <div className="text-xl font-bold text-white flex items-center justify-center">
                {stat.value}
                <Check className="w-4 h-4 ml-2 text-cyan-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Global animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes fade-slide-in {
          0% { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes text-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes typing-effect {
          from { width: 0; }
          to { width: 100%; }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .rotate-y-5 {
          transform: rotateY(5deg);
        }
        
        .rotate-x-5 {
          transform: rotateX(5deg);
        }
        
        .animate-float-slow {
          animation: float 7s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float 5s ease-in-out infinite;
        }
        
        .animate-text-gradient {
          animation: text-gradient 8s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-typing-effect {
          animation: typing-effect 3.5s steps(40, end);
          width: 100%;
        }
        
        .animate-fade-slide-in {
          animation: fade-slide-in 1s ease-out forwards;
          animation-delay: 0.5s;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default VultisigSolution;