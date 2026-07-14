"use client"

import { motion, useScroll, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, XCircle, AlertTriangle, FileText, Download, X, Package, Clock, ShieldAlert, BadgeInfo, CheckCircle, Truck, Wrench } from "lucide-react"
import Link from "next/link"

export default function WarrantyPolicyPage() {
  const [isDark, setIsDark] = useState(false)
  const { scrollY } = useScroll()
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(false)
    }
    const unsubscribe = scrollY.on("change", updateTheme)
    return () => unsubscribe()
  }, [scrollY])

  const openPopup = () => {
    setIsPopupOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closePopup = () => {
    setIsPopupOpen(false)
    document.body.style.overflow = 'auto'
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      {/* App Download Popup */}
      <AnimatePresence>
        {isPopupOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={closePopup}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="relative p-6 sm:p-8">
                <button 
                  onClick={closePopup} 
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Download Our App</h3>
                  <p className="text-gray-600 mb-6">Download directly from app stores</p>
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

      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 sm:py-6 transition-all duration-500">
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
            className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 rounded-full transition-all duration-500 bg-white shadow-sm"
          >
            <img src="/logo.jpg" alt="ReFit Logo" className="h-10 w-auto object-contain" />
          </motion.div>
        </Link>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 sm:gap-4"
        >
          <Link href="/">
            <Button 
              variant="outline" 
              className="hidden md:flex transition-all duration-500 border-black text-black hover:bg-black/10 bg-white/20 backdrop-blur-sm shadow-md"
            >
              ← Back to Home
            </Button>
          </Link>
          <Button 
            className="px-3 sm:px-6 py-2 rounded-lg font-medium flex items-center gap-2 text-sm sm:text-base transition-all duration-500 shadow-md bg-blue-500 text-white hover:bg-blue-600"
            onClick={openPopup}
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download App</span>
            <span className="sm:hidden">Download</span>
          </Button>
        </motion.div>
      </nav>

      <div className="min-h-screen bg-white pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Warranty & Bulk/B2B Purchase Policy</h1>
            <p className="text-lg sm:text-xl text-blue-600 font-medium mb-2">Applicable to all Bulk / B2B Retailer Purchases</p>
            <p className="text-sm text-gray-500">Effective from 1st May 2025 | Confidential</p>
          </motion.div>

          <div className="space-y-8">
            
            {/* 1. Purpose */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
              <Card className="border-l-4 border-l-blue-500 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">1. Purpose</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This document sets out the warranty coverage, service/replacement claim process, turnaround times (TAT), and Return-to-Origin (RTO) terms applicable to all Bulk and B2B retailer purchases from ReFit Global. All bulk buyers/retailers are expected to acknowledge and adhere to this policy.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* 2. Warranty Coverage */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"><Shield className="text-green-500" /> 2. Warranty Coverage</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Every device is covered against functional defects as assessed and disclosed at the time of grading.",
                  "Claim processing for battery health, battery drain, or battery bulging/swelling is approved only within 7 days of delivery.",
                  "If a repeat issue occurs after a repair has been completed, the customer/retailer becomes eligible for replacement, credit note (CN), or refund.",
                  "If the ReFit tamper-evident seal is found damaged or tampered with, no claim will be processed or approved under any circumstance.",
                  "Claims beyond the disclosed grading definition will only be accepted as RTO. On-actual-condition disputes matching the stated grading will not be entertained as RTO or exception."
                ].map((text, idx) => (
                  <div key={idx} className="bg-gray-50 p-5 rounded-xl border border-gray-100 flex gap-4 items-start hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-snug">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 3. What Is Not Covered */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5, delay: 0.2 }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 mt-12"><XCircle className="text-red-500" /> 3. What Is Not Covered Under Warranty</h2>
              <div className="bg-red-50/50 p-6 md:p-8 rounded-2xl border border-red-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    "Physical or liquid damage — cracks, broken parts, or water damage.",
                    "Heating while charging — not treated as a defect.",
                    "Software issues arising from updates, app installation, or software errors.",
                    "Issues arising after an iOS update.",
                    "Display damage from mishandling — lines, spots, or dots caused by drops.",
                    "Battery & accessories — battery health, swelling, backup issues, and use of non-approved chargers.",
                    "Normal wear and tear — scratches, dents, faded colour, and other minor cosmetic defects.",
                    "Unauthorized repairs — warranty is void if the device is opened/repaired by an unofficial service centre.",
                    "Rooting or jailbreaking of the device software.",
                    "Insect, rodent, or pet damage.",
                    "Acts of nature — fire, flood, earthquake, lightning, or power surge.",
                    "Lost data — ReFit Global is not liable for lost files, apps, or data during repair; retailers/customers must back up data before submission."
                  ].map((text, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 4. Claim & Service Process */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5, delay: 0.3 }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3 mt-12"><Wrench className="text-blue-500" /> 4. Claim & Service Process</h2>
              <div className="relative border-l-2 border-blue-100 ml-4 md:ml-6 space-y-8 pb-4">
                
                {/* Steps Array mapping */}
                {[
                  { step: "Step 1", title: "Registering the Claim", icon: <BadgeInfo />, desc: "Raise the request by calling 9355177599 or emailing service@refitglobal.com. A support executive will log a ticket against the complaint." },
                  { step: "Step 2", title: "Ticketing", icon: <FileText />, desc: "D2C customers: ticket number is issued against the D2C order ID. B2B retailers: a unique ReFit ticket number is issued by the support team." },
                  { step: "Step 3", title: "Documentation (Mandatory)", icon: <FileText />, desc: "Purchase invoice. Issue video of the product." },
                  { step: "Step 4", title: "Claim Approval", icon: <CheckCircle />, desc: "The issue video is shared with the TRC (Technical Repair Centre) to obtain approval for reverse pickup. TRC confirms pickup within 24 hours of claim intimation." },
                  { step: "Step 5", title: "Pickup Initiation", icon: <Truck />, desc: "Reverse pickup is initiated within 6 hours of TRC approval, with confirmation shared with TRC on the same email thread." },
                  { step: "Step 6", title: "Pickup Process & Time", icon: <Clock />, desc: "The reverse pickup ID is shared with the customer/retailer at the time of pickup creation. Standard reverse pickup TAT (as per courier partner): Tier 1 city: 2-3 working days. Tier 2 city: 3-4 working days. Tier 3 city: 4-5 working days." },
                  { step: "Step 7", title: "Repairing Information", icon: <Wrench />, desc: "TRC confirms device delivery on the same day it is received and diagnoses the issue within 24 hours of delivery." },
                  { step: "Step 8", title: "Repair TAT", icon: <Clock />, desc: "Device to be repaired within 3 days of delivery to TRC. PNA (Physically Not Available/parts) cases: support team informed within 48 hours of device delivery; replacement offered. NQA cases: replacement initiated within 48 hours of device delivery, subject to model availability. If the same model is unavailable, an alternative model is offered. If the customer declines the alternative, a credit note/refund is processed." },
                  { step: "Step 9", title: "Repair Closure", icon: <CheckCircle />, desc: "Repair is completed within 3 days of device delivery; support is informed to generate the forward delivery pickup on day 3." },
                  { step: "Step 10", title: "Forward Pickup Initiation", icon: <Truck />, desc: "Forward pickup is initiated within 6 hours of repair confirmation, with the tag shared with TRC." },
                  { step: "Step 11", title: "Repaired/Replacement Delivery", icon: <Package />, desc: "The repaired or replacement device is delivered to the customer/retailer as per standard delivery TAT." }
                ].map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-12">
                    <div className="absolute -left-[17px] top-1 bg-white p-1 rounded-full border-2 border-blue-500 text-blue-500 shadow-sm">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.step} — {item.title}</h3>
                    <p className="text-gray-600 leading-relaxed bg-white/50 p-4 rounded-xl border border-gray-100 shadow-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 5. Overall TAT Summary */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5, delay: 0.4 }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 mt-12"><Clock className="text-indigo-500" /> 5. Overall TAT Summary</h2>
              <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-indigo-600 text-white">
                      <th className="p-4 font-semibold w-2/3 border-b border-indigo-700">Stage</th>
                      <th className="p-4 font-semibold w-1/3 border-b border-indigo-700 border-l border-indigo-500/50">Turnaround Time</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr className="hover:bg-indigo-50/50 transition-colors">
                      <td className="p-4 text-gray-700">Claim verification TAT</td>
                      <td className="p-4 text-gray-600 font-medium border-l border-gray-100">1 day</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-indigo-50/50 transition-colors">
                      <td className="p-4 text-gray-700">Reverse pickup TAT</td>
                      <td className="p-4 text-gray-600 font-medium border-l border-gray-100">2–3 days</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/50 transition-colors">
                      <td className="p-4 text-gray-700">Reverse delivery TAT at ReFit</td>
                      <td className="p-4 text-gray-600 font-medium border-l border-gray-100">2–3 days</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-indigo-50/50 transition-colors">
                      <td className="p-4 text-gray-700">TRC repair TAT</td>
                      <td className="p-4 text-gray-600 font-medium border-l border-gray-100">3 days</td>
                    </tr>
                    <tr className="hover:bg-indigo-50/50 transition-colors">
                      <td className="p-4 text-gray-700">Delivery TAT (repaired/replacement)</td>
                      <td className="p-4 text-gray-600 font-medium border-l border-gray-100">2–3 days</td>
                    </tr>
                    <tr className="bg-indigo-50/80 font-bold text-gray-900">
                      <td className="p-4">Overall repair ticket closure</td>
                      <td className="p-4 border-l border-indigo-100">7–10 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* 6. B2B RTO Penalty Policy */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5, delay: 0.5 }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 mt-12"><AlertTriangle className="text-orange-500" /> 6. B2B RTO (Return to Origin) Penalty Policy</h2>
              <Card className="border border-orange-200 bg-orange-50/30">
                <CardContent className="p-8">
                  <p className="text-orange-800 font-medium mb-4">Effective 1st May 2025</p>
                  <p className="text-gray-700 mb-6">
                    To minimize operational losses and improve order fulfilment, a penalty applies to avoidable B2B RTO cases arising from bulk/retailer orders.
                  </p>
                  <h3 className="font-bold text-gray-900 mb-2">Applicable Cases</h3>
                  <p className="text-gray-700">
                    Any scenario where a shipment is refused by the retailer, including retailer refusal, shipment hold requests, COD amount not being ready, or delivery rescheduling.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold">ReFit Bulk Buy</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <Link href="/" className="hover:text-white transition-colors text-lg">Home</Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors text-lg">Privacy Policy</Link>
              <Link href="/terms-conditions" className="hover:text-white transition-colors text-lg">Terms & Conditions</Link>
              <Link href="/delete-account" className="hover:text-white transition-colors text-lg">Delete Account</Link>
              <Link href="/contact" className="hover:text-white transition-colors text-lg">Contact Us</Link>
              <Link href="/warranty-policy" className="hover:text-white transition-colors text-lg">Warranty Policy</Link>
            </div>
            <div className="text-center text-gray-500">
              <p>&copy; 2025 ReFit Bulk Buy. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
