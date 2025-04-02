import { Sparkles, Shield, TrendingUp, ChevronRight, PartyPopper, Gift, ArrowDown, Coins } from 'lucide-react';

const Page2 = () => {
  return (
    <div className="min-h-screen flex items-center bg-gray-900">
      {/* Simplified background */}
      <div className="absolute w-full h-full overflow-hidden">
        <div className="w-96 h-96 absolute -top-20 -left-20 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="w-96 h-96 absolute bottom-20 right-10 bg-teal-500/5 rounded-full blur-3xl"></div>
        
        {/* Reduced particles - just keeping a few for subtle effect */}
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-fuchsia-400 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center relative z-10 p-8">
        {/* Text content at the left end */}
        <div className="w-full md:w-5/12 space-y-6 mb-12 md:mb-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-600/20 border border-cyan-500/20 mb-2">
            <Sparkles size={14} className="text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">Limited Time Offer</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            VULTISIG <span className="text-cyan-400">AIRDROP</span>
          </h1>
          
          <p className="text-lg text-gray-300">
            Join now and secure your <span className="text-cyan-400 font-medium">$VULT</span> tokens
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-500 transition-colors flex items-center justify-center gap-2">
              Join today
              <ChevronRight size={16} />
            </button>
            
            <button className="border border-cyan-600/30 text-white px-6 py-3 rounded-lg transition-colors hover:bg-cyan-900/30 flex items-center justify-center gap-2">
              <TrendingUp size={16} />
              View Stats
            </button>
          </div>
          
          <div className="flex items-center gap-3 mt-6">
            <div className="bg-cyan-900/20 rounded-full p-2 border border-cyan-500/20">
              <Shield size={16} className="text-cyan-400" />
            </div>
            <div className="text-left">
              <p className="text-cyan-100 text-sm">Secured by Multi-Layer Protection</p>
            </div>
          </div>
        </div>
        
        {/* Creative airdrop visual at the right end */}
        <div className="w-full md:w-6/12 md:pl-8">
          <div className="relative h-80 flex items-center justify-center">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-3xl blur-xl opacity-50"></div>
            
            {/* Airdrop animation container */}
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              {/* Cloud at top */}
              <div className="relative mb-6">
                <div className="absolute -inset-4 bg-cyan-500/10 rounded-full blur-lg"></div>
                <div className="relative flex gap-2">
                  <div className="w-16 h-10 bg-white/10 rounded-full backdrop-blur-sm"></div>
                  <div className="w-24 h-12 bg-white/10 rounded-full backdrop-blur-sm"></div>
                  <div className="w-16 h-10 bg-white/10 rounded-full backdrop-blur-sm"></div>
                </div>
              </div>
              
              {/* Falling tokens */}
              <div className="relative">
                {/* Token 1 - with animation */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <span className="text-white font-bold text-xl">$VULT</span>
                  </div>
                </div>
                
                {/* Token 2 - with different animation */}
                <div className="absolute -top-4 left-1/4 transform -translate-x-1/2 animate-bounce delay-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <Coins size={20} className="text-white" />
                  </div>
                </div>
                
                {/* Token 3 - with different animation */}
                <div className="absolute -top-6 left-3/4 transform -translate-x-1/2 animate-bounce delay-700">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-fuchsia-400 to-purple-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/30">
                    <Gift size={16} className="text-white" />
                  </div>
                </div>
              </div>
              
              {/* Directional arrows */}
              <div className="my-6 flex justify-center">
                <ArrowDown size={32} className="text-cyan-400 animate-pulse" />
              </div>
              
              {/* User platform/wallet representation */}
              <div className="w-56 h-16 bg-white/5 border border-cyan-500/20 rounded-xl backdrop-blur-sm flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <PartyPopper size={16} className="text-cyan-400" />
                  </div>
                  <span className="text-white font-medium">Your VULT Wallet</span>
                </div>
              </div>
              
              {/* Celebratory elements */}
              <div className="absolute bottom-4 left-8">
                <div className="w-4 h-4 bg-fuchsia-500/30 rounded-full animate-ping"></div>
              </div>
              <div className="absolute top-12 right-12">
                <div className="w-3 h-3 bg-cyan-500/30 rounded-full animate-ping delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;