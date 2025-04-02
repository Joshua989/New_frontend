import React, { useState } from 'react';
import { Shield, Users, TrendingUp, Wallet, ChevronDown, Lock, Zap } from 'lucide-react';

// Custom particle animation component
const ParticleBackground = () => {
  const particles = Array.from({ length: 20 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const size = Math.random() * 3 + 1;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        return (
          <div 
            key={i}
            className="absolute rounded-full bg-cyan-500 opacity-20"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${initialX}%`,
              top: `${initialY}%`,
              animation: `float ${duration}s infinite ease-in-out ${delay}s`
            }}
          />
        );
      })}
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -15px) rotate(45deg); }
          50% { transform: translate(20px, 10px) rotate(90deg); }
          75% { transform: translate(-5px, 15px) rotate(45deg); }
        }
      `}</style>
    </div>
  );
};

// Animated hexagon background component
const HexagonBackground = ({ color = "cyan", opacity = 0.03 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-full h-full opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(5)">
            <polygon 
              fill={color === "cyan" ? "#22d3ee" : "#3b82f6"} 
              points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.4,43.7 12.4,29.2" 
              transform="translate(0, -29.2)">
            </polygon>
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons)" opacity={opacity}></rect>
        </svg>
      </div>
    </div>
  );
};

// Glowing effect component
const GlowEffect: React.FC<{ x: number; y: number; size?: number; color?: string }> = ({ x, y, size = 120, color = "cyan" }) => {
  return (
    <div 
      className="absolute rounded-full blur-3xl pointer-events-none" 
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: color === "cyan" ? 
          "radial-gradient(circle, rgba(34,211,238,0.2) 0%, rgba(34,211,238,0) 70%)" : 
          "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0) 70%)",
      }}
    />
  );
};

// Custom hexagon shape for feature cards
const HexagonIcon: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = "cyan" }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 blur-sm bg-cyan-400 opacity-20 rounded-xl"></div>
      <div className={`relative flex items-center justify-center h-16 w-16 ${
        color === "cyan" ? "text-cyan-400" : "text-blue-400"
      }`}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M32 4L56 18V46L32 60L8 46V18L32 4Z" 
            stroke={color === "cyan" ? "#22d3ee" : "#60a5fa"} 
            strokeWidth="2"
            fill="rgba(8, 47, 73, 0.3)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

// Feature card with hover animations
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isComingSoon?: boolean;
  ctaText?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, isComingSoon, ctaText }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl backdrop-blur-sm transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-blue-950/50 group-hover:bg-blue-900/60 transition-all duration-500 border border-blue-800/50 group-hover:border-cyan-500/50 rounded-2xl"></div>
      <div className="absolute inset-0">
        <HexagonBackground opacity={0.03} />
      </div>
      
      <div className="relative p-6 z-10">
        <div className="mb-5 transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-6">
          <HexagonIcon>{icon}</HexagonIcon>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">{title}</h3>
        
        <p className="text-cyan-100/80 mb-5 text-sm leading-relaxed">
          {description}
        </p>
        
        {isComingSoon ? (
          <div className="inline-flex items-center">
            <span className="inline-flex items-center rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/30">
              <Zap className="w-3 h-3 mr-1" />
              COMING SOON
            </span>
          </div>
        ) : (
          <button className="group/btn flex items-center text-sm font-medium text-cyan-400 hover:text-white transition-all duration-300">
            {ctaText || "Learn more"} 
            <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        )}
        
        <div className={`absolute bottom-0 right-0 w-32 h-32 rounded-full blur-3xl bg-cyan-500/5 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>
    </div>
  );
};

// User type card component
interface UserTypeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const UserTypeCard: React.FC<UserTypeCardProps> = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative overflow-hidden rounded-xl transition-all duration-500 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-sm border border-blue-800/50 group-hover:border-cyan-500/50 rounded-xl transition-all duration-300"></div>
      <div className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-cyan-500/10 to-transparent"></div>
      
      <div className="relative p-6 z-10">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-gradient-to-br from-blue-800/80 to-blue-900 rounded-full h-12 w-12 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-white text-lg font-bold tracking-wide group-hover:text-cyan-300 transition-colors duration-300">{title}</h3>
        </div>
        
        <p className="text-cyan-100/70 text-sm pr-2">
          {description}
        </p>
        
        <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-cyan-400/10 blur-xl transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>
    </div>
  );
};

// Main component
const FeatureCard1 = () => {
  
  return (
    <div className="relative px-6 py-12 md:px-12 lg:px-16 max-w-7xl mx-auto">
      <ParticleBackground />
      <GlowEffect x={20} y={30} size={200} />
      <GlowEffect x={70} y={60} size={150} color="blue" />
      
      {/* Features Section */}
      <div className="mb-24 relative">
        <h2 className="text-center mb-16 relative">
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl font-black text-white/5">FEATURES</span>
          <div className="relative">
            <span className="text-white font-bold text-3xl md:text-4xl tracking-tight">OTHER </span>
            <span className="text-cyan-400 font-bold text-3xl md:text-4xl tracking-tight">FEATURES</span>
          </div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Shield className="h-7 w-7" strokeWidth={1.5} />}
            title="Full DeFi"
            description="Swaps, Pools, Bridging. All DeFi functions right from your Vault with institutional-grade security protocols."
            ctaText="Explore DeFi"
          />
          
          <FeatureCard 
            icon={<Users className="h-7 w-7" strokeWidth={1.5} />}
            title="Remote Signing"
            description="Sign with a remote co-signer. All messages are encrypted between devices using military-grade encryption."
            ctaText="Set up signing"
          />
          
          <FeatureCard 
            icon={<Lock className="h-7 w-7" strokeWidth={1.5} />}
            title="Transaction Policies"
            description="Define transaction policies for your vault, spending limits, address whitelists and advanced security measures."
            isComingSoon={true}
          />
        </div>
      </div>
      
      {/* For Everyone Section */}
      <div className="relative">
        <h2 className="text-center mb-16 relative">
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl font-black text-white/5">EVERYONE</span>
          <div className="relative">
            <span className="text-white font-bold text-3xl md:text-4xl tracking-tight">VULTISIG IS FOR </span>
            <span className="text-cyan-400 font-bold text-3xl md:text-4xl tracking-tight">EVERYONE</span>
          </div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UserTypeCard 
            icon={<Shield className="h-6 w-6 text-cyan-400" strokeWidth={1.5} />}
            title="CRYPTO NATIVES"
            description="Swap, borrow, save, or spend in one wallet with institutional-grade security. You never need a seed phrase again."
          />
          
          <UserTypeCard 
            icon={<Users className="h-6 w-6 text-cyan-400" strokeWidth={1.5} />}
            title="WHALES"
            description="Do you hold significant funds in crypto? Now you'll have complete upgrading with full security setup. Your funds are only one of several requirements needed."
          />
          
          <UserTypeCard 
            icon={<TrendingUp className="h-6 w-6 text-cyan-400" strokeWidth={1.5} />}
            title="FUNDS"
            description="VultiSig is the open-source audited alternative to your current 'custodian' solution. Enable gradual crypto exposure with process-based transactions."
          />
          
          <UserTypeCard 
            icon={<Wallet className="h-6 w-6 text-cyan-400" strokeWidth={1.5} />}
            title="TREASURIES"
            description="VultiSig is natively compatible to all existing wallets. Together with transparency policies, make your work have the ability to pay your entire team."
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard1;