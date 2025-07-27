"use client"

import { useState } from "react"
import { Hero } from "@/components/sections/Hero"
import { Features } from "@/components/sections/Features"
import { Testimonials } from "@/components/sections/Testimonials"
import { DarkFeatures } from "@/components/sections/DarkFeatures"
import { Download } from "@/components/sections/Download"
import { Footer } from "@/components/sections/Footer"
import { AnimatePresence, motion } from "framer-motion"
import { X, Download as DownloadIcon } from "lucide-react"

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <main className="min-h-screen bg-white">
      {/* App Download Popup */}
      <AnimatePresence>
        {isPopupOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={closePopup}
            />
            
            {/* Popup Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="relative p-6 sm:p-8">
                {/* Close Button */}
                <button 
                  onClick={closePopup} 
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <X size={20} />
                </button>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Download Our App</h3>
                  <p className="text-gray-600 mb-6">Download directly from app stores</p>
                  
                  {/* App Image - Temporarily hidden
                  <div className="mx-auto w-48 h-48 bg-gradient-to-br from-[#f5f7fa] via-[#fbeffb] to-[#e0ecfc] rounded-lg flex items-center justify-center mb-6 p-2">
                    <img 
                      src="/images/app.png" 
                      alt="ReFit App" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  */}
                  
                  {/* App Store Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.refitglobal.bulkbuy" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <motion.img
                        src="https://zoyothemes.com/tailwind/evea/assets/images/google.png"
                        alt="Get it on Google Play"
                        className="w-full h-auto min-w-[140px] max-w-[180px] mx-auto object-contain rounded-lg shadow-md"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      <Hero openPopup={openPopup} />
      <Features openPopup={openPopup} />
      <Testimonials />
      <DarkFeatures />
   
      <Footer />
    </main>
  )
}
