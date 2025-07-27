"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Star, Smartphone } from "lucide-react"

export function Stats() {
  const { scrollY } = useScroll()
  
  // Create scroll-based transforms for the phone animation (continuing from Hero)
  const phoneRotation = useTransform(scrollY, [400, 1200], [0, -3])
  const phoneX = useTransform(scrollY, [400, 1200], [-100, 0])
  const phoneY = useTransform(scrollY, [400, 1200], [100, 0])
  const phoneScale = useTransform(scrollY, [400, 1200], [0.9, 1])
  const imageSlideY = useTransform(scrollY, [400, 1200], [0, 20]) // Continue revealing the image

  return (
    <section className="relative py-20 bg-gradient-to-br from-green-100 via-green-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Animated Phone Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            <motion.div 
              className="relative"
              style={{
                rotate: phoneRotation,
                x: phoneX,
                y: phoneY,
                scale: phoneScale,
              }}
            >
              <motion.img 
                src="https://framerusercontent.com/images/yNgJsjGbng2ntCbIpcIMwgAL0WQ.png"
                alt="ReFit Bulk Buy Mobile App"
                className="w-80 h-auto max-w-none"
                style={{ 
                  y: imageSlideY
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            {/* Main Stat */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight mb-4">
                Downloaded by more than
              </h2>
              <div className="text-5xl md:text-6xl lg:text-7xl font-black text-blue-500">
                5 000 000 people
              </div>
            </div>

            {/* App Store Ratings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* App Store */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-black">App Store</div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-2xl font-bold text-black">4.9</span>
                  </div>
                </div>
              </motion.div>

              {/* Google Play */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-4 h-4 bg-black rounded-sm"></div>
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold text-black">Google Play</div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-2xl font-bold text-black">4.8</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 