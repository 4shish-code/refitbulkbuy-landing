"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Zap, 
  Truck, 
  CreditCard, 
  Shield, 
  Smartphone, 
  Headphones,
  Package,
  Clock
} from "lucide-react"

const integrations = [
  {
    icon: Zap,
    name: "Razorpay",
    description: "Secure payment processing with multiple payment options including UPI, cards, and wallets.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Truck,
    name: "Delhivery",
    description: "Fast and reliable delivery across India with real-time tracking and COD support.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: CreditCard,
    name: "Paytm",
    description: "Seamless digital payments and wallet integration for quick and easy transactions.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Shield,
    name: "Bajaj Finserv",
    description: "Easy EMI options and financing solutions to make premium devices more affordable.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Smartphone,
    name: "Apple Care",
    description: "Extended warranty and support services for Apple devices with certified technicians.",
    color: "from-gray-500 to-gray-600"
  },
  {
    icon: Headphones,
    name: "Customer Support",
    description: "24/7 customer support with live chat, phone, and email assistance for all queries.",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: Package,
    name: "Quality Assurance",
    description: "Comprehensive 47-point quality checks ensuring every device meets our high standards.",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Clock,
    name: "Express Delivery",
    description: "Same-day and next-day delivery options in major cities for urgent requirements.",
    color: "from-indigo-500 to-indigo-600"
  }
]

export function Integrations() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Supercharged with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              integrations
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Seamlessly integrated with India's leading payment, delivery, and service providers to give you the best experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${integration.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <integration.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {integration.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {integration.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by leading brands</h3>
            <p className="text-gray-600">We partner with the best to bring you quality and reliability</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              "Apple", "Samsung", "OnePlus", "Xiaomi", "Realme", "Google"
            ].map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-gray-700">{brand}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to experience the future of refurbished tech?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join millions of satisfied customers and discover premium devices at unbeatable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download App
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Browse Products
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 