"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Scale, AlertTriangle, CheckCircle, Package, Download, X } from "lucide-react"
import Link from "next/link"

export default function TermsConditionsPage() {
  const [isDark, setIsDark] = useState(false)
  const { scrollY } = useScroll()
  const [isPopupOpen, setIsPopupOpen] = useState(false)

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
                  
                  {/* App Image - Temporarily hidden
                  <div className="mx-auto w-48 h-48 bg-gradient-to-br from-[#f5f7fa] via-[#fbeffb] to-[#e0ecfc] rounded-lg flex items-center justify-center mb-6 p-2">
                    <img 
                      src="/images/app.png" 
                      alt="ReFit App" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  */}
                  
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
            <span className="hidden sm:inline">Download ReFit Bulk Buy</span>
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-lg sm:text-xl text-gray-600">Last updated: January 2025</p>
        </motion.div>

        <div className="space-y-8">
          {/* Terms and Conditions Intro */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Terms and Conditions</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                You agree to these Terms & Conditions (specified below) by using it. Please read them carefully. ReFit Global Pvt Ltd. formerly known as Sky Point Trading Pvt Ltd, doing business as "ReFit Global"
              </p>
              <p className="text-gray-600 leading-relaxed">
                The owner and operator of the website www.refitbulkbuy.com is "ReFit Global." ReFit Global (collectively, "ReFit Global") offers customers and organisations a marketplace and platform to sell or repair their used, old, and other items, as well as conduct a variety of transactions and activities, with third-party businesses and other entities and persons (collectively, "Third Parties"). This includes the mobile touch versions, apps on the Play store and Apple App store, and/or any website(s) we currently have or develop in the future that reference these Terms & Conditions. The ReFit Global marketplace, platform, and associated functionality are generally referred to as the services (the "Services"), whether they are offered on the Site or through other channels.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You must not use the Site or Services if you disagree with any aspect of these Terms & Conditions. These Terms & Conditions, as they may be updated from time to time by us with or without prior notice to you, will be considered accepted by you if you continue to use the Site or Services. The ReFit Global Terms & Conditions may be updated at any time, so please check this page frequently.
              </p>
            </CardContent>
          </Card>

          {/* 1. ReFit Global is an online marketplace. */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. ReFit Global is an online marketplace.</h2>
              <p className="text-gray-600 leading-relaxed">
                ReFit Global is a platform that enables users to sell/repair certain items while adhering to ReFit's regulations. ReFit Global has no control over any aspect of your transactions with third parties for any reason, and they are solely responsible to you for all aspects of those transactions. ReFit Global may not be directly involved in the transaction between user(s) and third party professional(s).
              </p>
            </CardContent>
          </Card>

          {/* 2. Permitted Use and Legal Compliance. */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Permitted Use and Legal Compliance.</h2>
              <p className="text-gray-600 leading-relaxed">
                You are only permitted to access, view, and use the software and content of the Site (collectively, the "ReFit Global Pvt Ltd Property") to the degree required for you to utilise the Services, according to ReFit Global. Any copyright, trademark, or other property notices that have been posted on the ReFit Property may not be removed. You are not permitted to get information or other content on a regular basis from the ReFit Global Property. Without the prior written consent of ReFit Global Pvt Ltd, it is strictly forbidden to modify, reproduce, redistribute, republicate, upload, post, transmit, distribute, or otherwise use in any way any ReFit Global Property, or any portion of the ReFit Global Property, unless expressly permitted by these Terms & Conditions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You acknowledge that your use of the Site and Services, as well as the ReFit Global Property, is subject to all applicable laws, regulations, and ordinances and that you will not engage in any conduct while using the Site and Services that would impede or restrict the use or enjoyment of the Services by others.
              </p>
            </CardContent>
          </Card>

          {/* 3. Trademarks and copyright. */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Trademarks and copyright.</h2>
              <p className="text-gray-600 leading-relaxed">
                Except where otherwise noted, the Site's entire contents, including all text, software, images, videos, music, and sounds, as well as the ReFit Global, and ReFit logos and other trademarks and service marks, are the property of ReFit Global Pvt Ltd and/or its affiliates or licensors, including the Third Parties, and are protected by international and Indian copyright and trademark laws. Any infringement of a copyright, trademark, or other intellectual property right that results from breaking these limits might result in fines that are both civil and/or criminal.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Other trademarks on the website that are not held by ReFit Global may be covered by licences from the individual trademark owners, in which case ReFit Global will only use them for their own profit unless otherwise noted, or they may be the property of their respective owners. Without the express consent of ReFit Global Pvt Ltd, you are not permitted to use any trademark name, logos, trademarks or brands, or trademarks or brands of third parties, on the Site.
              </p>
            </CardContent>
          </Card>

          {/* 4. Refit Global Services as well as Third-Party Services and Websites */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Refit Global Services as well as Third-Party Services and Websites</h2>
              <p className="text-gray-600 leading-relaxed">
                The information and materials offered on the Site and through the Services are for general reference purposes only and may not cover all of the terms, restrictions, and exceptions that apply to ReFit's Services. Through the ReFit Global Site and Services, ReFit Global offers information from Third Parties, such as pricing provided for your products, item descriptions, some Third Party terms of service, and other information ("Third Party Information''). ReFit Global has no control over, and is not responsible for, any Third Party Information.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You undertake your real sales and other transactions with Third Parties, not with ReFit Global, unless otherwise expressly and clearly specified. ReFit Global has no control over any part of your sales or transactions with Third Parties, and they are entirely liable to you for all aspects of your sales and transactions with them.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The ReFit Global Site may from time to time contain links to websites operated by Third Parties and other organisations (the "Additional Sites"), or such Additional Sites may have connections to the ReFit Global Site. These links are provided as a courtesy and for informative reasons only, and do not constitute referrals or endorsements of the Additional Sites by ReFit Global. The Additional Sites are managed by their individual organisations, which are entirely responsible for the content of their own websites. ReFit Global makes no assurance or representation for the content, accuracy, opinions stated, warranties, products or services, intellectual property compliance, or connections on such Additional Sites. All Additional Sites' privacy policies and Terms & Conditions should be reviewed.
              </p>
            </CardContent>
          </Card>

          {/* 5. Passwords and Privacy */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Passwords and Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                ReFit Global respects and safeguards your personal information. Please read the ReFit Global privacy statement carefully as it contains essential information about your use of the Site and Services. Some areas of the Site are password-protected, requiring a user identification code ("User ID") and password to access. Unauthorised access to or use of such areas of the Site is strictly forbidden. You agree to tell ReFit Global as soon as possible. if you suspect a third party has got your User ID or password, or if you believe unauthorised access or usage is possible or has happened. For your safety, if ReFit Global considers that unauthorised access is possible or has happened, ReFit Global has the right to terminate access without prior warning. You also agree that ReFit Global may act on any instructions received as long as they are authorised by you.
              </p>
            </CardContent>
          </Card>

          {/* 6. Membership */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Membership</h2>
              <p className="text-gray-600 leading-relaxed">
                <b>a. Terms of Registration and Basic Membership:</b> Members are site visitors and/or users of the Services who choose to register with ReFit Global ("Members"). When a Member registers, an account ("Account") is established for them. If you decide to become a Member, you represent and warrant to us that you:
              </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>you are of legal contracting age;</li>
                <li>you will supply us with accurate, current, and full registration and contact information;</li>
                <li>your registration and use of the Services are not banned by law. If you violate any of the Terms & Conditions or other relevant ReFit Global rules, we have the right to suspend or cancel your membership or access to the Site and/or Services.</li>
                  </ul>
              <p className="text-gray-600 leading-relaxed">
                <b>b.  Account and Password Security:</b> You will create a password and a user id in conjunction with your Account. You are responsible for keeping your password safe, as well as for all actions made with your password.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <b>c.  Age:</b> You must be at least eighteen (18) years old, or the age of majority in your state or province of residence, to register an Account or otherwise use this Website.
              </p>
            </CardContent>
          </Card>

          {/* 7. Accounts that are no longer active */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Accounts that are no longer active</h2>
              <p className="text-gray-600 leading-relaxed">
                <b>a. Inactive Status:</b> A Member's Account may be marked as inactive if there has been no activity on that Account for 180 days.
              </p>
            </CardContent>
          </Card>

          {/* 8. Warranty Exclusions and Liability Limitations. */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Warranty Exclusions and Liability Limitations.</h2>
              <p className="text-gray-600 leading-relaxed">
                We guarantee that the Services and ReFit Global Property will be largely as described on the Site. In the case of a breach of this guarantee, the Customer's sole and exclusive remedy, and ReFit's single and exclusive obligation, shall be (at ReFit's choice) to correct the failure or refund the monetary amount paid by the Customer for the services, whichever is greater. Except as expressly stated in the above sentence, we make no representations or guarantees about the Services or the ReFit Global Property. We expressly disclaim all warranties, express or implied, including: all warranties of merchantability, fitness for a particular purpose, title, non-infringement, and any and all warranties arising from course of dealing and usage of trade; that the services and Refit Global Pvt. Ltd. property will meet your requirements, will always be available, accessible, uninterrupted, timely, secure, or operate without error, as to the results that may be obtained from the operation No oral or written advice or information gained that is not specifically contained above.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Under no circumstances will you be able to recover from us any incidental, consequential, indirect, punitive, or special damages (including damages for loss of business, loss of profits, or loss of use), whether based on contract, tort (including negligence), or otherwise arising from or relating to the services or ReFit Global property, even if ReFit Global was informed of the possibility of such damages. In any case, ReFit's maximum aggregate responsibility for any and all damages originating from the services or the ReFit Global property shall be a refund of any amounts paid by you to us.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Because certain countries do not permit the restriction or exclusion of warranties or liabilities, some of the limitations or exclusions listed above may not apply to you.
              </p>
            </CardContent>
          </Card>

          {/* 9. Indemnity. */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Indemnity.</h2>
                <p className="text-gray-600 leading-relaxed">
                Customer agrees to indemnify and hold ReFit Global, our affiliates, suppliers, licensors, and partners, as well as their officers, directors, employees, agents, and representatives, harmless from any claim or demand made by any third party arising out of (i) your access to or use of Services, (ii) your violation of these Terms & Conditions, or (iii) the infringement by you, or any third party using your account, of these Terms & Conditions. ReFit Global retains the right to take the exclusive defence and control of any matter for which you are obliged to indemnify us, at your expense, and you agree to assist with our defence of these claims. You undertake not to settle any claim without ReFit Global's prior written authorization. When we become aware of any such claim, action, or proceeding, we shall make reasonable attempts to tell you.
              </p>
            </CardContent>
          </Card>

          {/* 10. Law, Jurisdiction, and Compliance */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Law, Jurisdiction, and Compliance</h2>
                <p className="text-gray-600 leading-relaxed">
                You and ReFit Global agree that all issues arising from or related to the use and operation of the Site and/or the Services shall be governed by the substantive laws of the Republic of India, without respect to its conflict of laws provisions. You agree that any claims you may have originating from or related to the operation, use, or other exploitation of the Site and/or the Services shall be heard and resolved in New Delhi courts. You consent to such courts' personal jurisdiction over you, agree to the fairness and convenience of proceeding in such courts, and agree not to raise any objections to proceeding in such courts.
              </p>
            </CardContent>
          </Card>

          {/* 11. Distinctive Provisions */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Distinctive Provisions</h2>
              <p className="text-gray-600 leading-relaxed">
                No delay or omission by us in exercising any of our rights resulting from your noncompliance or default with respect to any of these Terms & Conditions will impair or be construed as a waiver thereof, and no waiver by us of any of the covenants, conditions, or agreements to be performed by you will be construed as a waiver of any succeeding breach thereof or of any other covenant, condition, or agreement hereof contained. The term "including" in these Terms and Conditions means "including but not limited to." If any provision of these Terms & Conditions is found to be invalid or unenforceable by a court of competent jurisdiction, these Terms & Conditions will remain in full force and effect and will be reformed to be valid and enforceable while reflecting the parties' intent to the greatest extent permitted by law. Except as expressly stated otherwise, these Terms and Conditions constitute the entire agreement between you and ReFit Global about its subject matter, and replace any earlier promises, agreements, or representations.whether written or oral, about the issue. You agree that the electronic language of these Terms and Conditions comprises writing, and that your acceptance of the terms and conditions here constitutes a "signing" for all reasons.
              </p>
            </CardContent>
          </Card>

          {/* 12. Information Gathering, Utilisation, and Sharing */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Information Gathering, Utilisation, and Sharing</h2>
              <p className="text-gray-600 leading-relaxed">
                By submitting any ReFit Global contact form, you agree to be contacted by a ReFit Global representative or a representative from the partner you've selected. ReFit Global programmes, offers, events, announcements, and offers from ReFit's third party marketing partners may be communicated to you through phone, email, text, or prerecorded message. If you reply to such an offer, your information will be subject to the terms and conditions of that third party. By supplying us with your phone number, you allow ReFit Global permission to contact you and/or distribute ReFit Global-related information, offers, or announcements by text messages, prerecorded voice, and/or automatic telephone dialling systems.
              </p>
                <p className="text-gray-600 leading-relaxed">
                You also agree that ReFit Global may contact you using any phone number you supply, even if it is a mobile phone number, which may result in costs to you. You can unsubscribe from ReFit Global's email and messaging services at any time by sending an email to support@refitglobal.com.
              </p>
              <p className="text-gray-600 leading-relaxed">
                ReFit Global access to your device exclusively for the purpose of conducting an assessment of your device's quality characteristics. In no case will your private information and data on the device be accessed for any other reason, and such information will not be downloaded or used in any other way by the Company.
              </p>
            </CardContent>
          </Card>

          {/* Officer in Charge of Grievance */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Officer in Charge of Grievance</h2>
              <p className="text-gray-600 leading-relaxed">
                The name and contact information of the Grievance Officer are provided below in line with the Information Technology Act of 2000 and the Consumer Protection Act, as well as the rules adopted thereunder:
              </p>
              <p className="text-gray-600 leading-relaxed">
                1st, 2nd & 3rd Floor, D-247/25, Chhajarsi Colony, Sector 63, Noida, Uttar Pradesh 201301<br />
                <b>Reach Us</b><br />
                Email: support@refitglobal.com<br />
                Time: Monday to Saturday (10:00 AM - 06:30 PM)
              </p>
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