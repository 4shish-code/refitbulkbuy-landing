"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Shield, Lock, Eye, UserCheck, Package, Download, X } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg sm:text-xl text-gray-600">Last updated: January 2025</p>
        </motion.div>

        <div className="space-y-8">
          {/* Privacy Policy Section */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Protecting your privacy is a fundamental principle that we take very seriously. We strive to securely store and process Your Information, including any sensitive financial data collected, on computers that are safeguarded by physical and technological security measures in accordance with the Information Technology Act, 2000, and its associated regulations. If you have concerns about the transfer or use of Your Information in this manner, please refrain from using the Website. We may share your personal information, transaction history, preferences, and browsing activities, including purchases, refunds, and other relevant details, with our corporate affiliates. If you object to such sharing of Your Information, you have the option to (a) contact us at support@refitglobal.com, or (b) abstain from using the Website.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As a result of this sharing, our corporate affiliates may engage in marketing communication with you unless you explicitly opt-out.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We may disclose personal information to our service providers, such as logistics, billing, or collections companies. Such disclosure may be necessary to grant you access to our services, fulfill our legal obligations, enforce our Terms of Use, facilitate our marketing and advertising efforts, or prevent, detect, mitigate, and investigate fraudulent or illegal activities related to our services. We do not disclose your personal information to third parties for their marketing and advertising purposes without your explicit consent.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In certain circumstances, we may disclose your personal information if required by law or in good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal processes. We may also disclose your personal information to law enforcement agencies in good faith belief that it is reasonably necessary to: enforce our Terms of Use or Privacy Policy, address claims of infringement upon third-party rights by an advertisement, posting, or other content, or protect the rights, property, or personal safety of our users or the general public.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In the event that we (or our assets) plan to merge with or be acquired by another business entity, or undergo a reorganization, amalgamation, or business restructuring, we and our affiliates may share or sell some or all of your personal information. In such a scenario, the other business entity (or the new combined entity) will be required to adhere to this Privacy Policy regarding your personal information.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <b>Privacy of Others:</b> You are prohibited from disclosing, selling, renting, or distributing a user's information to a third party for purposes unrelated to the services. Furthermore, you may not utilize the information for marketing purposes, whether through electronic means or otherwise, unless you have obtained explicit consent from the respective user.
              </p>
            </CardContent>
          </Card>

          {/* Disclaimer of Warranties and Liability */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Disclaimer of Warranties and Liability</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                This Website, along with all the materials, products (including software), and services provided on or through this Website, are offered on an "as is" and "as available" basis, without any express or implied representation or warranties, unless otherwise specified in writing. Without limiting the previous statement, Refit Global does not guarantee that:
              </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>This Website will be continuously available, or available at all; or</li>
                <li>The information on this Website is complete, accurate, true, or free from misleading content.</li>
                  </ul>
              <p className="text-gray-600 leading-relaxed">
                Refit Global will not be held liable to you in any way or in connection with the contents of, the use of, or any other association with the Website. Refit Global does not guarantee that this Website, the information, content, materials, products (including software), or services provided on or through the Website, their servers, or electronic communications sent from us are free of viruses or other harmful components.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nothing on the Website constitutes, or should be interpreted as, advice of any kind. All the products and services sold by independent sellers on the Website are subject to different state laws. If a seller is unable to deliver a product or service due to the implications of different state laws, the seller will either refund or credit the amount received in advance from the sale of such product or service that could not be delivered to you.
              </p>
            </CardContent>
          </Card>

          {/* Selling */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Package className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Selling</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                As a registered seller, you are permitted to list items for sale on the Website in accordance with the rules and policies that are incorporated by reference in these Terms of Use. You must have the legal authority to sell the items you list for sale on the Website. It is your responsibility to ensure that the listed items do not infringe upon intellectual property rights, trade secrets, or any other proprietary rights, as well as rights of publicity or privacy of third parties. Listings may only include text descriptions, graphics, and pictures that accurately describe your item for sale. All listed items must be placed in an appropriate category on the Website. You must maintain sufficient stock of all listed items to fulfill successful sales.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The item description in the listing must not be deceptive and must accurately represent the actual condition of the product. If the item description does not match the actual condition of the item, you agree to refund any payments received from the buyer. You are not allowed to list the same product in multiple quantities across different categories on the Website. Refit Global reserves the right to disable multiple listings of the same product by you in different categories.
              </p>
            </CardContent>
          </Card>

          {/* Services, Payment, and Refunds */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Download className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Services & Payment</h2>
              </div>
                <p className="text-gray-600 leading-relaxed">
                While using any of the available payment methods on the Website, we shall not be held responsible or assume any liability for any loss or damage that may directly or indirectly occur due to the following reasons:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Lack of authorization for any transaction(s).</li>
                <li>Exceeding the pre-set limit mutually agreed upon by you and the respective bank(s).</li>
                <li>Payment issues arising from the transaction.</li>
                <li>Rejection of transactions for any other reasons.</li>
                    </ul>
              <p className="text-gray-600 leading-relaxed">
                All payments made for purchases/services on the Website must be in Indian Rupees, which is the only accepted currency in the Republic of India. The Website does not facilitate transactions in any other currency for the purchases made on it.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Before shipping or delivering your order, the seller may request supporting documents, such as a government-issued ID and address proof, to verify the ownership of the payment instrument you used for the purchase. This verification process is implemented to ensure a secure online shopping environment for all our users.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Transactions, transaction prices, and all commercial terms, including delivery and dispatch of products/services, are contractual obligations between the buyer and seller. The payment facility provided by Refit Global is solely used to facilitate the completion of the transaction. Refit Global cannot be held liable for non-delivery, non-receipt, non-payment, damage, breach of representations and warranties, non-provision of after-sales or warranty services, or fraud related to the products/services listed on the Website.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By accepting these Terms of Use, you authorize Refit Global or its service providers to electronically collect, process, facilitate, and remit payments and/or transaction prices to and from other users through the payment facility. Refit Global operates on a principal-to-principal basis, and its role is that of an independent contractor. Refit Global does not control or hold liability for the products or services listed on the Website that are paid for using the payment facility. Refit Global does not guarantee the identity of any user or ensure the completion of a transaction between a buyer and seller.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Please note that the payment facility provided by Refit Global is not a banking or financial service. It serves as an electronic payment, receiving, and remittance facility that utilizes authorized banking infrastructure and credit card payment gateway networks. Refit Global does not act as a trustee or in a fiduciary capacity regarding the transaction or the transaction price.
              </p>
              <p className="text-gray-600 leading-relaxed">
                It is important to consult the official terms and conditions provided by Refit Global or seek legal advice for accurate and up-to-date information, as the rephrased version above is a human-generated interpretation and should not be considered legally binding.
              </p>
            </CardContent>
          </Card>

          {/* Additional Sections: Compliance, Indemnity, Release, etc. */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Compliance with Laws</h2>
              <p className="text-gray-600 leading-relaxed">
                In accordance with applicable law, if the Customer makes a purchase equal to or exceeding INR 2,00,000.00, they must upload a scanned copy of their PAN card on the Website within 4 days of the purchase. Failure to do so will result in the cancellation of the Customer's purchase. The PAN card submission is a one-time requirement, and if the Customer has already submitted it, there is no need to submit it again. If there is a discrepancy between the Customer's name on the Website and the name on the PAN card, the Customer's order will be cancelled.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Both the buyer and seller are obligated to comply with all applicable laws, including but not limited to the Foreign Exchange Management Act, 1999, and its rules and notifications issued by the Reserve Bank of India, the Customs Act, the Information and Technology Act, 2000 as amended by the Information Technology (Amendment) Act 2008, the Prevention of Money Laundering Act, 2002, its rules, the Foreign Contribution Regulation Act, 1976, its rules, the Income Tax Act, 1961, its rules, and the Export Import Policy of the Government of India. These laws apply to the use of the payment facility and the Website.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Valid credit/debit/cash cards and other payment instruments are processed through a credit card payment gateway or appropriate payment system infrastructure. The terms and conditions agreed upon between the buyer and the respective issuing bank and payment instrument issuing company govern these transactions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Online bank transfers from valid bank accounts are processed using the gateway provided by the respective issuing bank, which supports the payment facility to provide these services to the users. These online bank transfers are also subject to the terms and conditions agreed upon between the buyer and the respective issuing bank.
              </p>
            </CardContent>
          </Card>

          {/* Indemnity and Release */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Indemnity & Release</h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to indemnify and hold harmless Refit Global, its owner, licensee, affiliates, subsidiaries, group companies (as applicable), and their respective officers, directors, agents, and employees from any claims, demands, actions, including reasonable attorneys' fees, made by any third party or penalties imposed due to your breach of these Terms of Use, Privacy Policy, and other policies, or your violation of any laws, rules, regulations, or the rights (including intellectual property rights) of a third party.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If you have a dispute with one or more users, you release Refit Global (including its affiliates, subsidiaries, officers, directors, employees, and agents) from any and all claims, demands, and damages (actual and consequential) of every kind and nature, known and unknown, arising out of or in any way connected with such disputes. By entering into this release, you expressly waive any protections (whether statutory or otherwise) that would otherwise limit the coverage of this release to only those claims that you may know or suspect to exist in your favor at the time of agreeing to this release.
              </p>
            </CardContent>
          </Card>

          {/* Law, Jurisdiction, Copyright, and More */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Applicable Law & Jurisdiction</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Use are governed by and interpreted and construed in accordance with the laws of India. The exclusive place of jurisdiction shall be New Delhi.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-6">Jurisdictional Issues/Sale in India Only</h3>
              <p className="text-gray-600 leading-relaxed">
                Unless specifically stated otherwise, the material on the Website is presented by independent sellers solely for the purpose of sale in India. Refit Global makes no representation that the materials on the Website are appropriate or available for use in locations/countries other than India. Individuals who choose to access this Website from locations/countries other than India do so at their own initiative, and Refit Global is not responsible for the supply of products or refunds for products ordered from locations/countries other than India, or compliance with local laws if and to the extent that local laws are applicable.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-6">Trademark, Copyright, and Restriction</h3>
              <p className="text-gray-600 leading-relaxed">
                This Website is controlled and operated by Refit Global, and products are sold by respective sellers. All materials on this Website, including images, illustrations, audio clips, and video clips, are protected by copyrights, trademarks, and other intellectual property rights. The material on the Website is solely for your personal, non-commercial use. You must not copy, reproduce, republish, upload, post, transmit, or distribute such material in any way, including by email or other electronic means, directly or indirectly. You must not assist any other person in doing so. Modification of the materials, use of the materials on any other website or networked computer environment, or use of the materials for any purpose other than personal, non-commercial use without the prior written consent of the owner is a violation of copyrights, trademarks, and other proprietary rights, and is prohibited. Any use for which you receive remuneration, whether in money or otherwise, constitutes commercial use for the purposes of this clause.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-6">Trademark Complaint</h3>
              <p className="text-gray-600 leading-relaxed">
                Refit Global respects the intellectual property of others. If you believe that your trademark has been infringed, please contact support@refitglobal.com.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-6">Product Description</h3>
              <p className="text-gray-600 leading-relaxed">
                Sellers are responsible for the accuracy, completeness, reliability, and currentness of their product descriptions, contents, features, quality, condition, pricing, and other related information. Refit Global does not guarantee that the product descriptions or other content on this Website are accurate, complete, reliable, current, or error-free, and assumes no liability in this regard.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-6">Limitation of Liability</h3>
              <p className="text-gray-600 leading-relaxed">
                In no event shall Refit Global be liable for any special, incidental, indirect, or consequential damages of any kind in connection with these Terms of Use, even if the user has been informed in advance of the possibility of such damages. Refit Global's liability in any circumstance is limited to the amount of fees or transaction price (as applicable) paid by you to Refit Global.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-6">General</h3>
              <p className="text-gray-600 leading-relaxed">
                None of the provisions in the Terms of Use shall be considered as establishing a partnership or agency between you and Refit Global, and you do not have the authority to bind Refit Global in any manner.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-6">Notice</h3>
              <p className="text-gray-600 leading-relaxed">
                Unless explicitly stated otherwise, any notice will be sent by postal mail on behalf of Refitglobal.com to ReFit Global Private Limited, Attn: Legal Department, 1st, 2nd & 3rd Floor, D-247/25, Chhajarsi Colony, Sector 63, Noida, Uttar Pradesh 201301 (in the case of refitglobal.com) or to the email address provided by you during the registration process. Notice will be considered given 48 hours after the email is sent unless the sending party is notified that the email address is invalid. Alternatively, we may give you notice by certified mail, postage prepaid, and return receipt requested, to the address provided during the registration process or updated thereafter. In such cases, notice will be considered given three (3) days after the date of mailing.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-6">Severability</h3>
              <p className="text-gray-600 leading-relaxed">
                If any clause of the Terms of Use is deemed invalid, void, or unenforceable for any reason, that clause shall be deemed separable and shall not affect the validity and enforceability of the remaining clauses.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-6">Entire Agreement</h3>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Use constitute the entire understanding and agreement between you and Refit Global regarding the subject matter.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-6">Assignment</h3>
                <p className="text-gray-600 leading-relaxed">
                In Refit Global's sole discretion, Refit Global may transfer its rights and obligations (also known as "assign") under these Terms of Use without your prior express consent, provided that Refit Global assigns the Agreement on the same terms or terms that are no less advantageous to you.
              </p>
            </CardContent>
          </Card>

          {/* Contact, Grievance Officer, and Policies */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact & Grievance Officer</h2>
              <p className="text-gray-600 leading-relaxed">
                Please contact us for any questions or comments regarding this Website, except for copyright infringement-related inquiries.
              </p>
                <p className="text-gray-600 leading-relaxed">
                <b>Grievance Officer:</b><br />
                In accordance with the Information Technology Act 2000 and rules made thereunder, the name and contact details of the Grievance Officer are as follows:<br />
                <br />
                Refit Global Private Limited<br />
                1st, 2nd & 3rd Floor, D-247/25, Chhajarsi Colony, Sector 63, Noida, Uttar Pradesh 201301<br />
                Email: support@refitglobal.com
              </p>
            </CardContent>
          </Card>

          {/* Policies and Security */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Policies & Security</h2>
              <h3 className="text-lg font-semibold text-gray-900 mt-6">Profanity Policy</h3>
              <p className="text-gray-600 leading-relaxed">
                Refit Global prohibits the use of racist, hateful, sexual, or obscene language in a public area. This includes text within listings, seller pages, and all other areas of the Website that may be viewed by other users. If profane words are part of a title for an item being sold, sellers are allowed to blur out the bulk of the offending word with asterisks. Violations of this policy may result in disciplinary action, including account suspension.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-6">Other Businesses</h3>
              <p className="text-gray-600 leading-relaxed">
                Refit Global is not responsible or liable for the actions, products, content, and services on the Website that are linked to affiliates and/or third-party websites using the Website's APIs or otherwise. Additionally, the Website may provide links to third-party websites of affiliated companies and other businesses for which Refit Global assumes no responsibility for examining or evaluating the products and services offered. Refit Global does not endorse any third-party websites or their content.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mt-6">Security</h3>
              <p className="text-gray-600 leading-relaxed">
                The security of your data is of utmost importance to us. We take extensive measures to protect the privacy and security of your data. Your data is encrypted using the highest level of encryption standards in the industry. We have multiple levels of security in place within our infrastructure and systems to ensure the safety of your data. Our world-class data center is operated under constant surveillance and has multiple layers of security checkpoints. We engage reputable third-party assessors to test the security of our systems and infrastructure. We continuously review and update our security procedures, employing the latest technologies for best-in-class data security. Access to Refit Global's secure website/app is based on your login ID and password, with audit trails in place to monitor account logins and ensure authorized access.
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