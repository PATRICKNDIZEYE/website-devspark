'use client'

import { CheckCircle2 } from 'lucide-react'

const WhyChooseUs = () => {
  const points = [
    'Registered and compliant business',
    'Clear communication and timelines',
    'Practical solutions, not overpromises',
    'Long-term technical support'
  ]

  return (
    <section 
      id="why-choose-us" 
      className="py-20 px-4 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <div 
              key={index}
              className={`rounded-[24px] p-6 md:p-8 flex items-start gap-4 transition-all duration-300 hover:scale-105 ${
                index % 2 === 0 ? 'bg-[#1a1a1a]' : 'bg-[#f5f5f5]'
              }`}
            >
              <CheckCircle2 
                className={`w-6 h-6 flex-shrink-0 mt-1 ${
                  index % 2 === 0 ? 'text-emerald-400' : 'text-emerald-600'
                }`}
              />
              <p className={`text-lg md:text-xl font-medium ${
                index % 2 === 0 ? 'text-white' : 'text-[#1a1a1a]'
              }`}>
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
