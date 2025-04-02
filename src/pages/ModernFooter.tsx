import { Github, Twitter, MessageCircle, Send } from 'lucide-react';
import logo from "../assets/icon.png"

const ModernFooter = () => {
  return (
    <footer className="bg-transparent text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section with CTA */}
        <div className="bg-blue-600 rounded-xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between shadow-lg transform hover:scale-[1.01] transition-transform">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">JOIN THE DISCORD TO REQUEST NEW FEATURES!</h2>
          <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors flex items-center gap-2">
            <MessageCircle size={20} />
            Join Discord
          </button>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Social Section */}
          <div className="col-span-1">
            <div className="flex mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-all duration-300">
                <img src={logo} alt="Vultisig Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            
            <div className="flex gap-4 mb-8">
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition-colors">
                <Github size={22} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition-colors">
                <Twitter size={22} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition-colors">
                <MessageCircle size={22} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition-colors">
                <Send size={22} />
              </a>
            </div>
            
            <p className="text-sm text-slate-400">v1.1.0</p>
          </div>
          
          {/* Navigation Columns */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Vultisig</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Backed by</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Docs</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">$VULT</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Extension</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Audits</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="border-t border-slate-700 mt-12 pt-8 text-slate-400">
          <p>© Copyright 2025 - Vultisig. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;