import * as Icons from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { business } from '@/data/business'
import AnimateIn from './AnimateIn'

type IconName = keyof typeof Icons

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = Icons[name as IconName] as React.ComponentType<{ className?: string }>
  if (!IconComponent) return <Icons.Wrench className={className} />
  return <IconComponent className={className} />
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn>
          <div className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: business.design.ctaColor }}
            >
              What We Do
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Services
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              From quick fixes to complete installations — we handle it all with the same care and precision.
            </p>
          </div>
        </AnimateIn>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {business.services.map((service, i) => (
            <AnimateIn key={i} delay={i * 0.07}>
              <div className="group bg-white rounded-2xl p-7 border border-slate-100 hover:border-transparent hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default h-full flex flex-col">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: `${business.design.primaryColor}12` }}
                >
                  <DynamicIcon
                    name={service.icon}
                    className="w-6 h-6"
                    // @ts-expect-error style prop
                    style={{ color: business.design.primaryColor }}
                  />
                </div>

                <h3
                  className="text-lg font-bold text-slate-900 mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{service.description}</p>

                <div
                  className="flex items-center gap-1 mt-5 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: business.design.primaryColor }}
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateIn delay={0.3}>
          <div className="text-center mt-12">
            <a
              href={`tel:${business.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              style={{ backgroundColor: business.design.ctaColor }}
            >
              Call {business.phone} — Free Quote
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
