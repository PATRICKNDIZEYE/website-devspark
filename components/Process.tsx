'use client'

import { ArrowRight } from 'lucide-react'

const Process = () => {
  const steps = [
    'Consultation and requirement analysis',
    'Design and development',
    'Review and revisions',
    'Deployment and training',
    'Ongoing support'
  ]

  return (
    <section 
      id="process" 
      className="py-20 px-4 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
          Our Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative"
            >
              <div 
                className={`rounded-[24px] p-6 md:p-8 transition-all duration-300 hover:scale-105 ${
                  index % 2 === 0 ? 'bg-[#1a1a1a]' : 'bg-[#f5f5f5]'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4 ${
                  index % 2 === 0 ? 'bg-white text-[#1a1a1a]' : 'bg-[#1a1a1a] text-white'
                }`}>
                  {index + 1}
                </div>
                <p className={`text-base md:text-lg font-medium ${
                  index % 2 === 0 ? 'text-white' : 'text-[#1a1a1a]'
                }`}>
                  {step}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
