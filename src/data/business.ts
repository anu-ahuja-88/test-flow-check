// ============================================================
// BUSINESS DATA — Claude fills this in for each client
// All website content is driven by this single file.
// ============================================================

export interface BusinessData {
  // Core identity
  name: string
  slug: string
  tagline: string
  description: string
  industry: string
  location: string

  // Contact
  phone: string
  email: string
  address: string
  bookingUrl?: string // e.g. Calendly link

  // Hero section
  hero: {
    headline: string
    subheadline: string
    ctaPrimary: string
    ctaSecondary: string
    badge?: string // e.g. "⭐ Rated 4.9/5 on Google"
  }

  // Trust stats bar
  stats: Array<{
    value: string
    label: string
  }>

  // Services grid (max 6)
  services: Array<{
    icon: string // Lucide icon name: e.g. "Wrench", "Zap", "Droplets"
    title: string
    description: string
  }>

  // About section
  about: {
    headline: string
    body: string
    credentials: string[] // Short bullet points: "Licensed Master Plumber", "NZQA Certified"
  }

  // How it works
  process: Array<{
    step: string // "01", "02", "03"
    title: string
    description: string
  }>

  // Testimonials (generate 3 realistic NZ ones)
  testimonials: Array<{
    name: string
    location: string // NZ suburb: "Remuera", "Mt Eden", "Ponsonby"
    rating: number
    text: string
  }>

  // Service areas
  serviceAreas: string[]

  // Design system (from ui-ux-pro-max search output)
  design: {
    primaryColor: string    // e.g. "#1e3a5f"
    secondaryColor: string  // e.g. "#2563eb"
    ctaColor: string        // e.g. "#f97316" — should pop
    headingFont: string     // Google Font name: "Poppins"
    bodyFont: string        // Google Font name: "Inter"
    googleFontsUrl: string  // Full URL from fonts.google.com
  }

  // SEO
  seo: {
    title: string       // "[Service] [City] | [Business Name]" — max 60 chars
    description: string // Service + location + USP — max 160 chars
    keywords: string
  }

  // Outreach (for send-email.js)
  clientEmail?: string
  clientName?: string
}

// ============================================================
// EXAMPLE — Replace all values below with the actual client's info
// ============================================================

export const business: BusinessData = {
  name: "Kiwi Plumbing Co",
  slug: "kiwi-plumbing",
  tagline: "Auckland's Most Trusted Plumbers",
  description: "Auckland's most trusted plumbing team — fast response, upfront pricing, no surprises.",
  industry: "Plumbing & Gas",
  location: "Auckland, New Zealand",

  phone: "09 123 4567",
  email: "info@kiwiplumbing.co.nz",
  address: "Serving all of Auckland",
  bookingUrl: "https://calendly.com/kiwiplumbing",

  hero: {
    headline: "Auckland's Most Reliable Plumbers — On Time, Every Time",
    subheadline: "Fast response times, upfront pricing, and no call-out surprises. From leaky taps to full bathroom renovations — we've got you covered.",
    ctaPrimary: "Call Now: 09 123 4567",
    ctaSecondary: "See Our Services",
    badge: "Rated 4.9/5 on Google · 500+ Jobs Completed",
  },

  stats: [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Jobs Completed" },
    { value: "4.9★", label: "Google Rating" },
    { value: "60min", label: "Avg Response Time" },
  ],

  services: [
    {
      icon: "Droplets",
      title: "Leak Repairs",
      description: "Fast diagnosis and repair of burst pipes, leaking taps, and hidden leaks — before they cause costly damage.",
    },
    {
      icon: "Flame",
      title: "Hot Water Systems",
      description: "Installation and servicing of electric, gas, and heat pump hot water systems from all leading brands.",
    },
    {
      icon: "Bath",
      title: "Bathroom Renovations",
      description: "Complete bathroom fit-outs — from design to final fixture, we handle the full plumbing scope.",
    },
    {
      icon: "AlertCircle",
      title: "Blocked Drains",
      description: "High-pressure water jetting and CCTV inspection to clear and diagnose stubborn blockages.",
    },
    {
      icon: "Building2",
      title: "New Builds",
      description: "Full plumbing installation for residential new builds — on schedule and compliant with NZ building codes.",
    },
    {
      icon: "Wrench",
      title: "Maintenance & Servicing",
      description: "Annual plumbing checks, compliance certificates, and ongoing maintenance plans for landlords and homeowners.",
    },
  ],

  about: {
    headline: "Family-Owned. Auckland-Proud. Here When You Need Us.",
    body: "Kiwi Plumbing Co was founded in 2009 by brothers Mark and Jason Smith — two licensed plumbers who were tired of seeing Aucklanders get stung with hidden fees and no-show tradespeople. We operate on a simple promise: show up on time, do the job right, and charge a fair price. Every technician on our team is Licensed Building Practitioner (LBP) certified and background-checked. We're not a franchise or a call centre — when you ring us, you speak to a real plumber.",
    credentials: [
      "Licensed Master Plumbers",
      "LBP Certified Technicians",
      "Covered by $5M Public Liability Insurance",
      "Authorised Rheem & Rinnai Service Agent",
      "Same-Day Emergency Response",
    ],
  },

  process: [
    {
      step: "01",
      title: "Call or Book Online",
      description: "Ring us directly or book online in 60 seconds. We'll confirm your appointment window same day.",
    },
    {
      step: "02",
      title: "We Come to You",
      description: "A licensed plumber arrives on time with all the gear. We assess the issue and give you a fixed quote — no hourly surprises.",
    },
    {
      step: "03",
      title: "Job Done Right",
      description: "We complete the work to code, clean up after ourselves, and walk you through exactly what was done.",
    },
    {
      step: "04",
      title: "Follow-Up Guarantee",
      description: "All work is backed by our 12-month workmanship guarantee. If anything's not right, we come back — no charge.",
    },
  ],

  testimonials: [
    {
      name: "Sarah M.",
      location: "Mt Eden, Auckland",
      rating: 5,
      text: "Had a burst pipe under the kitchen at 7am on a Monday. Mark was on-site within the hour. Fixed, no mess, invoice matched the quote exactly. Honestly the most stress-free trade experience I've had in 10 years of home ownership.",
    },
    {
      name: "James T.",
      location: "Remuera, Auckland",
      rating: 5,
      text: "Used Kiwi Plumbing for a full bathroom reno — new shower, vanity, toilet, the lot. They coordinated with our builder and tiler seamlessly. The workmanship is excellent and the bathroom looks amazing. Highly recommend.",
    },
    {
      name: "Priya K.",
      location: "Ponsonby, Auckland",
      rating: 5,
      text: "Our hot water cylinder gave up on a Friday afternoon. Jason had a new Rheem installed by Saturday morning. Super professional, explained all the options, and the price was very fair. Will definitely use again.",
    },
  ],

  serviceAreas: [
    "Auckland CBD",
    "North Shore",
    "West Auckland",
    "South Auckland",
    "East Auckland",
    "Waiheke Island",
  ],

  design: {
    primaryColor: "#1e3a5f",
    secondaryColor: "#2563eb",
    ctaColor: "#f97316",
    headingFont: "Poppins",
    bodyFont: "Inter",
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap",
  },

  seo: {
    title: "Auckland Plumbers | Kiwi Plumbing Co",
    description:
      "Auckland's trusted plumbing team — fast response, upfront pricing, no surprises. Leaks, hot water, drains, and full bathroom renos. Call 09 123 4567.",
    keywords: "plumber Auckland, plumbing Auckland, leak repair, hot water installation, blocked drains Auckland, bathroom renovation",
  },

  clientEmail: "mark@kiwiplumbing.co.nz",
  clientName: "Mark",
}
