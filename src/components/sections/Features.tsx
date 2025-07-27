"use client"

import { motion } from "framer-motion"
import { BarChart3, Zap, Wallet, Settings } from "lucide-react"
import Image from "next/image"

interface FeaturesProps {
  openPopup: () => void;
}

export function Features({ openPopup }: FeaturesProps) {
  const features = [
    {
      id: 1,
      title: "6 Months Warranty",
      subtitle: "Every device comes with 6 months warranty coverage for your peace of mind.",
      icon: BarChart3,
      placeholder: "analytics-chart",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      imageSrc: "/images/features/6-month-warranty.jpg"
    },
    {
      id: 2,
      title: "PAN India Delivery",
      subtitle: "Fast and reliable shipping to all locations across India for all your bulk orders.",
      icon: Zap,
      placeholder: "quick-actions-cards",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      imageSrc: "/images/features/all-india-delivery.jpg"
    },
    {
      id: 3,
      title: "47+ Quality Check points",
      subtitle: "Every device passes through our rigorous 47+ point quality inspection process.",
      icon: Wallet,
      placeholder: "finance-bubbles",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      imageSrc: "/images/features/47-points-check.jpg"
    },
    {
      id: 4,
      title: "7 Days replacement",
      subtitle: "Not satisfied with your purchase? Get hassle-free replacement within 7 days.",
      icon: Settings,
      placeholder: "subscription-apps",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      imageSrc: "/images/features/replace.jpg"
    }
  ]

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight mb-4 sm:mb-6">
            Everything you need for
            <br />
            <span className="text-blue-500">bulk buying success</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Powerful features designed specifically for retailers and bulk buyers to streamline their sourcing process
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="group transform-gpu"
            >
              <div 
                className={`${feature.bgColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-[350px] sm:h-[400px] relative overflow-hidden will-change-transform transition-all duration-200 hover:shadow-2xl hover:-translate-y-2`}
              >
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-4 sm:mb-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-200 ease-out group-hover:scale-105`}>
                      <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.iconColor}`} />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {feature.subtitle}
                    </p>
                  </div>

                  {/* Placeholder Content Area with actual image */}
                  <div className="flex-1 flex items-center justify-center">
                    <div
                      className="w-full h-32 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:scale-[1.03] relative"
                    >
                      {/* Using a fallback div in case images aren't available yet */}
                      {feature.imageSrc ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={feature.imageSrc}
                            alt={feature.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            style={{ 
                              objectPosition: 'center',
                              backgroundColor: 'rgba(255,255,255,0.5)'
                            }}
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t from-${feature.bgColor.split('-')[1]}-100/30 to-transparent`}></div>
                        </div>
                      ) : (
                        <div className="w-full h-full bg-white/50 rounded-xl sm:rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                          <div className="text-center">
                            <div className={`w-12 h-12 sm:w-16 sm:h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3`}>
                              <feature.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${feature.iconColor}`} />
                            </div>
                            <p className="text-xs sm:text-sm text-gray-500 font-medium">
                              {feature.placeholder}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Background Decoration - Simplified for better performance */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16 transition-transform duration-500 ease-out group-hover:scale-125"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 transition-transform duration-500 ease-out group-hover:scale-110"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 px-4">
            Ready to transform your bulk buying experience?
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            onClick={openPopup}
          >
            Download App
          </button>
        </motion.div>
      </div>
    </section>
  )
} 