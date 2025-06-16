import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import {
  trackPerformance,
  trackPageLoad,
  trackResourceTiming,
} from "./utils/performance";
import { siteConfig } from "./config/site";

const inter = Inter({ subsets: ["latin"] });

// Combine all keywords into a single array for metadata
const allKeywords = [
  ...siteConfig.keywords.primary,
  ...siteConfig.keywords.locations,
  ...siteConfig.keywords.services,
  ...siteConfig.keywords.budget,
];

export const metadata = {
  title: "Wedding Services App",
  description: "Your one-stop destination for wedding planning",
  keywords: allKeywords.join(", "),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  if (typeof window !== "undefined") {
    trackPerformance();
    trackPageLoad();
    trackResourceTiming();
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
