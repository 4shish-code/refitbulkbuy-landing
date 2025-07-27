"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, Users, TrendingUp, Heart, MessageCircle } from "lucide-react"

const testimonials = [
  {
    name: "Saket Saurav",
    role: "Co-founder",
    location: "Delhi",
    content: "ReFit Global has achieved 100x year-on-year growth as a bootstrapped company, with a topline of over USD 24 million last financial year. Our refurbished devices pass through 47+ quality checks to ensure premium quality.",
    rating: 5,
    initials: "SS",
    color: "from-blue-500 to-blue-600",
    profileImage: "/images/testimonials/saket-saurav.png"
  },
  {
    name: "Yash Kumar",
    role: "Retailer",
    location: "Delhi NCR",
    content: "Received an outstanding Superb-grade ReFit Refurbished iPhone delivering excellent performance and boasting an impressive camera quality. The bulk buying discount made it very affordable for my store.",
    rating: 5,
    initials: "YK",
    color: "from-green-500 to-green-600",
    profileImage: "/images/testimonials/yash-kumar.png"
  },
  {
    name: "Vivek Singh",
    role: "Business Owner",
    location: "Bhopal",
    content: "ReFit Global offers refurbished smartphones backed by a robust 6-month warranty. Rest assured, if your phone experiences any malfunctions, ReFit has you covered. Perfect for my business needs.",
    rating: 5,
    initials: "VS",
    color: "from-purple-500 to-purple-600",
    profileImage: "/images/testimonials/vivek-singh.png"
  },
  {
    name: "Kashneet Singh",
    role: "Bulk Buyer",
    location: "Punjab",
    content: "The iPhone 13s I purchased in bulk were in sleek condition with powerful performance and stunning cameras. Improved battery life on all units. Worth the investment for overall excellence.",
    rating: 4,
    initials: "KS",
    color: "from-orange-500 to-orange-600",
    profileImage: "/images/testimonials/kashneet-singh.png"
  },
  {
    name: "Ayesha Siddiqui",
    role: "Store Manager",
    location: "Hyderabad",
    content: "My refurbished iPhone XR order arrived in two days and all units work flawlessly. Couldn't even tell they were refurbished. Best place to shop for refurbished phones in bulk for my store.",
    rating: 5,
    initials: "AS",
    color: "from-teal-500 to-teal-600",
    profileImage: "/images/testimonials/ayesha-siddiqui.png"
  },
  {
    name: "Arjun Verma",
    role: "Electronics Distributor",
    location: "Kolkata",
    content: "Wasn't sure about refurbished phones for my distribution business, but now I'm a fan. The refurbished mobile phones I bought are super smooth and my customers are very satisfied.",
    rating: 5,
    initials: "AV",
    color: "from-red-500 to-red-600",
    profileImage: "/images/testimonials/arjun-verma.png"
  },
  {
    name: "Priya Nair",
    role: "Shop Owner",
    location: "Kochi",
    content: "Picked up refurbished iPhones for my shop - they all look brand new. Super happy with the performance and delivery. Will be ordering another bulk shipment soon.",
    rating: 5,
    initials: "PN",
    color: "from-indigo-500 to-indigo-600",
    profileImage: "/images/testimonials/priya-nair.png"
  },
  {
    name: "Harshit Jain",
    role: "Retailer",
    location: "Indore",
    content: "I've tried other sites, but ReFit's refurbished mobiles are unmatched. Bought both refurbished iPhones and Mi phones in bulk. All phones are in excellent condition - very satisfied with the consistency.",
    rating: 5,
    initials: "HJ",
    color: "from-pink-500 to-pink-600",
    profileImage: "/images/testimonials/harshit-jain.png"
  },
  {
    name: "Rohan Mehta",
    role: "Tech Store Owner",
    location: "Delhi",
    content: "Bought a batch of refurbished iPhone XRs last week - they all work like brand new. Great battery life and no scratches at all. Highly recommend their range of refurbished iPhones for retailers.",
    rating: 5,
    initials: "RM",
    color: "from-cyan-500 to-cyan-600",
    profileImage: "/images/testimonials/rohan-mehta.png"
  },
  {
    name: "Sudarshan",
    role: "IT Procurement",
    location: "Bangalore",
    content: "Bought refurbished MacBooks in bulk for our startup. Excellent condition, very happy with the overall experience. Will definitely order again when we need to expand our team.",
    rating: 5,
    initials: "SD",
    color: "from-yellow-500 to-yellow-600",
    profileImage: "/images/testimonials/sudarshan.png"
  },
  {
    name: "Rahul Sharma",
    role: "Electronics Dealer",
    location: "Meerut",
    content: "I've been eyeing phones with top-notch cameras for my store. Finally opted for ReFit refurbished OnePlus smartphones that fit my budget and my customers love them.",
    rating: 5,
    initials: "RS",
    color: "from-blue-400 to-blue-500",
    profileImage: "/images/testimonials/rahul-sharma.png"
  },
  {
    name: "Mayank Gupta",
    role: "Small Business Owner",
    location: "Delhi",
    content: "ReFit offers affordable options with decent features. Fair performance across all devices, though camera quality varies slightly. Great value for bulk buyers like me.",
    rating: 4,
    initials: "MG",
    color: "from-purple-400 to-purple-500",
    profileImage: "/images/testimonials/mayank-gupta.png"
  }
]

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Transform scroll progress to horizontal movement - opposite directions for parallax effect
  const x1 = useTransform(scrollYProgress, [0, 1], [-300, -500])  // First row moves left
  const x2 = useTransform(scrollYProgress, [0, 1], [-600, -400])  // Second row moves right but starts further left

  // Split testimonials into two rows - use more testimonials for better coverage
  const firstRow = testimonials.slice(0, 6)
  const secondRow = testimonials.slice(6, 12)

  return (
    <section ref={containerRef} className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Logo Icon */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-800 rounded-sm"></div>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
            What people <span className="text-gray-400">say</span>
            <br />
            about <span className="text-gray-400">us</span>
          </h2>
        </motion.div>

        {/* Scrolling Testimonials */}
        <div className="space-y-6 sm:space-y-8">
          {/* First Row - Moving Left */}
          <motion.div
            style={{ x: x1 }}
            className="flex gap-4 sm:gap-6 will-change-transform"
          >
            {firstRow.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-200 transition-transform duration-300 hover:scale-110">
                    <AvatarImage src={testimonial.profileImage} alt={testimonial.name} />
                    <AvatarFallback className={`bg-gradient-to-br text-white text-xs sm:text-sm font-medium ${testimonial.color}`}>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-black text-xs sm:text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {firstRow.map((testimonial) => (
              <div
                key={`${testimonial.name}-duplicate`}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-200 transition-transform duration-300 hover:scale-110">
                    <AvatarImage src={testimonial.profileImage} alt={testimonial.name} />
                    <AvatarFallback className={`bg-gradient-to-br text-white text-xs sm:text-sm font-medium ${testimonial.color}`}>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-black text-xs sm:text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            ))}
            {/* Triple for extra coverage */}
            {firstRow.map((testimonial) => (
              <div
                key={`${testimonial.name}-triple`}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-200 transition-transform duration-300 hover:scale-110">
                    <AvatarImage src={testimonial.profileImage} alt={testimonial.name} />
                    <AvatarFallback className={`bg-gradient-to-br text-white text-xs sm:text-sm font-medium ${testimonial.color}`}>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-black text-xs sm:text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Second Row - Moving Right */}
          <motion.div
            style={{ x: x2 }}
            className="flex gap-4 sm:gap-6 will-change-transform"
          >
            {secondRow.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-200 transition-transform duration-300 hover:scale-110">
                    <AvatarImage src={testimonial.profileImage} alt={testimonial.name} />
                    <AvatarFallback className={`bg-gradient-to-br text-white text-xs sm:text-sm font-medium ${testimonial.color}`}>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-black text-xs sm:text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {secondRow.map((testimonial) => (
              <div
                key={`${testimonial.name}-duplicate`}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-200 transition-transform duration-300 hover:scale-110">
                    <AvatarImage src={testimonial.profileImage} alt={testimonial.name} />
                    <AvatarFallback className={`bg-gradient-to-br text-white text-xs sm:text-sm font-medium ${testimonial.color}`}>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-black text-xs sm:text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            ))}
            {/* Triple for extra coverage */}
            {secondRow.map((testimonial) => (
              <div
                key={`${testimonial.name}-triple`}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-200 transition-transform duration-300 hover:scale-110">
                    <AvatarImage src={testimonial.profileImage} alt={testimonial.name} />
                    <AvatarFallback className={`bg-gradient-to-br text-white text-xs sm:text-sm font-medium ${testimonial.color}`}>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-black text-xs sm:text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 