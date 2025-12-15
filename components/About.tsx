'use client'

const About = () => {
  return (
    <section 
      id="about" 
      className="py-20 px-4 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
          About Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#f5f5f5] rounded-[32px] p-8 md:p-10">
            <p className="text-lg leading-relaxed text-[#1a1a1a]">
              We are a registered technology company focused on delivering simple, effective digital solutions. Our approach is straightforward: understand the client&apos;s business, build what is needed, and support it properly after launch.
            </p>
          </div>
          <div className="bg-[#1a1a1a] rounded-[32px] p-8 md:p-10">
            <p className="text-lg leading-relaxed text-white">
              We believe strong digital presence is no longer optional. A professional website, reliable email, and basic search visibility are now requirements for doing business.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
