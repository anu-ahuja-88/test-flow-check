import { CheckCircle } from 'lucide-react'
import { business } from '@/data/business'
import AnimateIn from './AnimateIn'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <AnimateIn direction="left">
            <div className="relative">
              {/* Main card */}
              <div
                className="rounded-3xl p-10 h-[420px] flex flex-col justify-end relative overflow-hidden"
                style={{
                  background: `linear-gradient(145deg, ${business.design.primaryColor} 0%, ${business.design.primaryColor}cc 100%)`,
                }}
              >
                {/* Background pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 80% 20%, white, transparent 50%)`,
                  }}
                />
                {/* Content */}
                <div className="relative z-10 text-white">
                  <div className="text-5xl font-extrabold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    {business.stats[0]?.value || '15+'}
                  </div>
                  <div className="text-lg font-medium opacity-80 mb-6">
                    {business.stats[0]?.label || 'Years of Experience'}
                  </div>
                  <div className="text-xl font-bold leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
                    {business.about.headline}
                  </div>
                </div>
              </div>

              {/* Floating stat */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-2xl p-5 text-center min-w-[140px]">
                <div
                  className="text-3xl font-extrabold"
                  style={{ color: business.design.ctaColor, fontFamily: 'var(--font-heading)' }}
                >
                  {business.stats[2]?.value || '4.9★'}
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  {business.stats[2]?.label || 'Google Rating'}
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Right: Text */}
          <div>
            <AnimateIn>
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: business.design.ctaColor }}
              >
                About Us
              </p>
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {business.about.headline}
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">{business.about.body}</p>
            </AnimateIn>

            {/* Credentials */}
            <div className="space-y-3">
              {business.about.credentials.map((cred, i) => (
                <AnimateIn key={i} delay={i * 0.07}>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${business.design.primaryColor}15` }}
                    >
                      <CheckCircle className="w-4 h-4" style={{ color: business.design.primaryColor }} />
                    </div>
                    <span className="text-slate-700 font-medium">{cred}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
