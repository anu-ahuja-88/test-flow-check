import { Phone, ArrowRight, Star, CheckCircle } from 'lucide-react'
import { business } from '@/data/business'
import AnimateIn from './AnimateIn'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Background gradient blob */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 70% 40%, ${business.design.primaryColor}10, transparent 65%)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${business.design.ctaColor}08, transparent 70%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div>
            {/* Badge */}
            {business.hero.badge && (
              <AnimateIn delay={0}>
                <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-8">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-amber-800">{business.hero.badge}</span>
                </div>
              </AnimateIn>
            )}

            {/* Headline */}
            <AnimateIn delay={0.08}>
              <h1
                className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.1] text-slate-900 mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {business.hero.headline}
              </h1>
            </AnimateIn>

            {/* Subheadline */}
            <AnimateIn delay={0.15}>
              <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
                {business.hero.subheadline}
              </p>
            </AnimateIn>

            {/* CTAs */}
            <AnimateIn delay={0.22}>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  style={{ backgroundColor: business.design.ctaColor }}
                >
                  <Phone className="w-5 h-5" />
                  {business.hero.ctaPrimary}
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-semibold text-base hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 cursor-pointer"
                >
                  {business.hero.ctaSecondary}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </AnimateIn>

            {/* Trust credentials */}
            <AnimateIn delay={0.3}>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10">
                {business.about.credentials.slice(0, 3).map((cred, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-600">
                    <CheckCircle
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: business.design.primaryColor }}
                    />
                    <span className="text-sm font-medium">{cred}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right: Visual card */}
          <AnimateIn delay={0.18} direction="right">
            <div className="relative">
              <div
                className="relative rounded-3xl overflow-hidden h-[480px] flex items-center justify-center"
                style={{
                  background: `linear-gradient(145deg, ${business.design.primaryColor}12 0%, ${business.design.primaryColor}22 100%)`,
                }}
              >
                {/* Decorative circles */}
                <div
                  className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-15"
                  style={{ backgroundColor: business.design.primaryColor }}
                />
                <div
                  className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full opacity-10"
                  style={{ backgroundColor: business.design.ctaColor }}
                />

                {/* Floating stats card */}
                <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 mx-6 w-full max-w-sm">
                  {/* Avatar */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0"
                      style={{ backgroundColor: business.design.primaryColor }}
                    >
                      {business.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>
                        {business.name}
                      </div>
                      <div className="text-slate-500 text-sm">{business.location}</div>
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {business.stats.map((stat, i) => (
                      <div key={i} className="bg-slate-50 rounded-xl p-4 text-center">
                        <div
                          className="text-2xl font-extrabold"
                          style={{ color: business.design.primaryColor, fontFamily: 'var(--font-heading)' }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5 leading-tight">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA inside card */}
                  <a
                    href={`tel:${business.phone.replace(/\s/g, '')}`}
                    className="mt-5 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white text-sm font-semibold cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: business.design.ctaColor }}
                  >
                    <Phone className="w-4 h-4" />
                    Call {business.phone}
                  </a>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-2.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-slate-700">Google Verified</span>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
