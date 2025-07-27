"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Download, Star, Play, ArrowRight, Zap, Shield, Award, Package, Users, TrendingUp, Building2, Calculator, Truck, X } from "lucide-react"
import Link from "next/link"

interface HeroProps {
  openPopup: () => void;
}

export function Hero({ openPopup }: HeroProps) {
  const [isDark, setIsDark] = useState(false)
  const { scrollY } = useScroll()

  // No scroll-based animations for phone - just hover effect

  useEffect(() => {
    const updateTheme = () => {
      // Check if we've scrolled past the testimonials section (approximately)
      const darkSectionStart = window.innerHeight * 4 // Adjust this value based on your sections
      setIsDark(window.scrollY > darkSectionStart)
    }

    const unsubscribe = scrollY.on("change", updateTheme)
    return () => unsubscribe()
  }, [scrollY])

  // Company logos for "As Seen On" section - reduced duplicates
  const companyLogos = [
    { name: "eco-times", src: "/images/logos/eco-times.png"},
    { name: "et-retail", src: "/images/logos/et-retail.png" },
    { name: "express-computer", src: "/images/logos/express-computer.png" },
    { name: "fonearena", src: "/images/logos/fonearena.png"},
    { name: "hindustan-times", src: "/images/logos/hindustan-times.png" },
    { name: "issue-wire", src: "/images/logos/issue-wire.png" },
    { name: "mint", src: "/images/logos/mint.png" },
    { name: "shark-tank", src: "/images/logos/shark-tank.png" },
    { name: "telecom", src: "/images/logos/telecom.png"},
  ];

  return (
    <>
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 sm:py-6 transition-all duration-500">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            paddingBlock: 'calc(var(--spacing) * 3.2) !important',
            paddingInline: 'calc(var(--spacing) * 6)',
            borderRadius: '10px !important'
          }}
          className={`flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 rounded-full transition-all duration-500 bg-white
            
          `}
        >
       <Link href="/">
         <img src="/logo.jpg" alt="ReFit Logo" style={{width: 'auto', height: '28px'}} className="h-10 w-auto object-contain" />
       </Link>
        </motion.div>
        
        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 sm:gap-4"
        >
          <Link 
            href="/shop" 
            className={`hidden md:flex items-center px-4 py-2 transition-all duration-500 ${
              isDark 
                ? 'text-white hover:text-gray-200' 
                : 'text-black hover:text-gray-700'
            }`}
          >
            Shop
          </Link>
          <Link 
            href="/contact" 
            className={`hidden md:flex items-center px-4 py-2 transition-all duration-500 ${
              isDark 
                ? 'text-white hover:text-gray-200' 
                : 'text-black hover:text-gray-700'
            }`}
          >
            Contact
          </Link>
          <Button 
            variant="outline" 
            className={`hidden md:flex transition-all duration-500 ${
              isDark 
                ? 'border-white text-white hover:bg-white/10 bg-white/20' 
                : 'border-black text-black hover:bg-black/10 bg-white/20'
            } backdrop-blur-sm shadow-md`}
            onClick={openPopup}
          >
            Get the app
          </Button>
          <Button 
            className={`px-3 sm:px-6 py-2 rounded-lg font-medium flex items-center gap-2 text-sm sm:text-base transition-all duration-500 shadow-md ${
            isDark 
              ? 'bg-white text-black hover:bg-gray-100' 
              : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
            onClick={openPopup}
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download App</span>
            <span className="sm:hidden">Download</span>
          </Button>
        </motion.div>
      </nav>

      {/* Combined Hero and Stats Section */}
      <section className="relative bg-gradient-to-br from-[#f5f7fa] via-[#fbeffb] to-[#e0ecfc] overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-16 pb-8 sm:pb-12">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-0">
            {/* Left: Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="mb-6 sm:mb-8">
                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black leading-tight mb-6 sm:mb-8"
                >
                  BULK BUYING.
                  <br />
                  <span className="block">FAST AND TRUSTED.</span>
                </motion.h1>
                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-2xl lg:max-w-lg px-4 lg:px-0"
                >
                  Bulk orders and wholesale sourcing, 1000+ types of 
                  refurbished devices, up to 70% savings and a lot more
                </motion.p>
                {/* Download Buttons as Store Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex gap-4 w-full max-w-xs mx-auto lg:mx-0"
                  style={{ maxWidth: '420px' }}
                >
               
                  <a
                    href="https://play.google.com/store/apps/details?id=com.refitglobal.bulkbuy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <motion.img
                      src="https://zoyothemes.com/tailwind/evea/assets/images/google.png"
                      alt="Get it on Google Play"
                      className="w-full h-auto min-w-[140px] max-w-[200px] object-contain rounded-lg shadow-md"
                      whileHover={{ scale: 1.07 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    />
                  </a>
                </motion.div>
              </div>
            </div>
            {/* Right: Mobile Image and Decorations */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0 relative">
              {/* Circular BG */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-1/2 lg:left-2/3 lg:-translate-x-1/3 lg:-translate-y-1/2 w-96 h-96 sm:w-[34rem] sm:h-[34rem] bg-[#f3f6fd] rounded-full z-0 blur-[2px]" aria-hidden="true"></div>
              {/* Decorative Icons */}
              {/* Star Icon */}
              <div className="absolute -top-6 right-8 sm:-top-8 sm:right-16 z-10 group/icon">
                <div className="transition-transform duration-300 ease-out group-hover/icon:scale-110 group-hover/icon:rotate-12">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3l3.09 9.26L32 14.27l-7.19 5.24L26.18 29 20 23.77 13.82 29l1.37-9.49L8 14.27l8.91-1.99L20 3z" fill="#FFD700"/>
                  </svg>
                </div>
              </div>
              {/* Diamond Icon */}
              <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-16 z-10 group/icon">
                <div className="transition-transform duration-300 ease-out group-hover/icon:scale-110 group-hover/icon:-rotate-12">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="8" width="16" height="16" rx="4" transform="rotate(45 16 16)" fill="#60A5FA"/>
                  </svg>
                </div>
              </div>
              {/* Sparkle Icon */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 sm:top-8 sm:left-1/2 z-10 group/icon">
                <div className="transition-transform duration-300 ease-out group-hover/icon:scale-110 group-hover/icon:rotate-6">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2L15.8 8.2L22 10L15.8 11.8L14 18L12.2 11.8L6 10L12.2 8.2L14 2Z" fill="#F472B6"/>
                  </svg>
                </div>
              </div>
              {/* Dot Icon */}
              <div className="absolute bottom-4 right-1/3 sm:bottom-8 sm:right-1/2 z-10 group/icon">
                <div className="transition-transform duration-300 ease-out group-hover/icon:scale-125 group-hover/icon:-rotate-12">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="9" fill="#34D399"/>
                  </svg>
                </div>
              </div>
              <motion.img
                src="/images/app.png"
                alt="Mobile App Preview"
                className="w-80 sm:w-[28rem] lg:w-[500px] h-auto drop-shadow-xl relative z-10"
                draggable="false"
                style={{ userSelect: 'none' }}
                whileHover={{ scale: 1.05, rotate: 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            </div>
          </div>
         
          {/* "As Seen On" Static Logos Section with scroll */}
          <div className="mt-6 sm:mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="flex flex-col sm:flex-row items-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 whitespace-nowrap mb-4 sm:mb-0 sm:mr-12">As Seen On</h3>
                
                {/* Logo slider container */}
                <div className="w-full sm:flex-1 overflow-hidden relative">
                  {/* Static logo row - properly spaced */}
                  <div className="logo-container flex items-center" style={{gap: '50px'}}>
                    {[...companyLogos, ...companyLogos, ...companyLogos].map((logo, index) => (
                      <div key={`logo-${index}`} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center grayscale hover:grayscale-0 transition-all duration-300">
                          <img 
                            src={logo.src} 
                            alt={logo.name} 
                            className="h-16 w-auto"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 

// Add these styles to your globals.css
// @keyframes marquee {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-100%); }
// }
// 
// @keyframes marquee2 {
//   0% { transform: translateX(100%); }
//   100% { transform: translateX(0); }
// }
// 
// .animate-marquee {
//   animation: marquee 25s linear infinite;
// }
// 
// .animate-marquee2 {
//   animation: marquee2 25s linear infinite;
// }