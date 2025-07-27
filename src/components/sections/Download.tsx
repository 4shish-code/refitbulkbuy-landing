"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download as DownloadIcon, Smartphone, QrCode, Star } from "lucide-react"

interface DownloadProps {
  openPopup: () => void;
}

export function Download({ openPopup }: DownloadProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              See what you'll discover
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Download ReFit today on iOS and Android and discover premium refurbished devices 
              at unbeatable prices with guaranteed quality.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  title: "Exclusive bulk buying discounts",
                  description: "Get special wholesale pricing when you purchase multiple devices"
                },
                {
                  title: "Buy now, pay later options",
                  description: "Make purchases now and pay in easy installments with our EMI partners"
                },
                {
                  title: "Quality certified refurbished devices",
                  description: "Every device passes through our rigorous 47+ point quality inspection process"
                },
                {
                  title: "PAN India delivery for bulk orders",
                  description: "Fast and reliable shipping to all locations across India for your bulk purchases"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-blue-100 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
                  onClick={openPopup}
                >
                  <DownloadIcon className="w-5 h-5 mr-2" />
                  Download for iOS
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg font-semibold"
                  onClick={openPopup}
                >
                  <DownloadIcon className="w-5 h-5 mr-2" />
                  Download for Android
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* QR Code and App Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Download Our App</h3>
                  <p className="text-blue-100">Available on iOS and Android</p>
                </div>

                {/* App Image - Temporarily hidden
                <div className="w-48 h-48 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6"
                     onClick={openPopup} 
                     style={{cursor: 'pointer'}}
                >
                  <img 
                    src="/images/app.png"
                    alt="ReFit App"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                */}

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-white font-semibold">4.9</div>
                    <div className="text-blue-100 text-sm">App Store</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-white font-semibold">4.8</div>
                    <div className="text-blue-100 text-sm">Google Play</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">5M+</div>
                  <div className="text-blue-100 text-sm">Downloads</div>
                </div>
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute -top-4 -left-4 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
            >
              <Smartphone className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
            >
              <Star className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "5M+", label: "App Downloads" },
              { number: "4.9", label: "Average Rating" },
              { number: "47+", label: "Quality Checks" },
              { number: "6M", label: "Warranty Period" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 