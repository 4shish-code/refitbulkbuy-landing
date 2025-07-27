"use client"

import { motion, useScroll, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, Package, Download, X, Trash2, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function DeleteAccountPage() {
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

  const showDeletionConfirmation = () => {
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Simple Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Account Deletion</h1>
          <p className="text-lg sm:text-xl text-gray-600">How to delete your ReFit account</p>
        </motion.div>

        <div className="space-y-8">
          {/* Account Deletion Info */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Trash2 className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Account Deletion Policy</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                At ReFit Global, we respect your right to control your data. You can request to delete your account and associated personal information at any time. Please note that certain information may be retained for legal, business, or technical reasons even after account deletion.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When you delete your account, the following will occur:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Your profile information will be permanently removed from our active systems</li>
                <li>Your transaction history will be anonymized in our records</li>
                <li>Your login credentials will be deactivated</li>
                <li>Your saved preferences and settings will be deleted</li>
                <li>You will no longer receive marketing communications from us</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      Please note that we may retain certain information as required by law or for legitimate business purposes. We may also retain cached or archived copies of information about you for a certain period of time.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How to Delete */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Delete Your Account</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Using the ReFit Mobile App</h3>
                    <p className="text-gray-600">
                      Open the ReFit app, go to your profile, tap on "Settings" and then "Account Settings." Scroll down to find "Delete Account" option and follow the on-screen instructions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Via Email Request</h3>
                    <p className="text-gray-600">
                      Send an email to <span className="text-blue-600">support@refitglobal.com</span> with the subject line "Account Deletion Request" from your registered email address. Include your full name and registered phone number for verification.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Customer Support</h3>
                    <p className="text-gray-600">
                      Call our customer support at <span className="text-blue-600">+919355177599</span> during business hours (Monday to Saturday, 10:00 AM - 06:30 PM) and request account deletion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <p className="text-gray-600">
                  After submitting your request, our team will process it within 7-10 business days. You will receive a confirmation email once your account has been successfully deleted.
                </p>
              </div>
            </CardContent>
          </Card>

          

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