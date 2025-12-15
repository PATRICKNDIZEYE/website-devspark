"use client";

import { ArrowUpRight, Plus } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 pb-6 px-4 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto h-full">
        {/* Main Grid Layout - Bento Box Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-[calc(100vh-140px)]">
          {/* LEFT COLUMN - 5 columns */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Top Dark Card - Tagline */}
            <div className="bg-[#1a1a1a] rounded-[32px] p-8 md:p-10 transition-all duration-300">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Get Online.
                <br />
                Get Trusted.
                <br />
                Get Moving.
              </h1>
            </div>

            {/* Middle Light Card - Main Content */}
            <div className="bg-[#f5f5f5] rounded-[32px] p-8 md:p-10 flex-1 flex flex-col justify-between min-h-[300px] transition-all duration-300">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-[#1a1a1a]">
                  We build reliable digital foundations for growing businesses
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md text-[#666666]">
                  We help businesses look professional, get online fast, and
                  stay online. From company websites to ongoing maintenance, we
                  focus on practical solutions that work in the real market.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="bg-white text-[#1a1a1a] border border-[#e0e0e0] px-6 md:px-8 py-3 md:py-4 rounded-full font-medium flex items-center gap-2 transition-all hover:scale-105 hover:shadow-lg text-sm md:text-base"
                >
                  GET STARTED
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="#services"
                  className="bg-[#1a1a1a] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium transition-all hover:scale-105 hover:bg-[#333] text-sm md:text-base"
                >
                  OUR SERVICES
                </a>
              </div>
            </div>

            {/* Bottom Stats Row */}
            <div className="flex gap-3 md:gap-4">
              {/* Stats Card 1 */}
              <div className="bg-[#f5f5f5] rounded-[20px] md:rounded-[24px] p-4 md:p-6 flex-shrink-0 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold mb-1 text-[#1a1a1a]">
                  QUICK
                </div>
                <div className="text-xs md:text-sm text-center text-[#666666]">
                  At delivering
                </div>
              </div>

              {/* Stats Card 2 */}
              <div className="bg-[#f5f5f5] rounded-[20px] md:rounded-[24px] p-4 md:p-6 flex-1 flex items-center gap-3 md:gap-4 transition-all duration-300">
                <div className="flex-1">
                  <div className="font-semibold text-sm md:text-base lg:text-lg leading-tight text-[#1a1a1a]">
                    Startups, SMEs, NGOs & local businesses
                  </div>
                </div>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-600">
                  <img
                    src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&q=80"
                    alt="Image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - 7 columns - Image with overlays */}
          <div className="lg:col-span-7 relative rounded-[32px] overflow-hidden min-h-[400px] lg:min-h-0">
            {/* Main Image Background */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&q=80')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-gray-400/20"></div>
            </div>

            {/* Overlay Cards - positioned at top right */}
            <div className="relative h-full p-4 md:p-6 flex flex-col justify-start items-end pt-6 md:pt-10">
              <div className="flex flex-col gap-4 max-w-[280px]">
                {/* Top Card - Learn more (WHITE - always) */}
                <div className="bg-white rounded-[20px] md:rounded-[24px] p-5 md:p-6 shadow-xl">
                  <div className="flex items-start gap-2 mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden bg-gradient-to-br from-gray-600 to-gray-800 flex-shrink-0"></div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden bg-gradient-to-br from-gray-300 to-gray-500 flex-shrink-0"></div>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-[#1a1a1a] mb-2 leading-tight">
                    Learn more
                    <br />
                    about our services
                  </h3>
                  <p className="text-xs md:text-sm text-[#666666] mb-4">
                    Discover how we help businesses get online
                  </p>
                  <a
                    href="#services"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-[#1a1a1a] flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-colors text-[#1a1a1a]"
                  >
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>

                {/* Bottom Card - Let's Talk (DARK - always) */}
                <div className="bg-[#1a1a1a] rounded-[20px] md:rounded-[24px] p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                    Let&apos;s Talk!
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 mb-4">
                    Ready to work with us? Contact us and we&apos;ll get back to
                    you
                  </p>
                  <a
                    href="#contact"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Plus className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
