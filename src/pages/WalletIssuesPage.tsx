import { useState } from 'react';
import { ChevronDown, Shield, HardDrive, Users, ExternalLink } from 'lucide-react';
// Import the person image from your directory
import personImage from '../assets/robot.png';

const WalletIssuesPage = () => {
  const [activeSection, setActiveSection] = useState(1);
  
  const sections = [
    {
      id: 1,
      icon: <Shield className="text-red-500" size={24} />,
      title: "Single-signature wallets are dangerous",
      shortDesc: "One mistake and forever rekt.",
      description: "Accidentally lose your phone? Upload your private keys to a phishing site? Download a trojan and drain your hot wallet? With single-signature wallets, there are no second chances.",
      color: "bg-gradient-to-r from-red-600 to-pink-600"
    },
    {
      id: 2,
      icon: <HardDrive className="text-yellow-500" size={24} />,
      title: "Hardware wallets are clunky",
      shortDesc: "Why can't it be better?",
      description: "Small screens, small buttons, annoying interfaces. Complicated setup instructions, scary firmware updates and confusing transactions. Hardware wallets sacrifice usability for security.",
      color: "bg-gradient-to-r from-yellow-600 to-amber-600"
    },
    {
      id: 3,
      icon: <Users className="text-blue-500" size={24} />,
      title: "Multi-signature wallets are painful",
      shortDesc: "If only there was something that works for all.",
      description: "Multi-sig is a solution, but it is not chain agnostic or dynamic. Different networks (ETH, BTC, SOL) have different multi-sig setups, making a single UX impossible. The fragmentation creates complexity.",
      color: "bg-gradient-to-r from-blue-600 to-cyan-600"
    }
  ];

  return (
    <div className="bg-slate-900 px-4 sm:px-6 md:pl-[30px] min-h-screen text-white font-sans">
      {/* Hero Section */}
      <div className="container mx-auto py-8 sm:py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-10 right-10 w-32 md:w-64 h-32 md:h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-20 left-20 w-36 md:w-72 h-36 md:h-72 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8">
            WHAT IS <span className="text-cyan-400 font-extrabold">WRONG</span> WITH WALLETS
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12">
            {/* Left column: Interactive sections */}
            <div className="space-y-4 sm:space-y-6">
              {sections.map((section) => (
                <div 
                  key={section.id}
                  className={`rounded-xl p-4 sm:p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 ${activeSection === section.id ? 'bg-slate-800 border-l-4 border-cyan-400' : 'bg-slate-800/60'}`}
                  onClick={() => setActiveSection(section.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-4">
                      <div className="p-2 sm:p-3 rounded-lg bg-slate-700">
                        {section.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold">{section.title}</h3>
                        <p className="text-sm sm:text-base text-slate-400">{section.shortDesc}</p>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`transition-transform duration-300 ${activeSection === section.id ? 'rotate-180' : ''}`}
                      size={20}
                    />
                  </div>
                  
                  {activeSection === section.id && (
                    <div className="mt-4 pl-4 sm:pl-14 text-sm sm:text-base text-slate-300 leading-relaxed">
                      <p>{section.description}</p>
                    </div>
                  )}
                </div>
              ))}
              
              {/* CTA Button */}
              <div className="mt-6 sm:mt-8">
                <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center sm:justify-start gap-2">
                  Discover the Solution <ExternalLink size={16} />
                </button>
              </div>
            </div>
            
            {/* Right column: Visual */}
            <div className="relative h-64 sm:h-80 md:h-full mt-8 md:mt-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Animated stacked blocks visual */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={i}
                      className={`relative w-32 sm:w-40 md:w-48 h-8 sm:h-10 md:h-12 ${sections[activeSection-1].color} rounded-lg shadow-lg mb-2 transform transition-all duration-500`}
                      style={{
                        transform: `translateY(${i * 6}px) scale(${1 - i * 0.05})`,
                        opacity: 1 - i * 0.15,
                        zIndex: 10 - i
                      }}
                    >
                      <div className="absolute right-2 top-2 h-1 sm:h-2 w-4 sm:w-8 bg-white/20 rounded-full"></div>
                      <div className="absolute left-2 bottom-2 h-1 sm:h-2 w-2 sm:w-4 bg-white/20 rounded-full"></div>
                    </div>
                  ))}
                  
                  {/* Person image on top of the stack */}
                  <div className="absolute bottom-0 transform -translate-y-4">
                    <img 
                      src={personImage} 
                      alt="Person interacting with digital wallet" 
                      className="h-40 sm:h-64 md:h-80 lg:h-[400px] xl:h-[500px] object-contain"
                      style={{ marginBottom: '12px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletIssuesPage;