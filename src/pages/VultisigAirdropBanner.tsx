import { Sparkles, ChevronRight, Check } from 'lucide-react';

const VultisigAirdropBanner = () => {
  return (
    <div className="text-white pt-[60px]">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="inline-block px-3 py-1 bg-cyan-900/40 text-cyan-400 rounded-full text-sm font-medium mb-2">
              Airdrop Now Live
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Claim Your <span className="text-cyan-400">$VULT</span> Tokens
              <span className="block mt-2">Secure Your Future</span>
            </h1>
            
            <p className="text-white text-lg">
              Join the next generation of decentralized asset protection and management. 
              $VULT tokens power the Vultisig ecosystem, enabling secure multi-signature 
              governance and enhanced digital sovereignty.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-cyan-900/40 p-1 rounded">
                  <Check className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Multi-Signature Security</h3>
                  <p className="text-cyan-100 text-sm">Enhanced protection for your assets</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-cyan-900/40 p-1 rounded">
                  <Check className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Governance Rights</h3>
                  <p className="text-cyan-100 text-sm">Vote on protocol decisions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-cyan-900/40 p-1 rounded">
                  <Check className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Fee Reductions</h3>
                  <p className="text-cyan-100 text-sm">Lower costs for token holders</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-cyan-900/40 p-1 rounded">
                  <Check className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Ecosystem Access</h3>
                  <p className="text-cyan-100 text-sm">Priority for new features</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-cyan-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                <Sparkles className="w-5 h-5" />
                <span>Claim Airdrop</span>
                <ChevronRight className="w-4 h-4" />
                </button>
              
                <button className="flex items-center justify-center space-x-2 border border-gray-700 hover:border-gray-600 text-white py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                <span>View Documentation</span>
                </button>
            </div>
          </div>
          
          {/* Right Column - Info Card */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 md:p-8">
            <div className="bg-gray-900 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-white">Airdrop Details</h3>
                <span className="px-2 py-1 bg-green-900/40 text-green-400 rounded text-xs font-medium">
                  Active
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-cyan-100">Total Supply:</span>
                  <span className="font-medium text-white">100,000,000 VULT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-100">Airdrop Allocation:</span>
                  <span className="font-medium text-white">5,000,000 VULT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-100">Eligible Wallets:</span>
                  <span className="font-medium text-white">35,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-100">Ends In:</span>
                  <span className="font-medium text-cyan-400">14 days 6 hours</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-white mb-2">Claim Progress</h3>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-cyan-600 h-2.5 rounded-full" style={{ width: '67%' }}></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-white">
                  <span>3,350,000 / 5,000,000 VULT claimed</span>
                  <span className="text-cyan-400">67%</span>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-lg font-medium text-white mb-4">Check Eligibility</h3>
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="Enter wallet address (0x...)" 
                    className="flex-grow p-3 bg-gray-900 border border-gray-700 rounded-l-lg focus:outline-none focus:border-cyan-600 text-white"
                  />
                  <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 rounded-r-lg">
                    Check
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VultisigAirdropBanner;