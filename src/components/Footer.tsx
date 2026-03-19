import { Phone, Mail, MapPin } from 'lucide-react'
import { business } from '@/data/business'

export default function Footer() {
  const year = new Date().getFullYear()

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Reviews', href: '#testimonials' },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                style={{ backgroundColor: business.design.primaryColor }}
              >
                {business.name.charAt(0)}
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                {business.name}
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {business.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white text-sm transition-colors duration-150 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white text-sm transition-colors duration-150"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: business.design.ctaColor }} />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white text-sm transition-colors duration-150"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: business.design.ctaColor }} />
                  {business.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: business.design.ctaColor }} />
                {business.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {year} {business.name}. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Website by{' '}
            <span className="text-slate-400 font-medium">Verra Web Studio</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
