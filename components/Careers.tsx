'use client'

import { Briefcase, Users, Award, Mail } from 'lucide-react'

const Careers = () => {
  const roles = [
    {
      title: 'Frontend Developer',
      requirements: [
        'HTML, CSS, JavaScript',
        'Responsive design',
        'Attention to detail'
      ]
    },
    {
      title: 'Backend / Web Developer',
      requirements: [
        'PHP, Node.js, or Python',
        'Database management',
        'API integration'
      ]
    },
    {
      title: 'UI/UX Designer',
      requirements: [
        'Web and mobile design',
        'User-focused layouts',
        'Figma or similar tools'
      ]
    },
    {
      title: 'Digital Marketing Intern',
      requirements: [
        'Content writing',
        'Basic SEO',
        'Social media support'
      ]
    }
  ]

  const lookFor = [
    'Discipline and reliability',
    'Willingness to learn',
    'Respect for deadlines',
    'Team collaboration'
  ]

  const weOffer = [
    'Real project experience',
    'Skill growth',
    'Performance-based growth opportunities'
  ]

  return (
    <section 
      id="careers" 
      className="py-20 px-4 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Careers
          </h2>
          <p className="text-xl md:text-2xl mb-2" style={{ color: 'var(--text-secondary)' }}>
            We are hiring – January Intake
          </p>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            We are expanding our team and looking for motivated individuals who want to grow with a real company.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
            <h3 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Open Roles
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role, index) => (
              <div 
                key={index}
                className={`rounded-[24px] p-6 md:p-8 transition-all duration-300 hover:scale-105 ${
                  index % 2 === 0 ? 'bg-[#1a1a1a]' : 'bg-[#f5f5f5]'
                }`}
              >
                <h4 className={`text-xl md:text-2xl font-bold mb-4 ${
                  index % 2 === 0 ? 'text-white' : 'text-[#1a1a1a]'
                }`}>
                  {role.title}
                </h4>
                <ul className="space-y-2">
                  {role.requirements.map((req, i) => (
                    <li 
                      key={i} 
                      className={`text-sm md:text-base flex items-start ${
                        index % 2 === 0 ? 'text-gray-300' : 'text-[#666666]'
                      }`}
                    >
                      <span className="mr-2">–</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#f5f5f5] rounded-[24px] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-[#1a1a1a]" />
              <h3 className="text-2xl font-bold text-[#1a1a1a]">
                What We Look For
              </h3>
            </div>
            <ul className="space-y-2">
              {lookFor.map((item, i) => (
                <li key={i} className="text-base text-[#666666] flex items-start">
                  <span className="mr-2">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#1a1a1a] rounded-[24px] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-white" />
              <h3 className="text-2xl font-bold text-white">
                What We Offer
              </h3>
            </div>
            <ul className="space-y-2">
              {weOffer.map((item, i) => (
                <li key={i} className="text-base text-gray-300 flex items-start">
                  <span className="mr-2">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-[24px] p-8 md:p-10 text-center">
          <Mail className="w-8 h-8 text-white mx-auto mb-4" />
          <p className="text-lg md:text-xl text-white mb-2">
            Send your CV and portfolio to:
          </p>
          <a 
            href="mailto:careers@yourcompany.com"
            className="text-xl md:text-2xl font-bold text-white hover:underline inline-block"
          >
            careers@yourcompany.com
          </a>
        </div>
      </div>
    </section>
  )
}

export default Careers
