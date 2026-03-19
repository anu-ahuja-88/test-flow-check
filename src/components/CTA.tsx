import { Phone, Calendar } from 'lucide-react'
import { business } from '@/data/business'
import AnimateIn from './AnimateIn'

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: business.design.primaryColor }}>
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, white, transparent 40%), radial-gradient(circle at 80% 20%, ${business.design.ctaColor}, transparent 40%)`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-4">
            Ready to Get Started?
          </p>
          <h2
            className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Get a Free Quote Today — No Obligation
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Call us directly or book online. We&apos;ll respond same day with an honest, upfront quote — no hidden fees, no surprises.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${business.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 w-full sm:w-auto justify-center"
              style={{ backgroundColor: business.design.ctaColor }}
            >
              <Phone className="w-5 h-5" />
              Call {business.phone}
            </a>
            {business.bookingUrl && (
              <a
                href={business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white border-2 border-white/30 hover:border-white/70 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 w-full sm:w-auto justify-center hover:bg-white/10"
              >
                <Calendar className="w-5 h-5" />
                Book Online
              </a>
            )}
          </div>
        </AnimateIn>

        {/* Service areas */}
        {business.serviceAreas && business.serviceAreas.length > 0 && (
          <AnimateIn delay={0.25}>
            <div className="mt-12 pt-10 border-t border-white/20">
              <p className="text-white/50 text-sm mb-3 uppercase tracking-wide font-medium">
                Serving
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {business.serviceAreas.map((area, i) => (
                  <span
                    key={i}
                    className="text-white/80 text-sm bg-white/10 px-3 py-1.5 rounded-full font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        )}
      </div>
    </section>
  )
}
