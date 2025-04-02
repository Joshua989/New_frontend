import  { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, Menu, X, CreditCard,
  Layers, Compass, Cpu, Rocket 
} from "lucide-react";
import Logo from "../assets/logo.png";
import IconImage from "../assets/icon.png";

export default function FluidGradientNavbar() {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  
  // Create an array of floating icons with random positions and animations
  const floatingIcons = useMemo(() => {
    return Array.from({ length: 12 }).map((_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 20,
      duration: Math.random() * 30 + 30,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.2 + 0.1,
      rotate: Math.random() * 360,
    }));
  }, []);

  useEffect(() => {
    const animateGradient = () => {
      const timeNow = Date.now() * 0.0005;
      setGradientPosition({
        x: 50 + Math.sin(timeNow) * 30,
        y: 50 + Math.cos(timeNow * 1.3) * 30
      });
    };

    const intervalId = setInterval(animateGradient, 50);
    return () => clearInterval(intervalId);
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setIsMobileProductOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const NavLinks = [
    { 
      name: "Product", 
      icon: CreditCard, 
      dropdown: true,
      subItems: [
        { 
          name: "Core Platform", 
          icon: Layers, 
          description: "Liquid blockchain infrastructure",
          color: "bg-blue-100"
        },
        { 
          name: "Developer Tools", 
          icon: Cpu, 
          description: "Fluid development ecosystem",
          color: "bg-teal-100"
        },
        { 
          name: "Enterprise Solution", 
          icon: Rocket, 
          description: "Scalable wave of innovation",
          color: "bg-indigo-100"
        }
      ]
    },
    { name: "Ecosystem", href: "#ecosystem", icon: Compass },
    { name: "Community", href: "#community" },
    { name: "Docs", href: "#docs" },
    { name: "$VULT", href: "#token" }
  ];

  return (
    <>
      {/* Floating icons background */}
      <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none">
        {floatingIcons.map((icon) => (
          <motion.div
            key={icon.id}
            className="absolute"
            initial={{
              x: `${icon.x}vw`,
              y: `${icon.y}vh`,
              rotate: icon.rotate,
              opacity: icon.opacity,
            }}
            animate={{
              x: [`${icon.x}vw`, `${(icon.x + 20) % 100}vw`, `${(icon.x - 10) % 100}vw`, `${icon.x}vw`],
              y: [`${icon.y}vh`, `${(icon.y - 15) % 100}vh`, `${(icon.y + 10) % 100}vh`, `${icon.y}vh`],
              rotate: [icon.rotate, icon.rotate + 180, icon.rotate + 360],
              opacity: [icon.opacity, icon.opacity + 0.1, icon.opacity],
            }}
            transition={{
              duration: icon.duration,
              delay: icon.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <img 
              src={IconImage} 
              alt="Floating icon" 
              style={{
                width: `${icon.size}px`,
                height: `${icon.size}px`,
                filter: "blur(1px)",
              }}
            />
          </motion.div>
        ))}
      </div>
      
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div 
          className="fixed inset-0 -z-20 pointer-events-none"
          style={{
            background: `radial-gradient(
              circle at ${gradientPosition.x}% ${gradientPosition.y}%, 
              rgba(59,130,246,0.4), 
              rgba(99,102,241,0.3), 
              rgba(168,85,247,0.2), 
              transparent 70%
            )`,
            animation: 'gradient-flow 15s ease infinite',
            backgroundSize: '400% 400%',
            transform: 'scale(1.5)',
            filter: 'blur(120px)'
          }}
        />

        <div 
          className="fixed inset-0 -z-20 opacity-40 pointer-events-none"
          style={{
            background: `linear-gradient(
              135deg, 
              rgba(59,130,246,0.2), 
              rgba(99,102,241,0.2), 
              rgba(168,85,247,0.2)
            )`,
            animation: 'liquid-wave 20s ease infinite',
            backgroundSize: '600% 600%'
          }}
        />

        <div className="relative px-2 sm:px-4 lg:px-6 bg-[#0A1128]/50 backdrop-blur-md">
          <div className="flex items-center justify-between h-16 md:h-20 lg:h-24 relative">
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -3, 3, 0]
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="relative">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 3, -3, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute inset-0 bg-blue-500/30 rounded-xl blur-xl"
                />
                <div className="">
                <img src={Logo} alt="Vultisig Logo" className="h-[32px] sm:h-[38px] md:h-[45px] lg:h-[50px]"/>
              </div>

              </div>
              
            </motion.div>

            {/* Desktop Navigation - Modified for smaller screens */}
            <div className="hidden md:flex space-x-1 lg:space-x-2 xl:space-x-4 items-center">
              {NavLinks.map((link, index) => (
                <motion.div 
                  key={index} 
                  className="relative group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.dropdown ? (
                    <div 
                      className="text-white/80 hover:text-white cursor-pointer 
                        flex items-center 
                        bg-white/10 hover:bg-white/20 
                        px-1.5 sm:px-2 lg:px-3 py-1.5 sm:py-2 rounded-full 
                        backdrop-blur-lg 
                        border border-white/20
                        text-xs lg:text-sm"
                      onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
                    >
                      <link.icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4 mr-1" />
                      <span className="font-semibold tracking-wide">{link.name}</span>
                      <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-white/60 transition-transform ml-1" />
                    </div>
                  ) : (
                    <motion.a 
                      href={link.href} 
                      className="text-white/80 hover:text-white 
                        font-semibold tracking-wide 
                        flex items-center
                        bg-white/10 hover:bg-white/20 
                        px-1.5 sm:px-2 lg:px-3 py-1.5 sm:py-2 rounded-full
                        backdrop-blur-lg
                        border border-white/20
                        text-xs lg:text-sm whitespace-nowrap"
                    >
                      {link.icon && <link.icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4 mr-1" />}
                      {link.name}
                    </motion.a>
                  )}

                  <AnimatePresence>
                    {link.dropdown && isProductMenuOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 mt-2 w-60 sm:w-64 lg:w-72 
                          bg-white/90 backdrop-blur-xl 
                          rounded-xl shadow-2xl 
                          border border-white/10 
                          overflow-hidden"
                      >
                        <div className="p-2 sm:p-3 space-y-2">
                          {link.subItems.map((subItem, subIndex) => (
                            <motion.a
                              key={subIndex}
                              whileHover={{ 
                                x: 5,
                                backgroundColor: 'rgba(255,255,255,0.2)'
                              }}
                              href="#"
                              className="block p-2 rounded-lg transition-all group"
                            >
                              <div className="flex items-center space-x-2">
                                <div className={`${subItem.color} p-1.5 sm:p-2 rounded-lg`}>
                                  <subItem.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                                </div>
                                <div>
                                  <h3 className="font-bold text-gray-800 text-xs sm:text-sm group-hover:text-blue-600">
                                    {subItem.name}
                                  </h3>
                                  <p className="text-xs text-gray-500 hidden sm:block">
                                    {subItem.description}
                                  </p>
                                </div>
                              </div>
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.button 
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 15px rgba(59,130,246,0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block 
                bg-gradient-to-r from-blue-600 to-purple-600 
                text-white px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full 
                hover:from-blue-700 hover:to-purple-700 
                transition-all duration-300 
                shadow-lg 
                backdrop-blur-lg
                border border-white/30
                relative 
                overflow-hidden
                text-xs lg:text-sm whitespace-nowrap"
            >
              <motion.span 
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute inset-0 
                  bg-gradient-to-r from-transparent 
                  via-white/20 to-transparent 
                  bg-size-150 opacity-50"
              />
              Download App
            </motion.button>

            <motion.div 
              whileTap={{ scale: 0.9 }}
              className="md:hidden"
            >
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="bg-[#0A1128]/90 backdrop-blur-lg border-t border-white/10 py-3 px-3">
                <div className="space-y-2">
                  {NavLinks.map((link, index) => (
                    <div key={index}>
                      {link.dropdown ? (
                        <div>
                          <div 
                            className="text-white/80 hover:text-white cursor-pointer 
                              flex items-center justify-between
                              bg-white/10 hover:bg-white/20 
                              px-3 py-2 rounded-lg 
                              border border-white/20"
                            onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
                          >
                            <div className="flex items-center">
                              <link.icon className="w-4 h-4 mr-2" />
                              <span className="font-semibold tracking-wide text-sm">{link.name}</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 text-white/60 transition-transform ${isMobileProductOpen ? 'rotate-180' : ''}`} />
                          </div>
                          
                          <AnimatePresence>
                            {isMobileProductOpen && (
                              <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-1 ml-3 space-y-1 overflow-hidden"
                              >
                                {link.subItems.map((subItem, subIndex) => (
                                  <motion.a
                                    key={subIndex}
                                    whileHover={{ x: 3 }}
                                    href="#"
                                    className="block p-2 rounded-lg 
                                      bg-white/5 hover:bg-white/10 
                                      border border-white/10
                                      transition-all"
                                  >
                                    <div className="flex items-center space-x-2">
                                      <div className={`${subItem.color.replace('100', '800')} bg-opacity-20 p-1.5 rounded-lg`}>
                                        <subItem.icon className="w-3.5 h-3.5 text-white" />
                                      </div>
                                      <div>
                                        <h3 className="font-semibold text-white text-xs">
                                          {subItem.name}
                                        </h3>
                                        <p className="text-xs text-white/50">
                                          {subItem.description}
                                        </p>
                                      </div>
                                    </div>
                                  </motion.a>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <motion.a 
                          href={link.href} 
                          whileHover={{ x: 3 }}
                          className="text-white/80 hover:text-white 
                            flex items-center space-x-2
                            bg-white/10 hover:bg-white/20 
                            px-3 py-2 rounded-lg
                            border border-white/20
                            block text-sm"
                        >
                          {link.icon && <link.icon className="w-4 h-4" />}
                          <span className="font-semibold tracking-wide">{link.name}</span>
                        </motion.a>
                      )}
                    </div>
                  ))}
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-3 w-full
                    bg-gradient-to-r from-blue-600 to-purple-600 
                    text-white px-4 py-2 rounded-lg 
                    hover:from-blue-700 hover:to-purple-700 
                    transition-all duration-300 
                    shadow-lg
                    backdrop-blur-lg
                    border border-white/30
                    relative 
                    overflow-hidden
                    flex items-center justify-center
                    text-sm"
                >
                  <motion.span 
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="absolute inset-0 
                      bg-gradient-to-r from-transparent 
                      via-white/20 to-transparent 
                      bg-size-200 opacity-50"
                  />
                  Download App
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <style>{`
          @keyframes gradient-flow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes liquid-wave {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          body {
            background-color: #0A1128;
            overflow-x: hidden;
          }

          @media (min-width: 768px) and (max-width: 1200px) {
            .bg-size-150 {
              background-size: 150% 150%;
            }
            .bg-size-200 {
              background-size: 200% 200%;
            }
          }
        `}</style>
      </motion.nav>
    </>
  );
}