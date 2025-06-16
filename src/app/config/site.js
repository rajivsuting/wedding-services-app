export const siteConfig = {
  name: "Wedding Services | Budget Destination Weddings in India",
  description:
    "Plan your dream destination wedding in India without breaking the bank. Expert wedding planning services, affordable venues, and stress-free coordination.",
  url: "https://wedding-services-app.vercel.app",
  ogImage:
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",

  // Enhanced SEO settings
  seo: {
    titleTemplate: "%s | Wedding Services",
    defaultTitle: "Wedding Services | Budget Destination Weddings in India",
    defaultDescription:
      "Plan your dream destination wedding in India without breaking the bank. Expert wedding planning services, affordable venues, and stress-free coordination.",
    canonical: "https://wedding-services-app.vercel.app",
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: "https://wedding-services-app.vercel.app",
      site_name: "Wedding Services",
      images: [
        {
          url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
          width: 1200,
          height: 630,
          alt: "Wedding Services - Budget Destination Weddings in India",
        },
      ],
    },
    twitter: {
      handle: "@weddingservices",
      site: "@weddingservices",
      cardType: "summary_large_image",
    },
    additionalMetaTags: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },
      {
        name: "theme-color",
        content: "#ee4c59",
      },
    ],
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
  },

  // Enhanced keywords with categories
  keywords: {
    primary: [
      "budget destination wedding",
      "affordable wedding planning",
      "India wedding venues",
      "wedding services",
      "destination wedding packages",
    ],
    locations: [
      "Udaipur wedding venues",
      "Goa beach weddings",
      "Shimla mountain weddings",
      "Kerala backwater weddings",
      "Jaipur palace weddings",
    ],
    services: [
      "wedding planning",
      "wedding venues",
      "wedding decoration",
      "wedding photography",
      "wedding catering",
      "wedding makeup",
      "wedding entertainment",
      "wedding transportation",
    ],
    budget: [
      "affordable wedding packages",
      "budget wedding planning",
      "cost-effective wedding venues",
      "cheap wedding services",
      "wedding packages under 5 lakhs",
    ],
  },

  // Structured data for rich snippets
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WeddingBusiness",
    name: "Wedding Services",
    description: "Budget destination wedding planning services in India",
    url: "https://wedding-services-app.vercel.app",
    logo: "https://wedding-services-app.vercel.app/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Wedding Street",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400001",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-1234567890",
      contactType: "customer service",
      email: "info@weddingservices.com",
      availableLanguage: ["English", "Hindi"],
    },
    priceRange: "₹₹",
    openingHours: "Mo-Su 09:00-18:00",
    sameAs: [
      "https://facebook.com/weddingservices",
      "https://instagram.com/weddingservices",
      "https://twitter.com/weddingservices",
    ],
  },

  social: {
    facebook: "https://facebook.com/weddingservices",
    instagram: "https://instagram.com/weddingservices",
    twitter: "https://twitter.com/weddingservices",
  },

  contact: {
    email: "info@weddingservices.com",
    phone: "+91 1234567890",
    address: "123 Wedding Street, Mumbai, India",
    workingHours: "Monday - Sunday: 9:00 AM - 6:00 PM",
  },

  navigation: {
    main: [
      { name: "Home", href: "/" },
      { name: "Venues", href: "/venues" },
      { name: "Services", href: "/services" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Venue Booking", href: "/services/venue-booking" },
      { name: "Wedding Planning", href: "/services/wedding-planning" },
      { name: "Decoration", href: "/services/decoration" },
      { name: "Photography", href: "/services/photography" },
      { name: "Catering", href: "/services/catering" },
    ],
  },
};
