"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Package, RefreshCw, Clock, Shield } from "lucide-react"

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-4"
          >
            <Link 
              href="/"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ReFit Bulk Buy</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          {/* Title */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <RefreshCw className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund Policy</h1>
            <p className="text-xl text-gray-600">
              Our commitment to fair and transparent refund practices
            </p>
          </div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-blue-50 rounded-xl p-4 mb-8 flex items-center gap-3"
          >
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-medium">Last updated: December 2024</span>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                  Refund Eligibility
                </h2>
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    At ReFit Bulk Buy, we understand that bulk purchases are significant investments. 
                    We offer refunds under the following conditions:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Devices received are significantly different from the description</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Devices fail our 47+ quality checks upon delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Order cancellation within 24 hours of placement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Devices are damaged during shipping (with proper documentation)</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Timeline</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">Standard Refunds</h3>
                    <p className="text-green-700">
                      Processed within 7-10 business days after approval. 
                      Refunds are credited to the original payment method.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">Bulk Order Refunds</h3>
                    <p className="text-blue-700">
                      Large bulk orders may take 10-15 business days for processing 
                      due to additional verification requirements.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Process</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Initiate Request</h3>
                      <p className="text-gray-700">Contact our support team through the mobile app or email within 7 days of delivery.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Documentation</h3>
                      <p className="text-gray-700">Provide order details, photos of devices, and reason for refund request.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Review & Approval</h3>
                      <p className="text-gray-700">Our team reviews your request within 2-3 business days and provides approval status.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Return & Refund</h3>
                      <p className="text-gray-700">Return devices using our prepaid shipping label and receive refund upon verification.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Refundable Items</h2>
                <div className="bg-red-50 rounded-xl p-6">
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Devices damaged due to misuse or negligence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Orders placed more than 30 days ago</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Customized or specially ordered devices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Devices with removed or tampered quality assurance seals</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <div className="bg-blue-50 rounded-xl p-6">
                  <p className="text-blue-800 mb-4">
                    For refund requests or questions about our refund policy, please contact us:
                  </p>
                  <div className="space-y-2 text-blue-700">
                    <p><strong>Email:</strong> refunds@refitbulkbuy.com</p>
                    <p><strong>Phone:</strong> +91 9355177599</p>
                    <p><strong>Support Hours:</strong> Monday to Saturday, 9:00 AM to 7:00 PM IST</p>
                    <p><strong>Mobile App:</strong> Use the "Help & Support" section for instant assistance</p>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 