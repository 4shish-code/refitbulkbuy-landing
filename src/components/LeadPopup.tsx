"use client"

import React, { useState, useEffect, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion"
import { usePathname } from "next/navigation"
import { Check, Shield, Star, ChevronRight, MessageSquare, AlertCircle, X } from "lucide-react"

// Define motion components with proper types
const MotionDiv = motion.div as React.FC<HTMLMotionProps<"div">>;
const MotionButton = motion.button as React.FC<HTMLMotionProps<"button">>;

type FormData = {
  name: string
  phone: string
  email: string
  state: string
  pincode: string
  businessName: string
}

type FormErrors = {
  name?: string
  phone?: string
  email?: string
  state?: string
  pincode?: string
  businessName?: string
}

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", 
  "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", 
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
]

export function LeadPopup() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    state: '',
    pincode: '',
    businessName: ''
  })
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [stateSearch, setStateSearch] = useState('')
  const [showStateDropdown, setShowStateDropdown] = useState(false)
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  // Keep refs to button elements
  const desktopButtonRef = useRef<HTMLButtonElement>(null)
  const mobileButtonRef = useRef<HTMLButtonElement>(null)

  const filteredStates = INDIAN_STATES.filter(state => 
    state.toLowerCase().includes(stateSearch.toLowerCase())
  )

  // This effect ensures button styling is preserved when popup opens/closes
  useEffect(() => {
    // Apply inline styles directly to the DOM elements
    if (desktopButtonRef.current) {
      desktopButtonRef.current.style.padding = "25px 15px !important";
    }
    
    if (mobileButtonRef.current) {
      mobileButtonRef.current.style.padding = "25px 15px !important";
    }
  }, [open])

  useEffect(() => {
    // Don't show popup on certain pages
    const excludedPaths = ['/privacy-policy', '/terms-conditions', '/delete-account', '/contact']
    if (excludedPaths.includes(pathname)) {
      return
    }
  }, [pathname])

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        return value.trim() === '' ? 'Name is required' : undefined
      case 'phone':
        return value.trim() === '' 
          ? 'Phone number is required' 
          : value.length !== 10 
            ? 'Phone number must be 10 digits' 
            : undefined
      case 'email':
        return value.trim() === '' 
          ? 'Email is required' 
          : !/^\S+@\S+\.\S+$/.test(value)
            ? 'Please enter a valid email' 
            : undefined
      case 'state':
        return value.trim() === '' ? 'State is required' : undefined
      case 'pincode':
        return value.trim() === '' 
          ? 'Pincode is required' 
          : value.length !== 6 
            ? 'Pincode must be 6 digits' 
            : undefined
      case 'businessName':
        return value.trim() === '' ? 'Business name is required' : undefined
      default:
        return undefined
    }
  }

  const handlePersonalUse = () => {
    window.open('https://refitglobal.com', '_blank')
    setOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name, value)
      setFormErrors(prev => ({
        ...prev,
        [name]: error
      }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    
    const error = validateField(name, value)
    setFormErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === '' || (/^\d{0,10}$/.test(value))) {
      setFormData(prev => ({ ...prev, phone: value }))
      
      if (touched.phone) {
        const error = validateField('phone', value)
        setFormErrors(prev => ({
          ...prev,
          phone: error
        }))
      }
    }
  }

  const handlePincodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === '' || (/^\d{0,6}$/.test(value))) {
      setFormData(prev => ({ ...prev, pincode: value }))
      
      if (touched.pincode) {
        const error = validateField('pincode', value)
        setFormErrors(prev => ({
          ...prev,
          pincode: error
        }))
      }
    }
  }

  const selectState = (state: string) => {
    setFormData(prev => ({ ...prev, state }))
    setShowStateDropdown(false)
    setTouched(prev => ({ ...prev, state: true }))
    setFormErrors(prev => ({
      ...prev,
      state: undefined
    }))
  }

  const validateForm = (): boolean => {
    const errors: FormErrors = {}
    let isValid = true

    // Validate all fields
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value)
      if (error) {
        errors[key as keyof FormErrors] = error
        isValid = false
      }
    })

    setFormErrors(errors)
    
    // Mark all fields as touched
    const allTouched: Record<string, boolean> = {}
    Object.keys(formData).forEach(key => {
      allTouched[key] = true
    })
    setTouched(allTouched)
    
    return isValid
  }

  const handleNext = () => {
    // Validate name and phone before proceeding
    const nameError = validateField('name', formData.name);
    const phoneError = validateField('phone', formData.phone);
    
    setFormErrors(prev => ({
      ...prev,
      name: nameError,
      phone: phoneError
    }));
    
    setTouched(prev => ({
      ...prev,
      name: true,
      phone: true
    }));
  };
  
  const handlePrevious = () => {
    // This function is no longer needed but kept for compatibility
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    const nameError = validateField('name', formData.name);
    const phoneError = validateField('phone', formData.phone);
    const emailError = validateField('email', formData.email);
    const stateError = validateField('state', formData.state);
    const pincodeError = validateField('pincode', formData.pincode);
    const businessNameError = validateField('businessName', formData.businessName);
    
    setFormErrors({
      name: nameError,
      phone: phoneError,
      email: emailError,
      state: stateError,
      pincode: pincodeError,
      businessName: businessNameError
    });
    
    setTouched({
      name: true,
      phone: true,
      email: true,
      state: true,
      pincode: true,
      businessName: true
    });
    
    if (nameError || phoneError || emailError || stateError || pincodeError || businessNameError) {
      return;
    }
    
    setIsSubmitting(true)
    setError(null)

    try {
      // Prepare the payload according to the API documentation
      const payload = {
        fields: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email
        },
        actions: [
          {
            type: "SYSTEM_NOTE",
            text: `Lead Source: Website - Shop/Business Form - State: ${formData.state}, Pincode: ${formData.pincode}, Business: ${formData.businessName}`
          }
        ]
      }

      console.log('Sending API request with payload:', payload);

      // Make direct API call to TeleCRM as shown in the documentation
      const response = await fetch('https://api.telecrm.in/enterprise/682f48ff3bc6439004708f66/autoupdatelead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 34979017-8fa3-445b-bde1-cab5d435198e1752058298716:f662f83e-4461-4190-b97b-e10c9ab248d8'
        },
        body: JSON.stringify(payload)
      });

      let responseData;
      try {
        responseData = await response.json();
        console.log('API response:', responseData);
      } catch (jsonError) {
        console.error('Error parsing JSON response:', jsonError);
        // The API might not return JSON as mentioned in the docs
        console.log('Raw response:', response);
      }

      if (!response.ok) {
        const errorMessage = responseData?.message || `API error: ${response.status}`;
        console.error('API error details:', responseData);
        throw new Error(errorMessage);
      }

      // Show success message and close popup after a delay
      setSuccess(true)
      setTimeout(() => {
        setOpen(false)
        setSuccess(false)
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          state: '',
          pincode: '',
          businessName: ''
        });
      }, 2000)
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderTrustBadges = () => (
    <div className="text-center mt-4">
      <p className="text-sm text-gray-500 mb-2">Trusted by 1000+ businesses across India</p>
      <div className="flex items-center justify-center gap-6">
        <div className="flex items-center gap-1">
          <Shield size={16} className="text-[#23ccb3]" />
          <span className="text-xs">Secure</span>
        </div>
        <div className="flex items-center gap-1">
          <Check size={16} className="text-green-600" />
          <span className="text-xs">Verified</span>
        </div>
        <div className="flex items-center gap-1">
          <Star size={16} className="text-yellow-500" />
          <span className="text-xs">4.8/5 Rating</span>
        </div>
      </div>
    </div>
  )



  const renderStepContent = () => {
    return (
      <MotionDiv
        key="single-step"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
       
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">Full Name</label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
            placeholder="Enter your full name"
            className={`survey-input ${formErrors.name ? 'border-red-500' : ''}`}
          />
          <ErrorMessage message={formErrors.name} />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-700">Phone Number</label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]{10}"
            maxLength={10}
            value={formData.phone}
            onChange={handlePhoneChange}
            onBlur={handleBlur}
            required
            placeholder="Enter 10-digit mobile number"
            className={`survey-input ${formErrors.phone ? 'border-red-500' : ''}`}
          />
          <ErrorMessage message={formErrors.phone} />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">Email Address</label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
            placeholder="Enter your email address"
            className={`survey-input ${formErrors.email ? 'border-red-500' : ''}`}
          />
          <ErrorMessage message={formErrors.email} />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <label htmlFor="state" className="block text-sm font-medium mb-1 text-gray-700">State</label>
            <Input
              id="state"
              name="state"
              value={formData.state}
              onChange={(e) => {
                setStateSearch(e.target.value)
                setFormData(prev => ({ ...prev, state: e.target.value }))
                
                if (touched.state) {
                  const error = validateField('state', e.target.value)
                  setFormErrors(prev => ({
                    ...prev,
                    state: error
                  }))
                }
              }}
              onBlur={handleBlur}
              onClick={() => setShowStateDropdown(true)}
              placeholder="Search or select your state"
              className={`survey-input ${formErrors.state ? 'border-red-500' : ''}`}
            />
            <ErrorMessage message={formErrors.state} />
            {showStateDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {filteredStates.length > 0 ? (
                  filteredStates.map(state => (
                    <div 
                      key={state} 
                      className="px-4 py-2 hover:bg-[#23ccb3]/10 cursor-pointer text-sm"
                      onClick={() => selectState(state)}
                    >
                      {state}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-sm text-gray-500">No states found</div>
                )}
              </div>
            )}
          </div>
          
          <div>
            <label htmlFor="pincode" className="block text-sm font-medium mb-1 text-gray-700">Pincode</label>
            <Input
              id="pincode"
              name="pincode"
              type="text"
              inputMode="numeric"
              pattern="[0-9]{6}"
              maxLength={6}
              value={formData.pincode}
              onChange={handlePincodeChange}
              onBlur={handleBlur}
              required
              placeholder="Enter 6-digit pincode"
              className={`survey-input ${formErrors.pincode ? 'border-red-500' : ''}`}
            />
            <ErrorMessage message={formErrors.pincode} />
          </div>
        </div>
        
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium mb-1 text-gray-700">Business Name / Shop Name</label>
          <Input
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
            placeholder="Enter your business or shop name"
            className={`survey-input ${formErrors.businessName ? 'border-red-500' : ''}`}
          />
          <ErrorMessage message={formErrors.businessName} />
        </div>
        
        {error && <div className="text-red-500 text-sm flex items-center gap-1"><AlertCircle size={14} />{error}</div>}
        
        <div className="flex flex-col items-center pt-4 space-y-3">
          <MotionDiv
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              type="button" 
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="survey-button-primary w-full"
            >
              {isSubmitting ? 'Processing...' : 'Get Wholesale Prices'} 
              <ChevronRight size={18} />
            </Button>
          </MotionDiv>
          
          <button 
            type="button" 
            onClick={handlePersonalUse}
            className="text-sm text-gray-500 hover:text-[#23ccb3] hover:underline transition-colors"
          >
            For Personal Use
          </button>
        </div>
      </MotionDiv>
    );
  };

  // Side stripe component
  const SideStripe = () => (
    <>
      {/* Desktop side stripe */}
      <motion.div 
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 400,
          damping: 25,
          delay: 1
        }}
      >
        <motion.button
          ref={desktopButtonRef}
          onClick={() => setOpen(true)}
          className="side-button"
          whileTap={{ scale: 0.95 }}
          style={{
            padding: '25px 15px !important',
          }}
        > 
          <MessageSquare className="mb-2" size={24} />
          <div className="writing-mode-vertical text-sm font-medium">
            Do you want to buy mobile for?
          </div>
        </motion.button>
      </motion.div>

      {/* Mobile bottom stripe */}
      <motion.div 
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 400,
          damping: 25,
          delay: 1
        }}
      >
        <motion.button
          ref={mobileButtonRef}
          onClick={() => setOpen(true)}
          className="mobile-button"
          whileTap={{ scale: 0.98 }}
          
        >
          <MessageSquare size={20} />
          <span className="font-medium">Do you want to buy mobile for?</span>
        </motion.button>
      </motion.div>
    </>
  )

  const ErrorMessage = ({ message }: { message?: string }) => {
    if (!message) return null
    
    return (
      <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
        <AlertCircle size={12} />
        <span>{message}</span>
      </div>
    )
  }

  return (
    <>
      <SideStripe />
      
      <AnimatePresence>
        {open && (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="survey-dialog">
              {/* Close button outside the dialog */}
              <button 
                onClick={() => setOpen(false)}
                className="absolute top-2 right-2 z-50 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Close dialog"
              >
                <X size={20} className="text-gray-600" />
              </button>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 0.3
                }}
                className="p-6"
              >
                <DialogHeader className="text-center mb-4">
                  <DialogTitle className="text-2xl font-bold text-black">
                    Unlock Exclusive Wholesale Deals
                  </DialogTitle>
                  <p className="text-gray-600 text-sm mt-2">
                    Tell us a bit about your business to access bulk buying prices.
                  </p>
                </DialogHeader>
                                
                <AnimatePresence mode="wait">
                  {success ? (
                    <MotionDiv
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="py-8 text-center"
                    >
                      <div className="flex justify-center mb-4">
                        <div className="bg-[#23ccb3]/20 rounded-full p-3">
                          <Check size={32} className="text-[#23ccb3]" />
                        </div>
                      </div>
                      <div className="text-[#23ccb3] text-lg font-medium mb-2">Thank you for your interest!</div>
                      <p className="text-gray-600">We'll contact you soon with wholesale pricing details.</p>
                    </MotionDiv>
                  ) : (
                    renderStepContent()
                  )}
                </AnimatePresence>
                
                {!success && renderTrustBadges()}
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
        
        .side-button {
          background-color: #23ccb3;
          color: white;
          border-top-right-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          padding: 25px 15px !important;
          align-items: center;
          justify-content: center;
        }
        
        .mobile-button {
          background-color: #23ccb3;
          color: white;
          width: 100%;
          box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }
        
        .survey-dialog {
          max-width: 28rem;
          background-color: white;
          border-radius: 0.75rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 0;
          padding: 0;
          overflow: hidden;
        }
        
        .survey-input {
          width: 100%;
          transition: all 0.2s;
        }
        
        .survey-input:focus {
          border-color: #23ccb3;
          box-shadow: 0 0 0 3px rgba(35, 204, 179, 0.15);
        }
        
        .survey-button-primary {
          background-color: #23ccb3;
          color: white;
          padding: 0.625rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.2s;
        }
        
        .survey-button-primary:hover {
          background-color: #1fb19c;
        }
        
        .survey-button-secondary {
          border: 1px solid #e2e8f0;
          color: #4b5563;
          padding: 0.625rem 1.25rem;
          transition: all 0.2s;
        }
        
        .survey-button-secondary:hover {
          background-color: #f8fafc;
        }
      `}</style>
    </>
  )
} 