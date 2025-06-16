export function getOptimizedImageUrl(url, width = 800) {
  // If the URL is from Unsplash, optimize it
  if (url.includes("unsplash.com")) {
    return `${url}&w=${width}&q=80&auto=format&fit=crop`;
  }

  // If the URL is from our own domain, use Next.js Image Optimization
  if (url.startsWith("/")) {
    return url;
  }

  // For other URLs, return as is
  return url;
}

export function getImageSizes(breakpoints = [640, 768, 1024, 1280]) {
  return breakpoints.map((bp) => `(max-width: ${bp}px) ${bp}px`).join(", ");
}

export function getResponsiveImageProps(src, alt, className = "") {
  return {
    src: getOptimizedImageUrl(src),
    alt,
    className,
    sizes: getImageSizes(),
    loading: "lazy",
    quality: 80,
  };
}
