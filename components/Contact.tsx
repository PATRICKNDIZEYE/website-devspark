'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import GetInTouchModal from './GetInTouchModal'

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section 
      id="contact" 
      className="py-20 px-4 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ color: 'var(--text-primary)' }}>
          Contact Us
        </h2>
        <p className="text-xl mb-12 text-center" style={{ color: 'var(--text-secondary)' }}>
          Ready to work with us or join our team?
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#1a1a1a] rounded-[24px] p-6 md:p-8 text-center transition-all duration-300 hover:scale-105">
            <Mail className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
            <p className="text-sm font-semibold text-gray-400 mb-2">Email</p>
            <a 
              href="mailto:info@yourcompany.com"
              className="text-lg font-medium text-white hover:underline"
            >
              info@yourcompany.com
            </a>
          </div>
          
          <div className="bg-[#f5f5f5] rounded-[24px] p-6 md:p-8 text-center transition-all duration-300 hover:scale-105">
            <Phone className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
            <p className="text-sm font-semibold text-[#666666] mb-2">Phone</p>
            <a 
              href="tel:+250XXXXXXXXX"
              className="text-lg font-medium text-[#1a1a1a] hover:underline"
            >
              +250 XXX XXX XXX
            </a>
          </div>
          
          <div className="bg-[#1a1a1a] rounded-[24px] p-6 md:p-8 text-center transition-all duration-300 hover:scale-105">
            <MapPin className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
            <p className="text-sm font-semibold text-gray-400 mb-2">Location</p>
            <p className="text-lg font-medium text-white">
              Rwanda
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-[32px] p-8 md:p-12 text-center">
          <p className="text-2xl md:text-3xl font-bold text-white mb-4">
            Let&apos;s build something solid.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg"
          >
            GET IN TOUCH
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Get In Touch Modal */}
      <GetInTouchModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}

export default Contact
