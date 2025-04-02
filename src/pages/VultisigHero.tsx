import  { useState, useEffect } from 'react';
import { Shield, Lock, ArrowRight, Database } from 'lucide-react';

// Import assets from your asset directory
import LogoImage from '../assets/icon.png';
import PhoneLeft from '../assets/iPhone.png';
import PhoneRight from '../assets/iPhone.png';

const VultisigHero = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div className="bg-gray-900 bg-gradient-to-br from-gray-900 to-blue-950 text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute h-64 w-64 rounded-full border border-cyan-400/20 -top-10 -left-10"></div>
        <div className="absolute h-96 w-96 rounded-full border border-cyan-400/10 bottom-10 right-10"></div>
        <div className="absolute h-32 w-32 rounded-full bg-cyan-500/5 top-1/4 right-1/4"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        {/* Left content section */}
        <div className={`flex flex-col justify-center transition-all duration-1000 ${isAnimated ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
          <div className="flex items-center mb-8">
            <div className="mr-1">
              <img 
                src={LogoImage} 
                alt="Vultisig Logo" 
                className="h-[100PX] w-auto"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">Vultisig</h1>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">Secure Your Digital Assets</span>
            <span className="text-cyan-400"> Today</span>
          </h2>
          
          <p className="text-gray-300 text-lg mb-8 max-w-lg">
            Military-grade security for your digital valuables with distributed key management and multi-signature protection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-white font-bold flex items-center justify-center hover:shadow-lg hover:shadow-blue-600/20 transition-all group">
              Download Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="px-8 py-4 bg-transparent border border-cyan-500/30 rounded-lg text-cyan-400 flex items-center justify-center hover:bg-cyan-950/30 transition-all">
              Learn More
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: <Shield size={24} />, text: "Multi-signature Protection" },
              { icon: <Lock size={24} />, text: "End-to-end Encryption" },
              { icon: <Database size={24} />, text: "Distributed Storage" }
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                <div className="text-cyan-400">{feature.icon}</div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right mobile display section */}
        <div className={`relative flex justify-center items-center transition-all duration-1000 delay-300 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {/* Glow effect behind phones */}
          <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
          
          {/* Left phone */}
          <div className="absolute transform -rotate-6 -translate-x-16 z-10">
            <div className="">
              <img 
                src={PhoneLeft} 
                alt="Vultisig Mobile App - Vault Share" 
                className="w-64 rounded-2xl"
              />
            </div>
          </div>
          
          {/* Right phone */}
          <div className="transform rotate-6 translate-x-16 z-0">
            <div className="">
              <img 
                src={PhoneRight} 
                alt="Vultisig Mobile App - Unlock" 
                className="w-64 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VultisigHero;