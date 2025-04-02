import {  Layers,  Zap } from 'lucide-react';
import phone1 from "../assets/phone.png"
import phone2 from "../assets/phone2.png"
import phone3 from "../assets/phone3.png"

const VultiSigHub = () => {
  return (
    <div className="bg-navy-950 text-white min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            BEST FEATURES IN <span className="text-cyan-400">ONE PLACE</span>
          </h1>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="group bg-navy-900 bg-opacity-50 rounded-xl p-6 backdrop-blur-sm border border-cyan-900/30 hover:border-cyan-400/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-700"></div>
            
            <h2 className="text-xl font-bold mb-3 flex items-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-lg mr-3">
                <Layers className="w-5 h-5" />
              </span>
              VULTISIG: ASSET MANAGEMENT HUB
            </h2>
            
            <p className="text-gray-300 mb-6">
              Vultisig is chain agnostic - Bitcoin, Ethereum, Solana, THORChain 
              and many more. The first multi-chain, multi-asset, multi-signature
              wallet in the world for everyone. You can deposit, send, swap and
              more inside Vultisig.
            </p>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900 opacity-50"></div>
              <img 
                src={phone2} 
                alt="VultiSig App Interface" 
                className="rounded-xl mx-auto w-full max-w-xs md:max-w-sm transform transition-transform group-hover:-rotate-3 group-hover:scale-105 shadow-xl shadow-cyan-900/20"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-900 to-transparent"></div>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="group bg-navy-900 bg-opacity-50 rounded-xl p-6 backdrop-blur-sm border border-cyan-900/30 hover:border-cyan-400/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-700"></div>
            
            <div className="flex flex-col justify-end">
              
              <h2 className="text-xl font-bold mb-3 flex items-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-lg mr-3">
                <Zap className="w-5 h-5" />
              </span>
              
                <span className="order-1">DEFI IN YOUR POCKET</span>
                
              </h2>
            </div>
            
            <p className="text-gray-300 mb-6 text-left">
              Vultisig is natively DeFi compatible - rebalance your portfolio right
              inside the vault. It also supports advanced DeFi functions such as
              bonding to Nodes, staking and more!
            </p>
            
            <div className="relative mt-6">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900 opacity-50"></div>
              <img 
                src={phone1} 
                alt="DeFi Features" 
                className="rounded-xl mx-auto w-full max-w-xs md:max-w-sm transform transition-transform group-hover:rotate-3 group-hover:scale-105 shadow-xl shadow-cyan-900/20"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-900 to-transparent"></div>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="group bg-navy-900 bg-opacity-50 rounded-xl p-6 backdrop-blur-sm border border-cyan-900/30 hover:border-cyan-400/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-700"></div>
            
            <h2 className="text-xl font-bold mb-3 flex items-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-lg mr-3">
                <Zap className="w-5 h-5" />
              </span>
              EXPAND YOUR WALLET'S POWER
            </h2>
            
            <p className="text-gray-300 mb-6">
              Unlock new possibilities with Vultisig Plugins. From automated
              investments (DCA) to tightly managed security options; your wallet,
              your way. Build your decentralized financial command center 
              with tools that work seamlessly together. (still in development)
            </p>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900 opacity-50"></div>
              <img 
                src={phone3} 
                alt="Wallet Extensions" 
                className="rounded-xl mx-auto w-full max-w-xs md:max-w-sm transform transition-transform group-hover:-rotate-3 group-hover:scale-105 shadow-xl shadow-cyan-900/20"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-900 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
            Explore VultiSig Now
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default VultiSigHub;