"use client"

import { motion, useScroll, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Package, Download, X, Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [isDark, setIsDark] = useState(false)
  const { scrollY } = useScroll()
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  useEffect(() => {
    const updateTheme = () => {
      // For policy pages, keep it light for better readability
      setIsDark(false)
    }

    const unsubscribe = scrollY.on("change", updateTheme)
    return () => unsubscribe()
  }, [scrollY])

  const openPopup = () => {
    setIsPopupOpen(true);
    // Prevent body scrolling when popup is open
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  };

  const showSubmissionConfirmation = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
  };

  return (
    <>
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

      {/* Sticky Navigation - Same as Homepage */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 sm:py-6 transition-all duration-500">
        {/* Logo */}
        <Link href="/">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            paddingBlock: 'calc(var(--spacing) * 4) !important',
            paddingInline: 'calc(var(--spacing) * 6)',
            borderRadius: '10px !important'
          }}
          className={`flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 rounded-full transition-all duration-500 ${
            isDark ? 'bg-black' : 'bg-white'
          }`}
        >
       <img src="/logo.jpg" alt="ReFit Logo" className="h-10 w-auto object-contain" />
        </motion.div>
        </Link>
        
        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 sm:gap-4"
        >
          <Link href="/">
            <Button 
              variant="outline" 
              className={`hidden md:flex transition-all duration-500 ${
                isDark 
                  ? 'border-white text-white hover:bg-white/10 bg-white/20' 
                  : 'border-black text-black hover:bg-black/10 bg-white/20'
              } backdrop-blur-sm shadow-md`}
            >
              ← Back to Home
            </Button>
          </Link>
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

      <div className="min-h-screen bg-white pt-16 sm:pt-20">

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Simple Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl text-gray-600">We're here to help with any questions or concerns</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">+919355177599</p>
                      <p className="text-gray-500 text-sm mt-1">Customer Support</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">support@refitglobal.com</p>
                      <p className="text-gray-500 text-sm mt-1">Customer Support</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Office Address</h3>
                      <p className="text-gray-600">
                        1st, 2nd & 3rd Floor, D-247/25, Chhajarsi Colony, Sector 63,<br />
                        Noida, Uttar Pradesh 201301
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday to Saturday</p>
                      <p className="text-gray-600">10:00 AM - 06:30 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Grievance Officer</h2>
                <p className="text-gray-600 mb-4">
                  In accordance with the Information Technology Act 2000 and rules made thereunder, the name and contact details of the Grievance Officer are as follows:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h3 className="font-medium text-gray-900 mb-2">Refit Global Private Limited</h3>
                  <p className="text-gray-600">
                    1st, 2nd & 3rd Floor, D-247/25, Chhajarsi Colony, Sector 63,<br />
                    Noida, Uttar Pradesh 201301<br />
                    Email: support@refitglobal.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="h-fit">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="franchise">Need ReFit Xpress Outlet / Franchise</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2"
                  onClick={showSubmissionConfirmation}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </div>

              {/* Confirmation Message */}
              <AnimatePresence>
                {showConfirmation && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 bg-green-50 border-l-4 border-green-400 p-4"
                  >
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-green-700">
                          Your message has been sent. We'll get back to you soon!
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">What is ReFit Bulk Buy?</h3>
                <p className="text-gray-600">
                  ReFit Bulk Buy is a platform that enables businesses and organizations to purchase refurbished devices in bulk at wholesale prices with guaranteed quality.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">How do I place a bulk order?</h3>
                <p className="text-gray-600">
                  You can place bulk orders through our mobile app or by contacting our sales team directly via email or phone. For large orders, we recommend scheduling a consultation with our team.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">What quality checks do you perform?</h3>
                <p className="text-gray-600">
                  Every device goes through our rigorous 47+ point quality inspection process to ensure optimal performance and reliability before being made available for sale.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Do you offer warranty on refurbished devices?</h3>
                <p className="text-gray-600">
                  Yes, all our refurbished devices come with a 6-month warranty. Extended warranty options are also available for purchase.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept various payment methods including credit/debit cards, net banking, UPI, Partial Payment, NEFT or bank Transfer and EMI options for eligible customers. All payments are processed securely.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">How can I track my order?</h3>
                <p className="text-gray-600">
                  Once your order is shipped, you will receive tracking information via email and SMS. You can also track your order through our mobile app or by contacting customer support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold">ReFit Bulk Buy</span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <Link href="/" className="hover:text-white transition-colors text-lg">
                Home
              </Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors text-lg">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-white transition-colors text-lg">
                Terms & Conditions
              </Link>
              <Link href="/delete-account" className="hover:text-white transition-colors text-lg">
                Delete Account
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors text-lg">
                Contact Us
              </Link>
              <Link href="/warranty-policy" className="hover:text-white transition-colors text-lg">
                Warranty Policy
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500">
              <p>&copy; 2025 ReFit Bulk Buy. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
} 