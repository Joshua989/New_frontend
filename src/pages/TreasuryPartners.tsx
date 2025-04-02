import  { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

// Import logo images from local repository
import thorchainLogo from '../assets/thorchain.svg';
import vultisigLogo from '../assets/vultisig.svg';
import weweLogo from '../assets/wewe.svg';
import defiSuisseLogo from '../assets/DeFi-suisse-treasury.svg';
import zkfinanceLogo from '../assets/zkfinance.svg';
import rujiLogo from '../assets/ruji.svg';

const TreasuryPartners = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const [visiblePartners, setVisiblePartners] = useState(3);

  // Update visible partners based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisiblePartners(1);
      } else if (window.innerWidth < 1024) {
        setVisiblePartners(2);
      } else {
        setVisiblePartners(3);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const partners = [
    {
      id: 1,
      name: "THORChain",
      description: "Cross-chain liquidity protocol enabling asset swaps across blockchains",
      logo: thorchainLogo,
      color: "#00FFAA"
    },
    {
      id: 2,
      name: "Vultisig",
      description: "Multi-signature treasury management system for DAOs and organizations",
      logo: vultisigLogo,
      color: "#0088FF"
    },
    {
      id: 3,
      name: "WEWE",
      description: "Community-driven financial protocol for decentralized social economies",
      logo: weweLogo, 
      color: "#00FFEE"
    },
    {
      id: 4,
      name: "DeFi Suisse",
      description: "Regulated DeFi platform bridging traditional finance with crypto innovations",
      logo: defiSuisseLogo,
      color: "#FFFFFF"
    },
    {
      id: 5,
      name: "ZKFinance",
      description: "Zero-knowledge proof financial applications with enhanced privacy features",
      logo: zkfinanceLogo,
      color: "#3366FF" 
    },
    {
      id: 6,
      name: "RUJI",
      description: "Cross-border payment solutions using blockchain and stablecoin technology",
      logo: rujiLogo,
      color: "#BB33FF"
    }
  ];

  // Auto-rotate partners
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % partners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [partners.length]);

  const nextPartner = () => {
    setActiveIndex((current) => (current + 1) % partners.length);
  };

  const prevPartner = () => {
    setActiveIndex((current) => (current - 1 + partners.length) % partners.length);
  };

  const getFeaturedPartners = () => {
    const result = [];
    for (let i = 0; i < visiblePartners; i++) {
      const index = (activeIndex + i) % partners.length;
      result.push(partners[index]);
    }
    return result;
  };

  return (
    <div className="text-white p-4 md:p-8 rounded-xl overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `float ${Math.random() * 10 + 20}s linear infinite`
            }}
          />
        ))}
      </div>
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-30 animate-pulse" />
      
      <div className="relative z-10">
        {/* Headline with animated gradient */}
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-12 tracking-wider relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 animate-gradient">
            TRUSTED BY THE BEST
          </span>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-2 md:mt-3 rounded-full animate-pulse" />
        </h2>

        {/* Featured partners section */}
        <div className="flex justify-center items-center gap-2 md:gap-4 mb-6 md:mb-12">
          <button 
            onClick={prevPartner}
            className="p-1 md:p-2 rounded-full bg-blue-900/30 hover:bg-blue-800/50 transition-all"
            aria-label="Previous partner"
          >
            <ChevronLeft size={20} className="md:h-6 md:w-6" />
          </button>

          <div className="flex gap-3 md:gap-6 justify-center flex-wrap sm:flex-nowrap">
            {getFeaturedPartners().map((partner, idx) => (
              <div 
                key={partner.id}
                className={`transition-all duration-300 flex flex-col items-center 
                  ${visiblePartners === 1 || (visiblePartners >= 2 && idx === Math.floor(visiblePartners/2)) 
                    ? 'scale-100 md:scale-110 z-10' 
                    : 'scale-90 opacity-80'}`}
                onMouseEnter={() => setIsHovering(partner.id)}
                onMouseLeave={() => setIsHovering(null)}
              >
                <div 
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center relative mb-2 md:mb-4 transition-transform duration-300 hover:scale-110"
                  style={{
                    boxShadow: `0 0 20px ${partner.color}50`,
                    background: `linear-gradient(135deg, #0a192f, #172a46)`
                  }}
                >
                  {/* Logo from import */}
                  <div className="absolute inset-1 rounded-full flex items-center justify-center overflow-hidden bg-blue-950">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain" 
                    />
                  </div>
                  
                  {/* Pulse effect */}
                  {isHovering === partner.id && (
                    <div className="absolute inset-0 rounded-full animate-ping-slow" style={{ boxShadow: `0 0 20px ${partner.color}` }} />
                  )}
                </div>
                
                <div className="text-center">
                  <div className="font-bold text-sm md:text-base">{partner.name}</div>
                  <div className="text-xs text-gray-300">Treasury</div>
                </div>
                
                {/* Expandable description on hover/touch */}
                {isHovering === partner.id && (
                  <div className="mt-2 md:mt-3 max-w-xs text-center text-xs md:text-sm bg-blue-900/50 p-2 md:p-3 rounded-lg backdrop-blur-sm animate-fadeIn">
                    {partner.description}
                    <div className="mt-2 text-xs flex items-center justify-center text-blue-300 cursor-pointer">
                      <span>Learn more</span>
                      <ExternalLink size={12} className="ml-1" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button 
            onClick={nextPartner}
            className="p-1 md:p-2 rounded-full bg-blue-900/30 hover:bg-blue-800/50 transition-all"
            aria-label="Next partner"
          >
            <ChevronRight size={20} className="md:h-6 md:w-6" />
          </button>
        </div>

        {/* Partner dots navigation */}
        <div className="flex justify-center gap-1 md:gap-2 overflow-auto py-2 px-4">
          {partners.map((partner, idx) => (
            <button
              key={partner.id}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${activeIndex === idx ? 'w-4 md:w-6 bg-blue-400' : 'bg-gray-600'}`}
              aria-label={`Go to ${partner.name}`}
            />
          ))}
        </div>
        
        {/* Stat counter with animation */}
        <div className="mt-4 md:mt-8 text-center">
          <div className="text-xs md:text-sm text-gray-400">Supporting</div>
          <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            $2.5B+ in Treasury Assets
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreasuryPartners;