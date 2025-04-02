import { useState, useEffect } from 'react';
import { Shield, Key, RefreshCw, Zap, Lock, Fingerprint } from 'lucide-react';

const SecurityDashboard = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoverFeature, setHoverFeature] = useState<number | null>(null);
  
  interface Particle {
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
  }

  const [particles, setParticles] = useState<Particle[]>([]);
  
  // Generate random particles for background effect
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.5 + 0.25
    }));
    setParticles(newParticles);
    
    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        y: (p.y + p.speed) % 100,
        opacity: Math.sin(Date.now() * 0.001 * p.speed) * 0.25 + 0.5
      })));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  // Auto-cycle through features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  const features = [
    {
      title: "Vault Generation",
      icon: <Key className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
      time: "3-5 seconds",
      description: "Fast or Secure Vaults. Choose your vault type. Key generation is fast. No one device holds the vault private key, just vault shares.",
      color: "from-emerald-400 to-teal-500",
      bgColor: "from-emerald-900/20 to-teal-900/20",
      devices: ["DESKTOP", "PHONE"]
    },
    {
      title: "Transaction Signing",
      icon: <Shield className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
      time: "1-3 seconds",
      description: "One device starts the transaction. A second paired device confirms the transaction. It is natively \"two-factor\" and is done in real time.",
      color: "from-blue-400 to-indigo-500",
      bgColor: "from-blue-900/20 to-indigo-900/20",
      devices: ["PHONE", "TABLET"]
    },
    {
      title: "Resharing",
      icon: <RefreshCw className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
      time: "3-5 seconds",
      description: "Lost a device? Replace it easily without changing the vault or address. Want to increase security? Go from 2-of-3 to 3-of-4 setup easily.",
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-900/20 to-pink-900/20",
      devices: ["DESKTOP", "TABLET", "PHONE"]
    }
  ];

  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      {/* Particle background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-cyan-400 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>
      
      {/* Main gradient backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-950/90 via-black/95 to-blue-950/90 z-0"></div>
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 lg:w-96 h-64 md:h-80 lg:h-96 rounded-full bg-gradient-radial transition-all duration-1000 ease-in-out blur-3xl opacity-40 z-0 ${
        activeFeature === 0 ? 'from-emerald-600/30 to-transparent' :
        activeFeature === 1 ? 'from-blue-600/30 to-transparent' :
        'from-purple-600/30 to-transparent'
      }`}></div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col min-h-screen">
        <header className="mb-8 sm:mb-12 lg:mb-16 pt-4 sm:pt-8">
          <div className="relative mb-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400 uppercase inline-block pb-2">
                SECURITY
              </span>
            </h1>
            <div className="absolute -right-4 -bottom-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded blur-xl opacity-30"></div>
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider flex flex-wrap items-center gap-2 sm:gap-3">
            <span>WITHOUT</span>
            <div className="relative">
              <span className="relative z-10">SACRIFICE</span>
              <div className="absolute -bottom-2 left-0 h-2 sm:h-3 w-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md opacity-70"></div>
            </div>
          </div>
          <p className="text-blue-200/70 mt-4 max-w-lg text-sm sm:text-base">
            Next-gen cryptographic security that's both faster and more secure than traditional methods.
          </p>
        </header>
        
        {/* 3D Device visualization and features */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 flex-1">
          {/* 3D Device visualization - hidden on very small screens, shown in a simplified way on medium screens */}
          <div className="w-full lg:w-5/12 relative h-64 sm:h-80 lg:h-96 perspective hidden sm:block">
            {/* Hexagonal platform */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rotate-45 border-2 border-cyan-500/20 rounded-xl bg-gradient-to-br from-blue-900/10 to-transparent backdrop-blur-sm"></div>
            
            {/* Device: Desktop */}
            <div className={`absolute left-4 top-16 transition-all duration-700 transform ${
              features[activeFeature].devices.includes("DESKTOP") 
                ? "opacity-100 scale-100 rotate-0 -translate-y-0" 
                : "opacity-30 scale-95 -rotate-6 -translate-y-4"
            }`}>
              <div className="relative">
                <svg viewBox="0 0 24 24" className="w-24 sm:w-32 md:w-36 lg:w-40 h-24 sm:h-32 md:h-36 lg:h-40 text-blue-100/80 fill-current">
                  <path d="M20,17 L4,17 L4,5 C4,4.44771525 4.44771525,4 5,4 L19,4 C19.5522847,4 20,4.44771525 20,5 L20,17 Z M21,17 L21,5 C21,3.8954305 20.1045695,3 19,3 L5,3 C3.8954305,3 3,3.8954305 3,5 L3,17 L2,17 C1.44771525,17 1,17.4477153 1,18 C1,18.5522847 1.44771525,19 2,19 L22,19 C22.5522847,19 23,18.5522847 23,18 C23,17.4477153 22.5522847,17 22,17 L21,17 Z M13,20 L11,20 C10.4477153,20 10,20.4477153 10,21 C10,21.5522847 10.4477153,22 11,22 L13,22 C13.5522847,22 14,21.5522847 14,21 C14,20.4477153 13.5522847,20 13,20 Z M5,6 L19,6 L19,16 L5,16 L5,6 Z" />
                </svg>
                <div className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 rounded-full ${
                  features[activeFeature].devices.includes("DESKTOP") 
                    ? `bg-gradient-to-r ${features[activeFeature].color} animate-pulse shadow-lg shadow-cyan-400/30` 
                    : "bg-gray-600"
                }`}></div>
                <p className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 text-xs font-mono bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent tracking-widest">DESKTOP</p>
              </div>
            </div>
            
            {/* Device: Phone */}
            <div className={`absolute right-10 sm:right-16 top-24 sm:top-28 transition-all duration-700 transform ${
              features[activeFeature].devices.includes("PHONE") 
                ? "opacity-100 scale-100 rotate-0 translate-y-0" 
                : "opacity-30 scale-95 rotate-12 translate-y-4"
            }`}>
              <div className="relative">
                <svg viewBox="0 0 24 24" className="w-16 sm:w-18 md:w-20 h-24 sm:h-28 md:h-32 text-blue-100/80 fill-current">
                  <path d="M16,2 L8,2 C6.8954305,2 6,2.8954305 6,4 L6,20 C6,21.1045695 6.8954305,22 8,22 L16,22 C17.1045695,22 18,21.1045695 18,20 L18,4 C18,2.8954305 17.1045695,2 16,2 Z M8,1 L16,1 C17.6568542,1 19,2.34314575 19,4 L19,20 C19,21.6568542 17.6568542,23 16,23 L8,23 C6.34314575,23 5,21.6568542 5,20 L5,4 C5,2.34314575 6.34314575,1 8,1 Z M12,19 C11.4477153,19 11,19.4477153 11,20 C11,20.5522847 11.4477153,21 12,21 C12.5522847,21 13,20.5522847 13,20 C13,19.4477153 12.5522847,19 12,19 Z" />
                </svg>
                <div className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 w-3 sm:w-4 h-3 sm:h-4 rounded-full ${
                  features[activeFeature].devices.includes("PHONE") 
                    ? `bg-gradient-to-r ${features[activeFeature].color} animate-pulse shadow-lg shadow-cyan-400/30` 
                    : "bg-gray-600"
                }`}></div>
                <p className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 text-xs font-mono bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent tracking-widest">PHONE</p>
              </div>
            </div>
            
            {/* Device: Tablet */}
            <div className={`absolute right-1 bottom-4 sm:bottom-8 transition-all duration-700 transform ${
              features[activeFeature].devices.includes("TABLET") 
                ? "opacity-100 scale-100 rotate-0 translate-y-0" 
                : "opacity-30 scale-95 -rotate-6 translate-y-6"
            }`}>
              <div className="relative">
                <svg viewBox="0 0 24 24" className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 text-blue-100/80 fill-current">
                  <path d="M19,2 L5,2 C3.8954305,2 3,2.8954305 3,4 L3,20 C3,21.1045695 3.8954305,22 5,22 L19,22 C20.1045695,22 21,21.1045695 21,20 L21,4 C21,2.8954305 20.1045695,2 19,2 Z M5,1 L19,1 C20.6568542,1 22,2.34314575 22,4 L22,20 C22,21.6568542 20.6568542,23 19,23 L5,23 C3.34314575,23 2,21.6568542 2,20 L2,4 C2,2.34314575 3.34314575,1 5,1 Z M12,19 C11.4477153,19 11,19.4477153 11,20 C11,20.5522847 11.4477153,21 12,21 C12.5522847,21 13,20.5522847 13,20 C13,19.4477153 12.5522847,19 12,19 Z" />
                </svg>
                <div className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 rounded-full ${
                  features[activeFeature].devices.includes("TABLET") 
                    ? `bg-gradient-to-r ${features[activeFeature].color} animate-pulse shadow-lg shadow-cyan-400/30` 
                    : "bg-gray-600"
                }`}></div>
                <p className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 text-xs font-mono bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent tracking-widest">TABLET</p>
              </div>
            </div>
            
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" style={{filter: "url(#glow)"}}>
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#c084fc" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f472b6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#e879f9" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              
              {/* Desktop to Phone */}
              <path 
                d="M120,120 Q200,150 280,120" 
                stroke={features[activeFeature].devices.includes("DESKTOP") && features[activeFeature].devices.includes("PHONE") ? "url(#lineGradient1)" : "rgba(100, 116, 139, 0.2)"}
                strokeWidth="2" 
                strokeDasharray={features[activeFeature].devices.includes("DESKTOP") && features[activeFeature].devices.includes("PHONE") ? "0" : "5,5"}
                fill="none"
              >
                {features[activeFeature].devices.includes("DESKTOP") && features[activeFeature].devices.includes("PHONE") && (
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
                )}
              </path>
              
              {/* Phone to Tablet */}
              <path 
                d="M280,150 Q250,200 300,260" 
                stroke={features[activeFeature].devices.includes("PHONE") && features[activeFeature].devices.includes("TABLET") ? "url(#lineGradient2)" : "rgba(100, 116, 139, 0.2)"}
                strokeWidth="2"
                strokeDasharray={features[activeFeature].devices.includes("PHONE") && features[activeFeature].devices.includes("TABLET") ? "0" : "5,5"}
                fill="none"
              >
                {features[activeFeature].devices.includes("PHONE") && features[activeFeature].devices.includes("TABLET") && (
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
                )}
              </path>
              
              {/* Desktop to Tablet */}
              <path 
                d="M120,150 Q200,250 280,280" 
                stroke={features[activeFeature].devices.includes("DESKTOP") && features[activeFeature].devices.includes("TABLET") ? "url(#lineGradient3)" : "rgba(100, 116, 139, 0.2)"}
                strokeWidth="2"
                strokeDasharray={features[activeFeature].devices.includes("DESKTOP") && features[activeFeature].devices.includes("TABLET") ? "0" : "5,5"}
                fill="none"
              >
                {features[activeFeature].devices.includes("DESKTOP") && features[activeFeature].devices.includes("TABLET") && (
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
                )}
              </path>
            </svg>
          </div>
          
          {/* Mobile simplified device indicator (only visible on small screens) */}
          <div className="sm:hidden flex justify-center mb-6">
            <div className="flex items-center justify-center gap-4 bg-blue-900/20 p-4 rounded-lg">
              {features[activeFeature].devices.map((device, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {device === "DESKTOP" && <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-100/80 fill-current"><path d="M20,17 L4,17 L4,5 C4,4.44771525 4.44771525,4 5,4 L19,4 C19.5522847,4 20,4.44771525 20,5 L20,17 Z M21,17 L21,5 C21,3.8954305 20.1045695,3 19,3 L5,3 C3.8954305,3 3,3.8954305 3,5 L3,17 L2,17 C1.44771525,17 1,17.4477153 1,18 C1,18.5522847 1.44771525,19 2,19 L22,19 C22.5522847,19 23,18.5522847 23,18 C23,17.4477153 22.5522847,17 22,17 L21,17 Z M13,20 L11,20 C10.4477153,20 10,20.4477153 10,21 C10,21.5522847 10.4477153,22 11,22 L13,22 C13.5522847,22 14,21.5522847 14,21 C14,20.4477153 13.5522847,20 13,20 Z M5,6 L19,6 L19,16 L5,16 L5,6 Z" /></svg>}
                  {device === "PHONE" && <svg viewBox="0 0 24 24" className="w-6 h-10 text-blue-100/80 fill-current"><path d="M16,2 L8,2 C6.8954305,2 6,2.8954305 6,4 L6,20 C6,21.1045695 6.8954305,22 8,22 L16,22 C17.1045695,22 18,21.1045695 18,20 L18,4 C18,2.8954305 17.1045695,2 16,2 Z M8,1 L16,1 C17.6568542,1 19,2.34314575 19,4 L19,20 C19,21.6568542 17.6568542,23 16,23 L8,23 C6.34314575,23 5,21.6568542 5,20 L5,4 C5,2.34314575 6.34314575,1 8,1 Z M12,19 C11.4477153,19 11,19.4477153 11,20 C11,20.5522847 11.4477153,21 12,21 C12.5522847,21 13,20.5522847 13,20 C13,19.4477153 12.5522847,19 12,19 Z" /></svg>}
                  {device === "TABLET" && <svg viewBox="0 0 24 24" className="w-10 h-10 text-blue-100/80 fill-current"><path d="M19,2 L5,2 C3.8954305,2 3,2.8954305 3,4 L3,20 C3,21.1045695 3.8954305,22 5,22 L19,22 C20.1045695,22 21,21.1045695 21,20 L21,4 C21,2.8954305 20.1045695,2 19,2 Z M5,1 L19,1 C20.6568542,1 22,2.34314575 22,4 L22,20 C22,21.6568542 20.6568542,23 19,23 L5,23 C3.34314575,23 2,21.6568542 2,20 L2,4 C2,2.34314575 3.34314575,1 5,1 Z M12,19 C11.4477153,19 11,19.4477153 11,20 C11,20.5522847 11.4477153,21 12,21 C12.5522847,21 13,20.5522847 13,20 C13,19.4477153 12.5522847,19 12,19 Z" /></svg>}
                  <span className="text-xs mt-1 font-mono">{device}</span>
                  <div className={`mt-1 w-3 h-3 rounded-full ${`bg-gradient-to-r ${features[activeFeature].color} animate-pulse shadow-sm shadow-cyan-400/30`}`}></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Features */}
          <div className="w-full lg:w-7/12 space-y-4 sm:space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`transition-all duration-500 transform ${
                  activeFeature === index 
                    ? 'translate-x-0 opacity-100 scale-100' 
                    : 'translate-x-4 opacity-50 scale-95'
                } cursor-pointer rounded-lg p-4 sm:p-6 backdrop-blur-md relative overflow-hidden group`}
                style={{background: `linear-gradient(135deg, ${index === activeFeature ? 'rgba(15, 23, 42, 0.7)' : 'rgba(15, 23, 42, 0.4)'} 0%, rgba(15, 23, 42, 0.1) 100%)`}}
                onClick={() => setActiveFeature(index)}
                onMouseEnter={() => setHoverFeature(index)}
                onMouseLeave={() => setHoverFeature(null)}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-lg p-px overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-30 ${activeFeature === index ? 'opacity-70' : 'opacity-30'} group-hover:opacity-70`}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                    <div className={`mb-2 sm:mb-0 sm:mr-4 p-2 sm:p-3 rounded-lg bg-gradient-to-br ${feature.bgColor} backdrop-blur-sm flex items-center justify-center`}>
                      <div className={`text-transparent bg-clip-text bg-gradient-to-br ${feature.color}`}>
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight font-mono">{feature.title}</h3>
                  </div>
                  
                  <div className="sm:ml-16">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                      <p className="font-medium text-sm sm:text-base">
                        <span className="text-gray-300">Time:</span> <span className={`bg-clip-text text-transparent bg-gradient-to-r ${feature.color} font-bold`}>{feature.time}</span>
                      </p>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                    
                    {/* Interactive elements on hover/active */}
                    <div className={`flex mt-3 sm:mt-4 space-x-3 items-center ${(hoverFeature === index || activeFeature === index) ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                      <button className={`px-2 sm:px-3 py-1 text-xs rounded-full bg-gradient-to-r ${feature.color} font-medium text-gray-900 flex items-center space-x-1`}>
                        <Lock className="w-3 h-3" />
                        <span>Details</span>
                      </button>
                      
                      <button className={`px-2 sm:px-3 py-1 text-xs rounded-full border border-white/20 backdrop-blur-sm font-medium flex items-center space-x-1 hover:bg-white/10 transition-all`}>
                        <Fingerprint className="w-3 h-3" />
                        <span>Try Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityDashboard;