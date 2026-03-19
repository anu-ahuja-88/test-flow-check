import { business } from '@/data/business'
import AnimateIn from './AnimateIn'

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn>
          <div className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: business.design.ctaColor }}
            >
              Simple Process
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              How It Works
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Getting the job done is easier than you think. Here&apos;s exactly what to expect.
            </p>
          </div>
        </AnimateIn>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
            style={{ backgroundColor: `${business.design.primaryColor}20` }}
          />

          {business.process.map((step, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="relative text-center bg-white rounded-2xl p-7 border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-200">
                {/* Step number */}
                <div className="flex items-center justify-center mb-5">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-extrabold text-lg relative z-10"
                    style={{
                      backgroundColor: business.design.primaryColor,
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {step.step}
                  </div>
                </div>

                <h3
                  className="text-lg font-bold text-slate-900 mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
