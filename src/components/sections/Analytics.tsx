"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, TrendingUp, Activity, Smartphone } from "lucide-react"

export function Analytics() {
  return (
    <section className="py-24 bg-white">
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
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4" />
                Analytics
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Keep track of all your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  device quality and performance.
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Monitor every aspect of your refurbished device with our comprehensive analytics dashboard. 
                From battery health to performance metrics, stay informed about your device's condition.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Activity,
                  title: "Performance Tracking",
                  description: "Real-time monitoring of device performance and optimization suggestions."
                },
                {
                  icon: TrendingUp,
                  title: "Quality Metrics",
                  description: "Detailed quality scores and improvement recommendations for your device."
                },
                {
                  icon: Smartphone,
                  title: "Device Health",
                  description: "Complete health reports including battery, storage, and component status."
                },
                {
                  icon: BarChart3,
                  title: "Usage Analytics",
                  description: "Insights into your usage patterns and device optimization tips."
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
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
            <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Device Analytics Dashboard</h3>
                  <p className="text-gray-600 text-sm">Real-time insights into your device performance</p>
                </div>

                {/* Mock Analytics */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Battery Health</span>
                      <span className="text-sm font-bold text-green-600">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "94%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Performance Score</span>
                      <span className="text-sm font-bold text-blue-600">89%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "89%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Storage Optimization</span>
                      <span className="text-sm font-bold text-purple-600">76%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "76%" }}
                        transition={{ duration: 1, delay: 0.9 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-gray-900">47</div>
                      <div className="text-xs text-gray-600">Quality Checks Passed</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-gray-900">6M</div>
                      <div className="text-xs text-gray-600">Warranty Period</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <BarChart3 className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 