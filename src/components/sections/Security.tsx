"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, CheckCircle, Lock, Award, Truck, Clock } from "lucide-react"

export function Security() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Security & Trust
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Comprehensive security{" "}
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  of quality assurance
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                An extensive quality system has been implemented for the reliability of your devices. 
                Every device undergoes rigorous testing and comes with comprehensive warranty protection.
              </p>

              <div className="space-y-4">
                {[
                  "47+ point quality inspection process",
                  "6 months comprehensive warranty",
                  "7 days replacement guarantee",
                  "Certified refurbishment standards"
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Quality Assured",
                  description: "47+ point inspection",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: Award,
                  title: "Certified",
                  description: "Industry standards",
                  color: "from-green-500 to-green-600"
                },
                {
                  icon: Lock,
                  title: "Secure",
                  description: "Data protection",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  icon: Truck,
                  title: "Reliable",
                  description: "Fast delivery",
                  color: "from-orange-500 to-orange-600"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Floating Security Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Shield className="w-10 h-10 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Trusted by millions across India
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ReFit Global is a company specializing in refurbished technology, offering quality devices 
              with comprehensive warranty and support services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Quality Guarantee",
                description: "Every device passes our rigorous 47-point quality inspection before reaching you.",
                stats: "100% Tested"
              },
              {
                icon: Clock,
                title: "Fast Processing",
                description: "Quick order processing and delivery with real-time tracking across India.",
                stats: "24-48 Hours"
              },
              {
                icon: Award,
                title: "Industry Recognition",
                description: "Featured on Shark Tank India and recognized by leading industry publications.",
                stats: "Award Winning"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {item.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500 max-w-4xl mx-auto leading-relaxed">
            ReFit Global is a company specializing in refurbished technology, offering quality assurance 
            and warranty services. All devices are thoroughly tested and certified. The quality checks 
            and warranty terms are provided by ReFit Global's certified technicians and quality assurance team.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 