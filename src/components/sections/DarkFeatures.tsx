"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function DarkFeatures() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Enhanced transform effects for smoother transition
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.5, 1, 1])
  const waveTransform = useTransform(scrollYProgress, [0, 1], ['translateY(10%)', 'translateY(0%)'])
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 0.95, 1])

  return (
    <>
      {/* Enhanced transition space with animated waves */}
      <motion.section 
        ref={containerRef}
        className="relative"
        style={{
          height: '60vh', // Increased height for more gradual transition
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* First wave layer */}
        <motion.div 
          className="absolute inset-0 w-full h-full" 
          style={{
            background: 'white',
            maskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1200 300\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M 0,300 C 0,300 150,200 400,250 C 650,300 950,200 1200,250 L 1200,300 L 0,300 Z\' fill=\'%23000\'/%3E%3C/svg%3E")',
            WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1200 300\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M 0,300 C 0,300 150,200 400,250 C 650,300 950,200 1200,250 L 1200,300 L 0,300 Z\' fill=\'%23000\'/%3E%3C/svg%3E")',
            maskSize: '100% 100%',
            WebkitMaskSize: '100% 100%',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'bottom',
            WebkitMaskPosition: 'bottom',
            transform: waveTransform
          }}
        >
          {/* Creates white space with organic wavy bottom */}
        </motion.div>

        {/* Second wave layer with slight offset for depth */}
        <motion.div 
          className="absolute inset-0 w-full h-full" 
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.2))',
            maskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1200 300\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M 0,300 C 0,300 300,220 600,270 C 900,320 1200,250 1200,250 L 1200,300 L 0,300 Z\' fill=\'%23000\'/%3E%3C/svg%3E")',
            WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1200 300\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M 0,300 C 0,300 300,220 600,270 C 900,320 1200,250 1200,250 L 1200,300 L 0,300 Z\' fill=\'%23000\'/%3E%3C/svg%3E")',
            maskSize: '100% 100%',
            WebkitMaskSize: '100% 100%',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'bottom',
            WebkitMaskPosition: 'bottom',
            transform: waveTransform,
            opacity: 0.7
          }}
        />

        {/* Main gradient layer - more subtle now with waves taking precedence */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-white via-white to-black"
          style={{ 
            opacity: gradientOpacity,
            transform: 'translateY(30%)'
        }}
        />

        {/* Final darkening overlay that responds to scroll */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"
          style={{ opacity: backgroundOpacity }}
        />
      </motion.section>

      {/* Main Dark Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Bulk <span className="text-gray-400">buying</span>
                  <br />
                  discounts
                  <br />
                  <span className="text-gray-400">for</span> retailers
                </h2>
              </div>
            </motion.div>

            {/* Right Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Tilted Image */}
                <img 
                  src="/images/refit-dark-feature.png" 
                  alt="ReFit Bulk Buy App" 
                  className="w-auto h-auto max-w-full shadow-2xl rounded-2xl"
                  style={{
                    maxHeight: "600px",
                    filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.15))"
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Buy Now Pay Later Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Quality certified devices. <span className="text-gray-400">Every refurbished device passes through our rigorous 47+ point quality inspection process ensuring premium quality at affordable prices.</span>
                </h3>
                
               


              </div>
            </motion.div>

            {/* Wise Control Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Blue Card */}
              <div className="bg-blue-500 rounded-3xl p-8 text-white">
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  Designed for
                  <br />
                  bulk buyers and
                  <br />
                  retailers.
                </h3>
              </div>

              {/* Dark Card */}
              <div className="bg-gray-900 rounded-3xl p-8">
                <h4 className="text-xl font-bold text-white mb-4">
                  PAN India Delivery
                </h4>
                <p className="text-gray-400">
                  Fast shipping across all of India
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Background Decorations */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </section>
    </>
  )
} 