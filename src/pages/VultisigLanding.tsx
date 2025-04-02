import { ShieldCheck, Layers, Zap, Sparkles, Lock, Globe } from 'lucide-react';
import iphone from '../assets/app.png'; // Adjust the path as necessary

const VultisigLanding = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6  from-gray-900 to-black overflow-hidden">
      {/* Clean, minimal background with subtle animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/subtle-dots.svg')] opacity-5"></div>
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content Section */}
        <div className="space-y-8">
          <div className="flex space-x-3">
            <span className="px-4 py-2 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-sm inline-flex items-center gap-2">
              <Lock size={14} />
              Open-Source & Audited
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm inline-flex items-center gap-2">
              <Sparkles size={14} />
              New Beta Release
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <div className="mb-2 text-white">The Next-Gen</div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500">
              Seedless Crypto Vault
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-xl">
            Experience institutional-grade security with Vultisig. A revolutionary self-custodial solution designed for crypto enthusiasts, traders, and institutions in the Web3 era.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="group bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-teal-500/20 transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-2">
                <Zap size={18} className="group-hover:animate-pulse" />
                Download Now
              </span>
            </button>
            <button className="border border-teal-500/50 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:bg-teal-500/10 hover:border-teal-400 hover:text-teal-300">
              Learn More
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            <div className="group flex flex-col items-center md:items-start gap-3 p-4 rounded-xl hover:bg-white/5 transition-all">
              <ShieldCheck className="text-teal-500 group-hover:text-teal-400 transition-colors" size={28} />
              <span className="text-white font-medium">Threshold Signatures</span>
            </div>
            <div className="group flex flex-col items-center md:items-start gap-3 p-4 rounded-xl hover:bg-white/5 transition-all">
              <Layers className="text-blue-500 group-hover:text-blue-400 transition-colors" size={28} />
              <span className="text-white font-medium">Multi-Chain Support</span>
            </div>
            <div className="group flex flex-col items-center md:items-start gap-3 p-4 rounded-xl hover:bg-white/5 transition-all">
              <Globe className="text-purple-500 group-hover:text-purple-400 transition-colors" size={28} />
              <span className="text-white font-medium">No Recovery Phrase</span>
            </div>
          </div>
        </div>
        
        {/* iPhone Image Section with enhanced presentation */}
        <div className="relative flex justify-center md:justify-end">
<div className="relative transform hover:rotate-2 transition-all duration-500 group mr-14">
  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
  
  <img
    src={iphone}
    alt="Vultisig App on iPhone"
    className="h-[700px] relative z-10 drop-shadow-2xl scale-x-[-1]"
  />

  {/* Floating elements around the phone */}
  <div className="absolute -right-8 top-1/4 bg-teal-500/80 w-12 h-12 rounded-full flex items-center justify-center z-20 animate-bounce">
    <ShieldCheck className="text-white" size={24} />
  </div>
  <div className="absolute -left-6 top-1/3 bg-blue-500/80 w-10 h-10 rounded-full flex items-center justify-center z-20 animate-pulse">
    <Lock className="text-white" size={20} />
  </div>
  <div className="absolute right-10 bottom-1/4 bg-purple-500/80 w-8 h-8 rounded-full flex items-center justify-center z-20 animate-float">
    <Sparkles className="text-white" size={16} />
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default VultisigLanding;