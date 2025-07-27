"use client";

import { useState } from "react";
import Link from "next/link";
import { Footer } from "../../components/sections/Footer";

const products = [
  {
    id: 1,
    name: "iPhone 13 Pro Max",
    price: "₹52,999",
    image: "/images/app.png",
    description: "128GB, Graphite, Refurbished with 6 months warranty",
    condition: "Excellent"
  },
  {
    id: 2,
    name: "iPhone 12",
    price: "₹32,999",
    image: "/images/app.png",
    description: "64GB, Blue, Refurbished with 6 months warranty",
    condition: "Good"
  },
  {
    id: 3,
    name: "Samsung Galaxy S21",
    price: "₹28,499",
    image: "/images/app.png",
    description: "128GB, Phantom Gray, Refurbished with 6 months warranty",
    condition: "Excellent"
  },
  {
    id: 4,
    name: "Google Pixel 6",
    price: "₹29,999",
    image: "/images/app.png",
    description: "128GB, Stormy Black, Refurbished with 6 months warranty",
    condition: "Very Good"
  },
  {
    id: 5,
    name: "OnePlus 9 Pro",
    price: "₹31,999",
    image: "/images/app.png",
    description: "256GB, Morning Mist, Refurbished with 6 months warranty",
    condition: "Excellent"
  },
  {
    id: 6,
    name: "iPhone 11",
    price: "₹26,999",
    image: "/images/app.png",
    description: "64GB, Black, Refurbished with 6 months warranty",
    condition: "Good"
  },
  {
    id: 7,
    name: "Samsung Galaxy S20",
    price: "₹24,999",
    image: "/images/app.png",
    description: "128GB, Cloud Blue, Refurbished with 6 months warranty",
    condition: "Very Good"
  },
  {
    id: 8,
    name: "iPhone SE (2022)",
    price: "₹23,999",
    image: "/images/app.png",
    description: "64GB, Midnight, Refurbished with 6 months warranty",
    condition: "Excellent"
  },
  {
    id: 9,
    name: "Google Pixel 5",
    price: "₹22,499",
    image: "/images/app.png",
    description: "128GB, Just Black, Refurbished with 6 months warranty",
    condition: "Good"
  },
  {
    id: 10,
    name: "OnePlus 8T",
    price: "₹24,499",
    image: "/images/app.png",
    description: "128GB, Aquamarine Green, Refurbished with 6 months warranty",
    condition: "Very Good"
  }
];

export default function ShopPage() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img src="/logo.jpg" alt="ReFit Global" className="h-8" />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/shop" className="text-teal-600 font-medium">Shop</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </nav>
          <div className="md:hidden">
            <button className="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Shop Header */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ReFit Shop</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Quality refurbished phones at affordable prices. Every device is thoroughly tested and comes with a 6-month warranty.
          </p>
        </div>
      </div>

      {/* Product Listing */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform-gpu hover:-translate-y-1 transition-transform duration-200"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain transform-gpu transition-transform duration-700 ease-in-out"
                  style={{
                    transform: hoveredProduct === product.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">
                    {product.condition}
                  </span>
                </div>
                <p className="text-2xl font-bold text-teal-600 mb-3">{product.price}</p>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Free shipping</span>
                  <a 
                    href="#" 
                    className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Buy From ReFit?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">6 Months Warranty</h3>
              <p className="text-gray-600">Every device comes with a 6-month warranty for your peace of mind.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">47+ Quality Checks</h3>
              <p className="text-gray-600">Each phone undergoes 47+ quality checks to ensure perfect condition.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">7 Days Replacement</h3>
              <p className="text-gray-600">Not satisfied? Get a replacement within 7 days, no questions asked.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to buy in bulk?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get exclusive discounts when you purchase multiple devices for your business.
          </p>
          <a 
            href="#" 
            className="inline-block bg-white text-teal-600 px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Download ReFit Bulk Buy App
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
} 