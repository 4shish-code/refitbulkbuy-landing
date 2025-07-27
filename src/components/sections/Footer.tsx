"use client"

import Link from "next/link"

export function Footer() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Background App Icons */}
      <div className="absolute inset-0 opacity-20">
        {/* Left side icons */}
        <div className="absolute left-10 top-20 grid grid-cols-4 gap-4">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={`left-${i}`}
              className={`w-16 h-16 rounded-2xl ${
                i === 4 ? 'bg-green-400' : 
                i === 8 ? 'bg-pink-500' : 
                i === 12 ? 'bg-cyan-400' : 
                'bg-gray-700'
              }`}
            />
          ))}
        </div>
        
        {/* Right side icons */}
        <div className="absolute right-10 top-20 grid grid-cols-4 gap-4">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={`right-${i}`}
              className={`w-16 h-16 rounded-2xl ${
                i === 3 ? 'bg-yellow-400' : 
                i === 15 ? 'bg-green-400' : 
                'bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 text-center">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            See what you'll discover
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Download ReFit Bulk Buy today on iOS and Android
          </p>
        </div>

        {/* App Image - Temporarily hidden
        <div className="mb-12 sm:mb-16">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-white rounded-2xl sm:rounded-3xl mx-auto p-6 sm:p-8 shadow-2xl">
            <img 
              src="/images/app.png"
              alt="ReFit App"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        */}

        {/* Footer Navigation */}
        <div className="border-t border-gray-800 pt-12">
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">R</span>
              </div>
              <span className="text-2xl font-bold">ReFit Bulk Buy</span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
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

            {/* Bottom */}
            <div className="text-center text-gray-500">
              <p>&copy; 2025 ReFit Bulk Buy. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
    </section>
  )
} 