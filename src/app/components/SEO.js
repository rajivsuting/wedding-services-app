"use client";

import Head from "next/head";
import { siteConfig } from "../config/site";

export default function SEO({
  title,
  description,
  keywords = [],
  ogImage,
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false,
}) {
  const siteTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const siteDescription = description || siteConfig.description;
  const siteKeywords = [...new Set([...siteConfig.keywords, ...keywords])].join(
    ", "
  );
  const siteOgImage = ogImage || siteConfig.ogImage;

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={siteOgImage} />
      <meta property="og:url" content={siteConfig.url} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteOgImage} />

      {/* Robots */}
      <meta
        name="robots"
        content={noIndex ? "noindex,nofollow" : "index,follow"}
      />

      {/* Viewport */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />

      {/* Canonical URL */}
      <link rel="canonical" href={siteConfig.url} />
    </Head>
  );
}
