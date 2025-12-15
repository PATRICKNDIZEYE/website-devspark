'use client'

import { Globe, ShoppingCart, Server, Mail, Search, Code } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Business Websites',
      description: 'Professional websites designed to represent your business clearly and credibly.',
      includes: [
        'Company profile websites',
        'Landing pages for products or services',
        'Mobile-responsive design',
        'Fast loading and secure setup'
      ],
      ideal: 'companies, NGOs, startups, and professionals',
      delivery: '7–14 days depending on scope',
      bgColor: '#1a1a1a',
      textColor: 'white'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Websites',
      description: 'Simple and reliable online stores for businesses selling products or services.',
      includes: [
        'Product catalog',
        'Order management',
        'Mobile Money and pay-on-delivery support',
        'Admin dashboard'
      ],
      bgColor: '#f5f5f5',
      textColor: '#1a1a1a'
    },
    {
      icon: Server,
      title: 'Website Hosting & Maintenance',
      description: 'We don\'t disappear after launch. We keep your website running smoothly.',
      includes: [
        'Hosting setup and management',
        'Domain configuration',
        'Monthly updates',
        'Security monitoring and backups'
      ],
      note: 'Available as monthly plans',
      bgColor: '#f5f5f5',
      textColor: '#1a1a1a'
    },
    {
      icon: Mail,
      title: 'Business Email & Digital Identity',
      description: 'Look professional with branded email addresses.',
      includes: [
        'info@yourcompany.com email setup',
        'Google Workspace or Microsoft email configuration',
        'Email security and support'
      ],
      bgColor: '#1a1a1a',
      textColor: 'white'
    },
    {
      icon: Search,
      title: 'Basic SEO & Online Presence',
      description: 'We help customers find you online without false promises.',
      includes: [
        'Google Business Profile setup',
        'Website SEO fundamentals',
        'Performance and speed optimization'
      ],
      bgColor: '#f5f5f5',
      textColor: '#1a1a1a'
    },
    {
      icon: Code,
      title: 'Custom Web Applications',
      description: 'Tailored web solutions for internal operations.',
      examples: [
        'Booking systems',
        'Admin dashboards',
        'Inventory and reporting tools'
      ],
      note: 'Offered based on project scope and requirements',
      bgColor: '#1a1a1a',
      textColor: 'white'
    }
  ]

  return (
    <section 
      id="services" 
      className="py-20 px-4 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index}
                className="rounded-[24px] p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ 
                  backgroundColor: service.bgColor,
                  color: service.textColor
                }}
              >
                <Icon className="w-10 h-10 mb-4" style={{ color: service.textColor }} />
                <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: service.textColor }}>
                  {service.title}
                </h3>
                <p className="text-sm md:text-base mb-4 opacity-80">
                  {service.description}
                </p>
                {service.includes && (
                  <ul className="text-xs md:text-sm space-y-2 mb-4 opacity-80">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">–</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {service.examples && (
                  <ul className="text-xs md:text-sm space-y-2 mb-4 opacity-80">
                    {service.examples.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">–</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {service.ideal && (
                  <p className="text-xs md:text-sm mb-2 opacity-80">
                    <strong>Ideal for:</strong> {service.ideal}
                  </p>
                )}
                {service.delivery && (
                  <p className="text-xs md:text-sm mb-2 opacity-80">
                    <strong>Delivery:</strong> {service.delivery}
                  </p>
                )}
                {service.note && (
                  <p className="text-xs md:text-sm opacity-70 italic">
                    {service.note}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
