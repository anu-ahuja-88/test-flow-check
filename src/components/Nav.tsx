'use client'

import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { business } from '@/data/business'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Reviews', href: '#testimonials' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
              style={{ backgroundColor: business.design.primaryColor }}
            >
              {business.name.charAt(0)}
            </div>
            <span
              className="font-bold text-lg leading-tight"
              style={{ fontFamily: 'var(--font-heading)', color: business.design.primaryColor }}
            >
              {business.name}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${business.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {business.phone}
            </a>
            <a
              href={business.bookingUrl || `tel:${business.phone.replace(/\s/g, '')}`}
              className="text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-all duration-200 hover:-translate-y-px shadow-sm"
              style={{ backgroundColor: business.design.ctaColor }}
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 mt-3 space-y-2">
              <a
                href={`tel:${business.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 px-4 py-3 rounded-lg font-semibold text-slate-700"
              >
                <Phone className="w-4 h-4" />
                {business.phone}
              </a>
              <a
                href={business.bookingUrl || `tel:${business.phone.replace(/\s/g, '')}`}
                className="block text-center text-white font-semibold px-4 py-3 rounded-lg"
                style={{ backgroundColor: business.design.ctaColor }}
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
